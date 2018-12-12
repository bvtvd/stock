<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class FinishedStorageRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {

        $category_id = request()->get('category_id');

        if($category_id == 1){
            $rules =  [
                //
                //'product_id' => 'required',
                //'address'   =>  'required' ,

                //'quantity'  =>  'required' ,
                //'storage_money' =>  'required' ,
                //'metering_unit' =>  'required',
               // 'remarks'   =>  'required',
               // 'appendix'  =>  'required' ,
                //'storage_time'  =>  'required',
                'storage_type'  =>  'required',
                'contract_number' => 'required_if:storage_type,3'
            ];
        }
        $rules =  [
            //
            //'product_id' => 'required',


            //'quantity'  =>  'required' ,
            //'storage_money' =>  'required' ,
            //'metering_unit' =>  'required',
            //'remarks'   =>  'required',
            //'appendix'  =>  'required' ,
            //'storage_time'  =>  'required',


        ];
        return $rules;

    }

    public function attributes()
    {
        return [
            'product_id'    =>  '产品名称' ,
            'address'   =>  '库存地址',

            'quantity'  =>  '货物数量' ,
           // 'storage_money' =>  '入库金额' ,
            //'metering_unit' =>  '计量单位',
            'remarks'   =>  '入库备注' ,
            'appendix'  =>    '入库附件',
            //'storage_time'  =>  '入库时间',
            'storage_type'  =>  '入库类型',
            'contract_number' => '合同编号'
        ];
    }
}
