<?php

namespace App\Http\Controllers;

use App\Http\Requests\FinishedOutgoingRequest;
use App\Model\Finance;
use App\Model\FinishedOutgoing;
use App\Model\OutgoingProduct;
use Carbon\Carbon;
use Chumper\Zipper\Facades\Zipper;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Maatwebsite\Excel\Facades\Excel;


class FinishedOutgoingController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
        if (request()->has('contract_number')) {
            $list = FinishedOutgoing::where('contract_number', request()->get('contract_number'))->with('product.product', 'business')->first();

        } else {
            $balance = \request()->input('balance', -1);

            $list = FinishedOutgoing::Like(request()->get('contract'), 'contract_number')
                ->Equal(request()->get('outgoing_type'), 'outgoing_type')
                ->where('category_id', request()->get('category_id'))
                ->whereHas('product', function ($query) {
                    $query->whereHas('product', function ($query) {
                        $query->Like(request()->get('product_name'), 'name');
                    });
                })
                ->with('product.product', 'business')
                ->when(request()->has('settlement'),
                    function ($query) {
                        $query->like(request()->get('remarks'), 'content')
                            ->whereHas('business', function ($query) {
                                $query->Like(request()->get('business_name'), 'business_name');
                            });
                    },
                    function ($query) {
                        $query->where('outgoing_type', '!=', '4');
                    })

                ->when(-1 != $balance,
                    function($query) use ($balance){
                        $query->where('balance', $balance)->where('outgoing_type', '!=', FinishedOutgoing::OUTGOING_TYPE_RETURN);
                    })
                ->orderByDesc('created_at')
                ->when(request()->get('category_id') != 3,
                    function ($query) {
                        $query->orderByDesc('contract_number');
                    }
                )
                ->paginate($this->per_page);

        }
        $data = DB::table('outgoing_storage')->where('category_id', request()->get('category_id'))->get();
        $a = 0;
        foreach ($data as $datum) {
            $a = $a + $datum->receivable_money;
        }

        return success($list);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request $request
     * @return \Illuminate\Http\Response
     */
    public function store(FinishedOutgoing $outgoing, FinishedOutgoingRequest $request)
    {
        //
        $data = $request->all();


        $outgoing_money = 0;
        $a = collect($data['product'])->count();
        $b = collect($data['product'])->unique('product_id')->count();
        if ($a != $b) {
            return fail('商品不能重复');
        }
        foreach ($data['product'] as $datum) {

            $total = bcmul($datum['outgoing_quantity'], $datum['product_price'], 2);//商品数量乘以价格

            $outgoing_money = bcadd($outgoing_money, $total, 2);

        }
        if ($data['category_id'] == 1) {
            switch ($data['taxation'] * 1) {
                case 1://无
                    $data['value_added_tax'] = 0;
                    $data['withholding_tax'] = 0;
                    $data['outgoing_money'] = $outgoing_money;
                    $data['receivable_money'] = $outgoing_money;

                    break;
                case 2://增值税 0.165
                    $data['value_added_tax'] = $this->tax($outgoing_money, 0.165);
                    $data['withholding_tax'] = 0;
                    $data['outgoing_money'] = $outgoing_money;
                    $data['receivable_money'] = bcadd($data['outgoing_money'], $data['value_added_tax'], 2);
                    break;
                case 3://增值税加3%代扣税
                    $data['value_added_tax'] = $this->tax($outgoing_money, 0.165);
                    $data['withholding_tax'] = $this->tax($outgoing_money, 0.03);;
                    $data['outgoing_money'] = $outgoing_money;
                    $data['receivable_money'] = bcsub(bcadd($data['outgoing_money'], $data['value_added_tax'], 2), $data['withholding_tax'], 2);
                    break;
                default:
                    return fail('税费不正确');
            }

        }
        try {
            DB::transaction(function () use ($data, $outgoing) {
                $products = $data['product'];
                $productArray = [];
                //$outgoing_number = 0;
                foreach ($products as $product) {
                    //$outgoing_number += $product['outgoing_quantity'];
                    $productArray[] = new OutgoingProduct([
                        'product_price' => $product['product_price'],
                        'outgoing_quantity' => $product['outgoing_quantity'],
                        'product_id' => $product['product_id']
                    ]);
                }
                //DB::table('product')->increment('outgoing_number',$outgoing_number);
                $outgoing->fill($data)->save();
                $outgoing->product()->saveMany($productArray);
            });
            return success();
        } catch (\ErrorException $exception) {
            return fail('程序异常');
        }
    }

    /**
     * Display the specified resource.
     *
     * @param  int $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request $request
     * @param  int $id
     * @return \Illuminate\Http\Response
     */
    public function update(FinishedOutgoingRequest $request, $id)
    {
        //

        $outgoing = FinishedOutgoing::findOrFail($id);
        $data = $request->all();
        $outgoing_money = 0;

        $a = collect($data['product'])->count();
        $b = collect($data['product'])->unique('product_id')->count();
        if ($a != $b) {
            return fail('商品不能重复');
        }

        foreach ($data['product'] as $datum) {

            $total = bcmul($datum['outgoing_quantity'], $datum['product_price'], 2);//商品数量乘以价格

            $outgoing_money = bcadd($outgoing_money, $total, 2);

        }
        if ($data['category_id'] == 1) {
            switch ($data['taxation'] * 1) {
                case 1://无
                    $data['value_added_tax'] = 0;
                    $data['withholding_tax'] = 0;
                    $data['outgoing_money'] = $outgoing_money;
                    $data['receivable_money'] = $outgoing_money;

                    break;
                case 2://增值税 0.165
                    $data['value_added_tax'] = $this->tax($outgoing_money, 0.165);
                    $data['withholding_tax'] = 0;
                    $data['outgoing_money'] = $outgoing_money;
                    $data['receivable_money'] = bcadd($data['outgoing_money'], $data['value_added_tax'], 2);
                    break;
                case 3://增值税加3%代扣税
                    $data['value_added_tax'] = $this->tax($outgoing_money, 0.165);
                    $data['withholding_tax'] = $this->tax($outgoing_money, 0.03);;
                    $data['outgoing_money'] = $outgoing_money;
                    $data['receivable_money'] = bcsub(bcadd($data['outgoing_money'], $data['value_added_tax'], 2), $data['withholding_tax'], 2);
                    break;
                default:
                    return fail('税费不正确');
            }
        }

        try {
            DB::transaction(function () use ($data, $outgoing) {
                $products = $data['product'];
                $productArray = [];
                foreach ($products as $product) {
                    $productArray[] = new OutgoingProduct([
                        'product_price' => $product['product_price'],
                        'outgoing_quantity' => $product['outgoing_quantity'],
                        'product_id' => $product['product_id']
                    ]);
                }

                $outgoing->fill($data)->save();
                $outgoing->product()->where('outgoing_id', $outgoing->id)->delete();
                $outgoing->product()->saveMany($productArray);
            });
            return success();
        } catch (\ErrorException $exception) {
            return fail($exception->getMessage());
        }


    }

    public function updateReceived($id)
    {
        $outgoing = FinishedOutgoing::findOrFail($id);

        $data = request()->only(['received_money_new', 'received_time']);

        try {
            DB::transaction(function () use ($data, $outgoing) {

                if (array_has($data, 'received_money_new')) {
                    $finance = Finance::orderByDesc('id')->first();
                    if (!$finance) {
                        $balance = 0;
                    } else {
                        $balance = $finance['balance'];
                    }

                    if ($data['received_money_new'] < 0) {
                        Finance::create([
                            'project' => '货款-跳票',
                            'income' => 0,
                            'expend' => abs($data['received_money_new']),
                            'balance' => bcadd($balance, $data['received_money_new'], 2),
                            'remarks' => '合同编号:' . $outgoing->contract_number . ' -跳票',
                            'type' => 1,
                            'outgoing_id' => $outgoing->id
                        ]);
                    } else {
                        Finance::create([
                            'project' => '货款',
                            'income' => $data['received_money_new'],
                            'expend' => 0,
                            'balance' => bcadd($balance, $data['received_money_new'], 2),
                            'remarks' => '合同编号:' . $outgoing->contract_number,
                            'type' => 1,
                            'outgoing_id' => $outgoing->id
                        ]);
                    }

                    $outgoing->received_money = bcadd($outgoing->received_money, $data['received_money_new'], 2);
                }


                if (key_exists('received_time', $data)) {
                    $outgoing->received_time = $data['received_time'];
                } else {
                    $outgoing->received_time = Carbon::now();
                }
                $outgoing->save();

            });
            return success();
        } catch (\ErrorException $exception) {
            return fail($exception->getMessage());
        }

    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
        try {
            DB::transaction(function () use ($id) {
                $out = FinishedOutgoing::findOrFail($id);

                $out->product()->where('outgoing_id', $out->id)->delete();
                $out->delete();

            });
            return success();
        } catch (\ErrorException $exception) {
            return fail($exception->getMessage());
        }

    }

    public function getMoney(Request $request)
    {
        $balance = $request->input('balance', -1);

        $collection = FinishedOutgoing::select('id', 'receivable_money', 'received_money', 'contract_number')
            ->where('category_id', 1)->where('contract_number', '>', 0)
            ->when($contractNumber = $request->input('contract'), function ($query) use ($contractNumber) {
                $query->like($contractNumber, 'contract_number');
            })
            ->when($businessName = $request->input('business_name'), function ($query) use ($businessName) {
                $query->whereHas('business', function ($query) use ($businessName) {
                    $query->like($businessName, 'business_name');
                });
            })
            ->when($remarks = $request->input('remarks'), function ($query) use ($remarks) {
                $query->like($remarks, 'content');
            })
            ->when($outgoingType = $request->input('outgoing_type'), function ($query) use ($outgoingType) {
                $query->where('outgoing_type', $outgoingType);
            })
            ->when(-1 != $balance,
                function($query) use ($balance){
                    $query->where('balance', $balance)->where('outgoing_type', '!=', FinishedOutgoing::OUTGOING_TYPE_RETURN);
                })
            ->get();

        \Log::info('collect :',  $collection->toArray() );
        if(1 == $balance) {
            // 全部为已完成收款的查询
            $data['receivable_money'] = $collection->sum('receivable_money_with_return');//应收
            \Log::info('finished receivable_money_with_return:'. $data['receivable_money'] );
        }else{
            $data['receivable_money'] = $collection->sum('receivable_money');//应收
        }


        $data['received_money'] = $collection->sum('received_money');//已收
        $data['uncollected'] = bcsub($data['receivable_money'], $data['received_money'], 2);//未收

        return success($data);
    }

    public function export()
    {

        $number = request()->get('number');

        $start = request()->get('start');
        $end = request()->get('end');
        $name = request()->get('name');

        if ($start && $end) {
            $start = Carbon::parse($start);
            $end = Carbon::parse($end);

            $start = date('Y-m-d', mktime(0, 0, 0, $start->month, $start->day, $start->year));
            $end = date('Y-m-d', mktime(0, 0, 0, $end->month, $end->day, $end->year) + 86400);
        }

        //统计要导出数据的条数
        $count = FinishedOutgoing::hasTime($start, $end)->where('category_id', request()->get('category_id'))
            ->orderByDesc('id')
            ->count();

        if ($number <= 0) {
            $number = 10000;
        }
        if ($count > 10000) {
            $number = 10000;
        } else {
            $number = $number && $number < $count ? $number : $count;

        }
        if ($count < 1) {
            return fail('没有可导出的数据');
        }
        //计算数据保存几个文件
        $num = ceil($count / $number);

        for ($i = 0; $i < $num; ++$i) {

            $cellData = FinishedOutgoing::with('product.product', 'business')->hasTime($start, $end)->where('category_id', request()->get('category_id'))
                ->skip($number * $i)
                ->take($number)
                ->orderByDesc('created_at')
                ->get()->toArray();

            $data = [];
            $receivable_money = 0;
            $received_money = 0;
            $uncollected = 0;
            $value_added_tax = 0;
            $withholding_tax = 0;
            $money = 0;
            foreach ($cellData as $cellDatum) {

                $arr['created_at'] = $cellDatum['created_at'];
                $arr['outgoing_type_zh'] = $cellDatum['outgoing_type_zh'];
                $arr['contract_number'] = $cellDatum['contract_number'];
                $arr['business'] = $cellDatum['business']['business_name'];
                $arr['product_name'] = array_map(function ($v) {
                    return $v['product']['name'];
                }, $cellDatum['product']);
                $arr['product_name'] = implode("\n", $arr['product_name']);
                $arr['outgoing_address'] = $cellDatum['outgoing_address'];
                $price = array_map(function ($v) {
                    return $v['product_price'];
                }, $cellDatum['product']);
                $arr['price'] = implode("\n", $price);
                $number = array_map(function ($v) {
                    return $v['outgoing_quantity'];
                }, $cellDatum['product']);
                $arr['number'] = implode("\n", $number);
                $unit = array_map(function ($v) {
                    return $v['product']['metering_unit'];
                }, $cellDatum['product']);
                $arr['unit'] = implode("\n", $unit);
                $arr['outgoing_money'] = $cellDatum['outgoing_money'];
                $arr['value_added_tax'] = $cellDatum['value_added_tax'];
                $arr['withholding_tax'] = $cellDatum['withholding_tax'];
                $arr['receivable_money'] = $cellDatum['receivable_money'];
                $arr['received_money'] = $cellDatum['received_money'];
                $arr['received_time'] = $cellDatum['received_time'];
                $arr['uncollected'] = bcsub($cellDatum['receivable_money'], $cellDatum['received_money'], 2);//未收
                $arr['content'] = $cellDatum['content'];
                $arr['created_user'] = $cellDatum['created_user'];

                $receivable_money = bcadd($receivable_money, $arr['receivable_money'], 2);
                $received_money = bcadd($received_money, $arr['received_money'], 2);
                $uncollected = bcadd($uncollected, $arr['uncollected'], 2);
                $value_added_tax = bcadd($value_added_tax, $arr['value_added_tax'], 2);
                $withholding_tax = bcadd($withholding_tax, $arr['withholding_tax'], 2);
                $money = bcadd($money, $arr['outgoing_money'], 2);
                $data[] = $arr;
            }
            $cellData = collect($data);
            $cellData = $cellData->prepend(['出库时间', '类型', '合同编号', '商家名称', '产品名称', '出库地点', '单价', '出库数量', '单位', '金额', '增值税', '3%代扣税', '应收金额', '已收金额', '回款日期', '未收金额', '备注', '经办人'])->toArray();

            Excel::create('finance_' . time(), function ($excel) use ($cellData, $money, $value_added_tax, $withholding_tax, $receivable_money, $received_money, $uncollected) {
                $excel->sheet('finance', function ($sheet) use ($cellData, $money, $value_added_tax, $withholding_tax, $receivable_money, $received_money, $uncollected) {
                    $sheet->rows($cellData);
                    $sheet->appendRow(['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '']);//这里是表头的名称
                    $sheet->appendRow(['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '']);//这里是表头的名称
                    $sheet->appendRow(['', '', '', '', '', '', '', '', '', '总金额', '总增值税', '总代扣税', '总应收金额', '总已收金额', '', '总未收金额', '', '']);//这里是表头的名称
                    $sheet->appendRow(['', '', '', '', '', '', '', '', '', $money, $value_added_tax, $withholding_tax, $receivable_money, $received_money, '', $uncollected, '', '']);//这里是表头的名称
                });
            })->store('xls', './finance');
        }


        $files = glob('./finance/*');

        $filename = './' . time() . '.zip';

        Zipper::make($filename)->add($files)->close();
        $this->delDirAndFile('./finance');
        return response()->download($filename);
    }

    //循环删除目录和文件函数
    public function delDirAndFile($dirName)
    {
        if ($handle = opendir("$dirName")) {
            while (false !== ($item = readdir($handle))) {
                if ($item != "." && $item != "..") {
                    if (is_dir("$dirName/$item")) {
                        $this->delDirAndFile("$dirName/$item");
                    } else {
                        unlink("$dirName/$item");
                    }
                }
            }
            closedir($handle);
        }
    }
}
