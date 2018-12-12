<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class BusinessRequest extends FormRequest
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
            'business_name' => 'required',
            'contacts' => 'required',
            'phone' => 'required',
            'email' => 'required',
            'distribution_type' => 'required',
            'remarks' => 'required',
            'business_type' => 'required'
        ];
    }

    public function attributes()
    {
        return [
            'business_name' => '商家名称',
            'contacts'  => '联系人',
            'phone' => '联系电话',
            'email' => '邮箱',
            'distribution_type' => '配送类型',
            'remarks' => '备注',
            'business_type' => '商家类型'
        ];
    }
}
