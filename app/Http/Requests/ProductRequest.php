<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class ProductRequest extends FormRequest
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
        return [
            //
            'name'  => 'required',
            'category_id' => 'required',
            'market_price'  => 'required',
            'metering_unit' =>  'required',
            'spec'  =>  'required',
            'desc'  =>  'required',
            'status'    =>  'required',
        ];
    }

    public function attributes()
    {
        return [
            'name'  => '产品名称',
            'category_id' => '产品分类',
            'market_price'  => '市场单价',
            'metering_unit' =>  '计量单位',
            'spec'  =>  '型号规格',
            'desc'  =>  '详情',
            'status'    =>  '产品状态',
        ];
    }
}
