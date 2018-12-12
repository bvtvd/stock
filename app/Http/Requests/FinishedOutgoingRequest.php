<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class FinishedOutgoingRequest extends FormRequest
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
        $id = $this->route('outgoing');

        $category_id = request()->get('category_id');

        $rules =  [
            //
            'created_user' => 'required',
            'business_id' => 'required',
            'outgoing_address' => 'required',
            'contract_number' => 'required|unique:outgoing_storage,contract_number,'.$id,
            'outgoing_type' => 'required',
            'taxation' => 'required',
            //'appendix' => 'required',
            //'appendix_name' => 'required',
            //'content' => 'required',
            'product.*.product_id' => 'required',
            'product.*.product_price' => 'required',
            'product.*.outgoing_quantity' => 'required'
        ];
        if($category_id == 3){
            $rules =  [
                //
                'created_user' => 'required',
                //'appendix' => 'required',
               //'content' => 'required',
                'product.*.product_id' => 'required',
                'product.*.outgoing_quantity' => 'required'
            ];
        }


        return $rules;
    }

    public function attributes()
    {
        return [
            'created_user' => '申请人',
            'business_id' => '商家',
            'outgoing_address' => '出库地址',
            'contract_number' => '合同编号',
            'outgoing_type' => '出库类型',
            'taxation' => '税费',
            'appendix' => '附件',
            'appendix_name' => '附件名称',
            //'content' => '备注',
            'product.*.product_id' => '产品名称',
            'product.*.outgoing_quantity' => '出库数量',
            'product.*.product_price' => '货物单价'
        ];
    }
}
