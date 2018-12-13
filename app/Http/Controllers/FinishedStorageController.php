<?php

namespace App\Http\Controllers;

use App\Http\Requests\FinishedStorageRequest;
use App\Model\FinishedOutgoing;
use App\Model\FinishedStorage;
use App\Model\OutgoingProduct;
use App\Model\Product;
use Illuminate\Http\Request;
use Illuminate\Support\Carbon;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;

class FinishedStorageController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
        $list = FinishedStorage::where('category_id',request()->get('category_id'))->with(['product.category','user', 'out.product'])->orderByDesc('storage_time')->paginate($this->per_page)->toArray();
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
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(FinishedStorageRequest $request)
    {
        //
        try{
            $res = DB::transaction(function() use ($request){
                $data = $request->all();



                if(key_exists('storage_type',$data) && $data['storage_type'] == 3){
                    // 退货入库
                    $request->offsetSet('outgoing_type',4);
                    $out_data = [];
                    $out = null;
                    $out_money = 0;

                    $storage = FinishedStorage::create([
                        'quantity' => collect($data['product'])->sum('return_quantity'),
                        'created_user' => Auth::user()->id,
                        'storage_time' => Carbon::create(),
                        'remarks' => "{$data['contract_number']}(退)",
                        'storage_type' => 3,
                        'category_id' => $data['category_id'],
                        'contract_number' => $data['contract_number'],
                    ]);

                    foreach ($data['product'] as $item){

                        if(key_exists('return_quantity',$item) && key_exists('address',$item) && $item['return_quantity']){
                            if( $item['address']){

                                $product = Product::findOrFail($item['product_id']);
                                $data['quantity'] = $item['return_quantity'];

//                                $data['price'] = $product->market_price;
                                $data['created_user'] = Auth::user()->id;
                                $data['storage_time'] = Carbon::create();
                                $data['address'] = $item['address'];
                                $data['remarks'] = $item['remarks']??"{$data['contract_number']}(退)";
                                $data['product_id'] = $item['product_id'];
                                $data['outgoing_product'] = $item['outgoing_product'];
                                $outgoing = OutgoingProduct::findOrFail($item['outgoing_product']);
                                $data['price'] = $outgoing->product_price;
                                $data['storage_money'] = bcmul($data['price'],$data['quantity'],2);
                                $out = FinishedOutgoing::findOrFail($outgoing->outgoing_id);
                                $out_money += $data['storage_money'];
                                //$out->receivable_money = $out->receivable_money - $data['storage_money'];//应收金额减少
                                if($data['quantity'] > ($outgoing->outgoing_quantity - $outgoing->return_quantity)){
                                    throw new \ErrorException('入库数量不能大于出库数量');
                                }


                                /*if($data['price'] > $outgoing->product_price){
                                    throw new \ErrorException('入库价格不能大于出库价格');
                                }*/
                                $outgoing->return_quantity = $outgoing->return_quantity + $item['return_quantity'];
                                //$outgoing->outgoing_quantity = $outgoing->outgoing_quantity - $item['return_quantity'];

                                $out->save();
                                $outgoing->save();

                                $out_data[] = new OutgoingProduct([
                                    'product_price' => $data['price'],
                                    'outgoing_quantity' => -$data['quantity'],
                                    'product_id' => $data['product_id'],
                                    'storage_id' => $storage->id,
                                    'address' => $item['address'],
                                    'storage_money' => $data['storage_money']
                                ]) ;
                            }else{
                                throw new \ErrorException('退货数量与退货地址不能为空');
                            }

                        }
                    }

                    $cnm = FinishedOutgoing::create([
                        'created_user' => 'admin',
                        'business_id' => $out->business_id,
                        'outgoing_address' => $out->outgoing_address,
                        'contract_number' => $out->contract_number,
                        'outgoing_type' => 4,
                        'taxation' => $out->taxation,
                        'appendix' => $out->appendix,
                        'appendix_name' => $out->appendix_name,
                        'content' => '退货入库',
                        'outgoing_money' => -$out_money,
                        'value_added_tax'=>-$this->outgoing($out->taxation,$out_money)['value_added_tax'],
                        'withholding_tax' =>-$this->outgoing($out->taxation,$out_money)['withholding_tax'],
                        'receivable_money' => bcsub(bcadd(-$this->outgoing($out->taxation,$out_money)['value_added_tax'],-$out_money,2),-$this->outgoing($out->taxation,$out_money)['withholding_tax'],2),
                        'category_id' => 1,
                        'created_at' => Carbon::now(),
                    ]);
                    $cnm->product()->saveMany($out_data);
                }else{
                    $product = Product::findOrFail($data['product_id']);

                    $data['price'] = $product->market_price;
                    $data['created_user'] = Auth::user()->id;
                    $data['storage_time'] = Carbon::create();
                    if($data['category_id'] == 3){
                        $data['storage_type'] = 1;

                    }
                    $data['storage_money'] = bcmul($data['price'],$data['quantity'],2);


                    FinishedStorage::create($data);
                }



            });
            return success($res);
        }catch (\ErrorException $exception){
            return fail($exception->getMessage());
        }

    }

    public function outgoing($taxation,$outgoing_money)
    {

            switch ($taxation * 1){
                case 1://无
                    $data['value_added_tax'] = 0;
                    $data['withholding_tax'] = 0;
                    return $data;

                    break;
                case 2://增值税 0.165
                    $data['value_added_tax'] = $this->tax($outgoing_money,0.165);
                    $data['withholding_tax'] = 0;
                    return $data;
                    break;
                case 3://增值税加3%代扣税
                    $data['value_added_tax'] = $this->tax($outgoing_money,0.165);
                    $data['withholding_tax'] = $this->tax($outgoing_money,0.03);;
                    return $data;
                    break;
                default:
                    throw new \ErrorException( '税费不正确');
            }



    }
    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(FinishedStorageRequest $request, $id)
    {
        //
        $storage = FinishedStorage::findOrFail($id);
        try{
            DB::transaction(function() use ($request,$storage){
                $data = $request->all();
                $data['created_user'] = Auth::user()->id;
                if($data['category_id'] == 3){
                    $data['storage_type'] = 1;

                }
                $data['storage_money'] = bcmul($data['price'],$data['quantity'],2);
                if($data['storage_type'] == 3){
                    $outgoing = OutgoingProduct::findOrFail($request->get('outgoing_product'));

                    if($data['quantity'] > ($outgoing->outgoing_quantity - $outgoing->return_quantity)){
                        throw new \ErrorException('入库数量不能大于出库数量');
                    }
                    /*if($data['price'] > $outgoing->product_price){
                        throw new \ErrorException('入库价格不能大于出库价格');
                    }*/
                    $outgoing->return_quantity = $data['quantity'];
                    $outgoing->save();
                }
                $storage->fill($data)->save();

            });
            return success();
        }catch (\ErrorException $exception){
            return fail($exception->getMessage());
        }
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
        try{
            DB::transaction(function() use ($id){
                $storage = FinishedStorage::find($id);

                if($storage->storage_type == 3){
                    $out = OutgoingProduct::findOrFail($storage->outgoing_product);
                    $out->return_quantity = $out->return_quantity - $storage->quantity;
                    //$out->outgoing_quantity = $out->outgoing_quantity + $storage->quantity;
                    $outgoing = FinishedOutgoing::findOrFail($out->outgoing_id);
                    //$outgoing->receivable_money = $outgoing->receivable_money + $storage->storage_money;
                    $out->save();
                    $outgoing->save();
                    $out_product = OutgoingProduct::where('storage_id',$id)->first();
                    if($out_product){
                        $out_product->delete();
                        if(!$out_product->storage->out){
                            $out_product->storage->delete();
                        }
                        if(!$out_product->out->product->count()){
                            $out_product->out->delete();
                        }
                    }

                }
                $storage->delete();
            });
            return success();
        }catch (\ErrorException $exception){
            return fail($exception->getMessage());
        }

    }

    // 更新库存时间
    public function updateStorageTime(Request $request)
    {
        $storage = FinishedStorage::findOrFail($request->input('id'));

        $storage->update([
            'storage_time' => $request->input('storage_time')
        ]);

        return success();
    }
}
