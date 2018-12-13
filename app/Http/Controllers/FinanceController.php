<?php

namespace App\Http\Controllers;

use App\Http\Requests\FinanceRequest;
use App\Model\Finance;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class FinanceController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
        $list = Finance::Like(request()->get('project'),'project')->Like(request()->get('remarks'),'remarks')->latest()->paginate($this->per_page);
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
    public function store(FinanceRequest $request)
    {
        //
        $data = $request->all();
        $finance = Finance::orderByDesc('id')->first();
        if(!$finance){
            $balance = 0;
        }else{
            $balance = $finance['balance'];
        }

        switch ($data['type']){
            case 1:
                $data['income'] = $data['money'];
                $data['expend'] = 0;
                $data['balance'] = bcadd($balance,$data['money'],2);
                break;
            case 2:
                $data['income'] = 0;
                $data['expend'] = $data['money'];
                $data['balance'] = bcsub($balance,$data['money'],2);
        }
        $data['created_at'] = Carbon::now();
        !array_has($data, 'remarks') && $data['remarks'] = '无';
        return Finance::create($data) ? success() : fail();
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
    public function update(FinanceRequest $request, $id)
    {
        //
        $data = $request->all();

        $finance = Finance::findOrFail($id);

        $finance_last = Finance::where('id','<',$id)->orderByDesc('id')->first();
        if(!$finance_last){
            $balance = 0;
        }else{
            $balance = $finance_last['balance'];
        }

        switch ($data['type']){
            case 1:
                $data['income'] = $data['money'];
                $data['expend'] = 0;
                $data['balance'] = bcadd($balance,$data['money'],2);
                break;
            case 2:
                $data['income'] = 0;
                $data['expend'] = $data['money'];
                $data['balance'] = bcsub($balance,$data['money'],2);
        }

        return $finance->fill($data)->save() ? success() : fail();
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
                $finance = Finance::with('outgoing')->findOrFail($id);
                if($finance->outgoing){

                    $finance->outgoing->received_money = bcsub($finance->outgoing->received_money,$finance->income,2);
                    $finance->outgoing->received_money = bcsub($finance->outgoing->received_money,-$finance->expend,2);
                    $finance->outgoing->save();
                }
                $finance->delete();
            });
            return success();
        }catch (\ErrorException $exception){
            return fail($exception->getMessage());
        }

    }
}
