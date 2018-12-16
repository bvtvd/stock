<?php

use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

$router->post('/login','AuthController@login');
$router->post('/register','AuthController@register');
$router->post('/appendix','CommonController@appendix');//上传附件

$router->get('export','FinishedOutgoingController@export');//出库
$router->get('index','DataController@index');//出库
$router->get('data','DataController@data');//出库

//$router->get('statistics','ProductController@stockStatistics');//产品

$router->group(['middleware' => 'auth:api'],function() use ($router){

    $router->get('admin/role','AdminController@role');//获取所有权限
    $router->resource('admin','AdminController');//管理员

    $router->post('role/accredit','RoleController@accredit');//授权
    $router->resource('role','RoleController');//角色管理
    $router->resource('user','UserController');//用户管理

    $router->get('/user','AuthController@user');
    $router->post('/logout','AuthController@logout');

    $router->get('getMenu','PermissionController@getMenu');//获取菜单
    $router->resource('permission','PermissionController');//菜单管理
    $router->post('role/accredit','RoleController@accredit');//授权
    $router->resource('role','RoleController');//角色管理
    $router->resource('user','UserController');//用户管理

    $router->resource('business','BusinessController');
    $router->resource('category','CategoryController');//分类
    $router->get('statistics','ProductController@stockStatistics');//库存统计
    $router->resource('product','ProductController');//产品
    $router->put('finished/storage/time', 'FinishedStorageController@updateStorageTime');
    $router->resource('finished','FinishedStorageController');//入库
    $router->get('getMoney','FinishedOutgoingController@getMoney');//出库
    $router->put('updateReceived/{id}','FinishedOutgoingController@updateReceived');//出库
    $router->resource('outgoing','FinishedOutgoingController');//出库
    $router->resource('finance','FinanceController');//收支明细
    //$router->resource('open','OpenController');//开关管理
    // 数据库备份
    $router->get('database/backup', 'SystemController@databaseBackup');
});

