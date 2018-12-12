<?php

namespace App\Http\Controllers;

use App\Http\Requests\ProductRequest;
use App\Model\FinishedStorage;
use App\Model\Product;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;

class ProductController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        if(request()->has('all')){
            $list = Product::where('category_id',request()->get('category_id'))->orderByDesc('sort')->get();
        }else{
            $list = Product::Like(request()->get('product_name'),'name')->Equal(request()->get('category_id'),'category_id')->with(['category','user'])->paginate($this->per_page);

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
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(ProductRequest $request)
    {
        //
        $data = $request->all();
        $data['created_user'] = Auth::user()->id;

        return Product::create($data) ? success() : fail();
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
    public function update(ProductRequest $request, $id)
    {
        //
        $data = $request->all();
        $data['created_user'] = Auth::user()->id;

        $product = Product::findOrFail($id);

        return $product->fill($data)->save() ? success() : fail();
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

        return Product::destroy($id) ? success() : fail();
    }

    public function stockStatistics()
    {
        $list = Product::with(['category','user'])->orderBy('category_id')->orderBy('created_at')->get();

        foreach ($list as $item) {
            $item['storage_number'] = DB::table('finished_storage')->where('product_id',$item->id)->where('storage_type','!=',3)->sum('quantity');
            $item['outgoing_number'] = DB::table('outgoing_product')->where('product_id',$item->id)->sum('outgoing_quantity');
            $item['stock'] = $item['storage_number'] - $item['outgoing_number'];
            $item['stock_money'] = bcmul(($item['storage_number'] - $item['outgoing_number']),$item['market_price'],2);
        }
        return success($list);
    }
}
