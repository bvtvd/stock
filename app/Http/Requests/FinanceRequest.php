<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class FinanceRequest extends FormRequest
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
            'project' => 'required',
            'money' => 'required',
            //'appendix' => 'required',
            //'appendix_name' => 'required',
//            'remarks' => 'required',
            'type' => 'required'
        ];
    }

    public function attributes()
    {
        return [
            'project' => '项目',
            'money' => '金额',
            'appendix'  => '附件',
            'appendix_name'  => '附件',
            'remarks' => '备注',
            'type' => '类型'
        ];
    }
}
