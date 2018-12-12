<?php
if(!function_exists('success')){
    function success($data = [],$msg = '操作成功',$code = 1000){
        $json = [];
        $json['code'] = $code;
        $json['data'] = is_array($data) || is_object($data) ? $data : [];
        $json['msg'] = is_array($data) || is_object($data) ? $msg : $data;
        return response()->json($json,200);
    }
}

if(!function_exists('fail')){
    function fail($data = [],$msg = '操作失败',$code = 2000){
        $json = [];
        $json['code'] = $code;
        $json['data'] = is_array($data) || is_object($data) ? $data : [];
        $json['msg'] = is_array($data) || is_object($data) ? $msg : $data;
        return response()->json($json,200);
    }
}

if(!function_exists('toTree')){
    function toTree($data){
        $tree = [];
        if(!is_array($data))return false;
        foreach ($data as $item) {
            if (isset($data[$item['pid']])) {
                $data[$item['pid']]['children'][] = &$data[$item['id']];
            } else {
                $tree[] = &$data[$item['id']];
            }
        }
        return $tree;
    }
}