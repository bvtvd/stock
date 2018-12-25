<?php

namespace App\Http\Controllers;

use Illuminate\Foundation\Bus\DispatchesJobs;
use Illuminate\Routing\Controller as BaseController;
use Illuminate\Foundation\Validation\ValidatesRequests;
use Illuminate\Foundation\Auth\Access\AuthorizesRequests;
use Illuminate\Support\Facades\Auth;

class Controller extends BaseController
{
    use AuthorizesRequests, DispatchesJobs, ValidatesRequests;

    public $per_page;
    public function __construct(){
        $this->per_page = request()->get('per_page', 10);
    }

    /**
     * @param $price 总价
     * @param float $rate 税率
     * @return string
     * 计算税金
     */
    public function tax($price,$rate = 0.165)
    {


        return bcmul($price,$rate,2);
    }
}
