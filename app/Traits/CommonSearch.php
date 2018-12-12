<?php
namespace App\Traits;

use App\Http\Middleware\ApiAuth;
use App\Help\Auth as HelpAuth;

trait CommonSearch {


    /**
     * @param $query
     * @param $like  搜索条件
     * @param string $field 字段名
     * @return mixed
     * 相似
     */
    public function scopeLike($query,$like,$field = 'name'){
        return $like != null ? $query->where($field,'like',"%$like%") : $query;
    }

    /**
     * @param $query
     * @param $equal  搜索条件
     * @param $field  搜索字段
     * @return mixed
     * 相等
     */
    public function scopeEqual($query,$equal,$field)
    {
        return $equal != null ? $query->where($field,$equal) : $query;
    }

    /**
     * @return int
     * 判断用户对当前动态是否点赞
     */
    public function getIsLaudAttribute(){

        $lauds = array_column($this->lauds->toArray(),'user_id');
        //$user = session('user');

        $user = HelpAuth::user();

        if($user && isset($user['id'])){
            if(in_array($user['id'],$lauds) ){

                return $this->attributes['is_laud'] = 1;
            }else{
                return $this->attributes['is_laud'] = 0;
            }
        }
        return 0;

    }
}