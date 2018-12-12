<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

$router->group(['prefix'=>'admin'],function($router) {

    $router->get('/', function () {
        return Redirect::to('/admin/menu');
    });
    $router->get('/{vue_capture?}', function () {
        return view('layouts.app');
    })->where('vue_capture', '.*');

});

/*$router->get('/',function(){
    return view('welcome');
});
$router->post('/',function(){
    $data = request()->all();
    $res = \App\Model\Data::create($data);
    if(!$res){
        echo '申请失败';
        redirect('/');
    }
    echo '申请成功';
    redirect('/');

});*/

