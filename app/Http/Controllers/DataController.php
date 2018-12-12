<?php

namespace App\Http\Controllers;

use App\Http\Requests\BusinessRequest;
use App\Model\Business;
use App\Model\Data;
use App\Model\FinishedOutgoing;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class DataController extends Controller
{
    public function index()
    {
        $list = Data::paginate(15);
        return success($list);
    }

    /*public function data()
    {
        $data = DB::table('ysz_detail')->get();

        $d = [];
        $a = 0;
        foreach ($data as $value){

            if($value->type == 1){//收入


                $a = $a + $value->tprice;

                $d[] = [
                    'project' => $value->item,
                    'income' => $value->tprice,
                    'expend' => 0,
                    'balance' => $a ,
                    'appendix' => '',
                    'appendix_name' => $value->goods_file,
                    'remarks' => $value->instore_remarks,
                    'type' => 1,
                    'created_at' => date('Y-m-d H:i:s',$value->add_time)
                ];

            }elseif ($value->type == 2){
                //支出
                $a = $a - $value->tprice*1;
                $d[] = [
                    'project' => $value->item,
                    'income' => 0,
                    'expend' => $value->tprice,
                    'balance' => $a,
                    'appendix' => '',
                    'appendix_name' => $value->goods_file,
                    'remarks' => $value->instore_remarks,
                    'type' => 2,
                    'created_at' => date('Y-m-d H:i:s',$value->add_time)

                ];
            }


        }

        DB::table('income_expenditure')->insert($d);

    }*/


    public function data()//出库
    {

//        $r = DB::raw("select GROUP_CONCAT(ysz_outstore.outstore_time) as outstore_time,
//GROUP_CONCAT(ysz_shop.title) as shop_name,
//GROUP_CONCAT(ysz_outstore.didian) as didian,
//GROUP_CONCAT(ysz_outstore.outstore_hetong) as outstore_hetong,
//GROUP_CONCAT(ysz_product.name) as product_name,
//GROUP_CONCAT(ysz_outstore.price) as price,
//GROUP_CONCAT(ysz_outstore.outstore_count) as outstore_count,
//GROUP_CONCAT(ysz_product.type) as type,
//sum(ysz_outstore.outstore_count*ysz_outstore.price) as jiner,
//sum(shui1) as shui1,sum(shui2) as shui2,
//sum(ysz_outstore.outstore_count*ysz_outstore.price+ysz_outstore.shui1-ysz_outstore.shui2) as jiner2,
//GROUP_CONCAT(ysz_outstore.outstore_remarks) as outstore_remarks,
//GROUP_CONCAT(ysz_outstore.goods_file) as goods_file,
//GROUP_CONCAT(ysz_outstore.applicat) as applicat,
//GROUP_CONCAT(ysz_outstore.outcategory) as outcategory,
//sum(acttotal) as acttotal,
//
//GROUP_CONCAT(ysz_outstore.id) as myid,
//GROUP_CONCAT(backtime) as backtime
//from ysz_outstore join ysz_product on ysz_outstore.pid=ysz_product.id join ysz_shop on ysz_outstore.shopname=ysz_shop.id
//where ysz_outstore.cate = 25 group by ysz_outstore.outstore_hetong
//");
//        $a = DB::select($r);
//        $b = DB::table('outgoing_storage')->where('category_id',1)->get()->keyBy('contract_number');
//        echo '旧';
//        echo "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;------------------------------------------------------------------------";
//        echo "新";
//        echo '<br>';
//        $yingshoutotal =0;
//        $yihsoutotal = 0;
//
//        $yingshoutotal1 =0;
//        $yihsoutotal1 = 0;
//
//
//
//        foreach ($a as $item) {
//
//            $yingshoutotal = $yingshoutotal+$item->jiner2;
//            $yihsoutotal = $yihsoutotal+$item->acttotal;
//
//
//
//            $moutstore_hetong = explode(",",$item->outstore_hetong);
//            $hetong = $moutstore_hetong[0];
//            $yingshoutotal1 = $yingshoutotal1+$b[$hetong]->receivable_money;
//            $yihsoutotal1 = $yihsoutotal1+$b[$hetong]->received_money;
//            echo $hetong;echo '----------';
//            echo '<br>';
//            if($item->jiner != $b[$hetong]->outgoing_money){
//                echo "<span style='color:red'>$item->jiner -------------- {$b[$hetong]->outgoing_money}</span>";
//            }else{
//                echo "<span>$item->jiner -------------- {$b[$hetong]->outgoing_money}</span>";
//
//            }
//            echo '<br>';
//
//            if($item->shui1 != $b[$hetong]->value_added_tax){
//                echo "<span style='color:red'>$item->shui1 -------------- {$b[$hetong]->value_added_tax}</span>";
//            }else{
//                echo "<span>$item->shui1 -------------- {$b[$hetong]->value_added_tax}</span>";
//
//            }
//            echo '<br>';
//
//            if($item->shui2 != $b[$hetong]->withholding_tax){
//                echo "<span style='color:red'>$item->shui2 -------------- {$b[$hetong]->withholding_tax}</span>";
//            }else{
//                echo "<span>$item->shui2 -------------- {$b[$hetong]->withholding_tax}</span>";
//
//            }
//            echo '<br>';
//
//            if($item->jiner2 != $b[$hetong]->receivable_money){
//                echo "<span style='color:red'>$item->jiner2 -------------- {$b[$hetong]->receivable_money}</span>";
//            }else{
//                echo "<span>$item->jiner2 -------------- {$b[$hetong]->receivable_money}</span>";
//
//            }
//            echo '<br>';
//
//            if($item->acttotal != $b[$hetong]->received_money){
//                echo "<span style='color:red'>$item->acttotal -------------- {$b[$hetong]->received_money}</span>";
//            }else{
//                echo "<span>$item->acttotal -------------- {$b[$hetong]->received_money}</span>";
//
//            }
//
//            echo '<br>';
//            echo '------------------------------';
//            echo '<br>';
//            unset($b[$hetong]);
//
//        }
//dump($yihsoutotal1,$yingshoutotal1);
//dd($yihsoutotal,$yingshoutotal);
        $data = Data::get()->groupBy('outstore_hetong')->toArray();

        $new_data = [];
        $c_data = [];

        foreach ($data as $key => $item) {
            $products = [];

            $receivable_money = 0;
            $received_money = 0;
            $uncollected = 0;
            $value_added_tax = 0;
            $withholding_tax = 0;
            $money = 0;
            if ($key > 0) {
                $products = [];
                foreach ($item as $v) {


                    $product = [
                        'outgoing_quantity' => $v['outstore_count'],
                        'product_price' => $v['price'],
                        'product_id' => $v['pid'],
                        'return_quantity' => 0,
                    ];

                    $received_money = bcadd($received_money, $v['acttotal'], 2);
                    $value_added_tax = bcadd($value_added_tax, $v['shui1'], 2);
                    $withholding_tax = bcadd($withholding_tax, $v['shui2'], 2);
                    $money = bcadd($money, bcmul($v['outstore_count'], $v['price'], 2), 2);

                    $products[] = $product;

                }
                $a = bcadd($money, $value_added_tax, 2);
                $receivable_money = bcsub($a, $withholding_tax, 2);

                switch ($item[0]['cate']) {
                    case 25:
                        $category = 1;
                        break;
                    case 27:
                        $category = 3;
                        break;
                    case 30:
                        $category = 5;
                        break;


                }
                switch ($item[0]['shuiid']) {
                    case 4:
                        $taxation = 1;
                        break;
                    case 1:
                        $taxation = 2;
                        break;
                    case 3:
                        $taxation = 3;
                        break;


                }
                $new = [
                    'id' => $item[0]['id'] > 0?$item[0]['id']: $item[1]['id'],
                    'created_user' => 'admin',
                    'business_id' => $item[0]['shopname'],
                    'outgoing_address' => $item[0]['didian'],
                    'contract_number' => $item[0]['outstore_hetong'],
                    'outgoing_type' => $item[0]['outcategory'],
                    'taxation' => $taxation,
                    'appendix' => '',
                    'appendix_name' => '',
                    'content' => $item[0]['outstore_remarks'],
                    'outgoing_money' => $money ?: $item[0]['price'],
                    'receivable_money' => $receivable_money ?: $item[0]['actmoney'],
                    'value_added_tax' => $value_added_tax ?: $item[0]['shui1'],
                    'withholding_tax' => $withholding_tax ?: $item[0]['shui2'],
                    'category_id' => $category,
                    'received_money' => $received_money ?: $item[0]['acttotal'],
                    'received_time' => $item[0]['backtime'] ?: null,
                    'created_at' => date('Y-m-d H:i:s', $item[0]['outstore_time'])
                ];
                try {
                    DB::transaction(function () use ($new, $products,$item) {

                        DB::table('outgoing_storage')->insert($new);
                        $out = FinishedOutgoing::find($new['id']);
                        if (!$out) {

                            throw new \ErrorException('----有合同号' . $new['id']);
                        }

                        $out->product()->createMany($products);

                    });

                } catch (\ErrorException $exception) {
                    return $exception->getMessage();
                }
            } else {
                $products = [];
                foreach ($item as $v) {

                    if($v['outcategory'] == 2){
                        $id = $v['id'];
                        $product = [
                            'outgoing_quantity' => $v['outstore_count'],
                            'product_price' => $v['price'],
                            'product_id' => $v['pid'],
                            'return_quantity' => 0,
                        ];

                        $shopname = $v['shopname'];
                        $outstore_time = $v['outstore_time'];
                        $products[] = $product;
                        /*switch ($v['cate']) {
                            case 25:
                                $category = 1;
                                break;
                            case 27:
                                $category = 3;
                                break;
                            case 30:
                                $category = 5;
                                break;


                        }*/
                        switch ($v['shuiid']) {
                            case 4:
                                $taxation = 1;
                                break;
                            case 1:
                                $taxation = 2;
                                break;
                            case 3:
                                $taxation = 3;
                                break;


                        }
                    }else{
                        $c_data[] = $v;
                    }


                }
                $new = [
                    'id' => $id,
                    'created_user' => 'admin',
                    'business_id' => $shopname,
                    'outgoing_address' => '',
                    'contract_number' => '',
                    'outgoing_type' => 2,
                    'taxation' => 1,
                    'appendix' => '',
                    'appendix_name' => '',
                    'content' => 'to Annie from Sana
to James from Police station',
                    'outgoing_money' => 0,
                    'receivable_money' => 0,
                    'value_added_tax' => 0,
                    'withholding_tax' => 0,
                    'category_id' => 1,
                    'received_money' => 0,
                    'received_time' => null,
                    'created_at' => date('Y-m-d H:i:s', $outstore_time)
                ];
                try {
                    DB::transaction(function () use ($new, $products) {

                        DB::table('outgoing_storage')->insert($new);
                        $out = FinishedOutgoing::find($new['id']);
                        if (!$out) {
                            throw new \ErrorException('没有合同号' . $new['id']);
                        }

                        $out->product()->createMany($products);

                    });

                } catch (\ErrorException $exception) {
                    return $exception->getMessage();
                }

            }


        }
        $c_data = collect($c_data)->keyBy('id');

        foreach ($c_data as $item){
            $products = [];



                $product = [
                    'outgoing_quantity' => $item['outstore_count'],
                    'product_price' => $item['price'],
                    'product_id' => $item['pid'],
                    'return_quantity' => 0,
                ];

                $received_money = bcadd($received_money, $item['acttotal'], 2);
                $value_added_tax = bcadd($value_added_tax, $item['shui1'], 2);
                $withholding_tax = bcadd($withholding_tax, $item['shui2'], 2);
                $money = bcadd($money, bcmul($item['outstore_count'], $item['price'], 2), 2);

                $products[] = $product;


            $a = bcadd($money, $value_added_tax, 2);
            $receivable_money = bcsub($a, $withholding_tax, 2);

            switch ($item['cate']) {
                case 25:
                    $category = 1;
                    break;
                case 27:
                    $category = 3;
                    break;
                case 30:
                    $category = 5;
                    break;


            }
            switch ($item['shuiid']) {
                case 4:
                    $taxation = 1;
                    break;
                case 1:
                    $taxation = 2;
                    break;
                case 3:
                    $taxation = 3;
                    break;


            }
            $new = [
                'id' => $item['id'] > 0?$item['id']: $item['id'],
                'created_user' => 'admin',
                'business_id' => $item['shopname'],
                'outgoing_address' => $item['didian'],
                'contract_number' => $item['outstore_hetong'],
                'outgoing_type' => $item['outcategory'],
                'taxation' => $taxation,
                'appendix' => '',
                'appendix_name' => '',
                'content' => $item['outstore_remarks'],
                'outgoing_money' => $money ?: $item['price'],
                'receivable_money' => $receivable_money ?: $item['actmoney'],
                'value_added_tax' => $value_added_tax ?: $item['shui1'],
                'withholding_tax' => $withholding_tax ?: $item['shui2'],
                'category_id' => $category,
                'received_money' => $received_money ?: $item['acttotal'],
                'received_time' => $item['backtime'] ?: null,
                'created_at' => date('Y-m-d H:i:s', $item['outstore_time'])
            ];
            try {
                DB::transaction(function () use ($new, $products,$item) {

                    DB::table('outgoing_storage')->insert($new);
                    $out = FinishedOutgoing::find($new['id']);
                    if (!$out) {

                        throw new \ErrorException('----有合同号' . $new['id']);
                    }

                    $out->product()->createMany($products);

                });

            } catch (\ErrorException $exception) {
                return $exception->getMessage();
            }
        }

        //DB::table('finished_storage')->insert($new_data);

    }

    /*public function data()
    {
        $data = DB::table('ysz_instore')->get();

        $d = [];
        $a = 0;
        foreach ($data as $value) {
            switch($value['cate_id']){
                case 25:
                    $category = 1;
                    break;
                case 27:
                    $category = 3;
                    break;
                case 30:
                    $category = 5;
                    break;


            }

                $d[] = [
                    'product_id' ,
                    'address' ,
                    'price' ,
                    'quantity' ,
                    'storage_money' ,
                    'metering_unit',
                    'remarks' ,
                    'appendix' ,
                    'created_user' ,
                    'storage_time',
                    'storage_type',
                    'appendix_name',
                    'contract_number',
                    'category_id',
                    'outgoing_product'
                ];


        }
    }*/
}
