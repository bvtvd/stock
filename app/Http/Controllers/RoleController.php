<?php

namespace App\Http\Controllers;

use App\Http\Requests\RoleRequest;
use App\Model\Role;
use Illuminate\Http\Request;

use Mockery\Exception;

class RoleController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $status = request()->get('status',null);
        $display_name = request()->get('name',null);
        $list = Role::with(['permissions'])
            ->orderByDesc('id')
            ->paginate($this->per_page)
            ->toArray();

        foreach ($list['data'] as &$item){

            $item['permissions'] = array_column($item['permissions'],'id');

        }

        return success($list);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(RoleRequest $request)
    {
        return Role::create($request->all()) ? success() : fail();

    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(RoleRequest $request, $id)
    {
        $role = Role::findOrFail($id);
        $role->fill($request->all());
        return $role->save() ? success() : fail();
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $role = Role::with('users')->findOrFail($id);

        if(!$role->users->isEmpty()){
            return fail('该角色下还有管理员,不能删除');
        }

        return $role->delete() ? success() : fail();
    }

    public function accredit(Request $request)
    {
        $id = $request->get('id');
        $menu_id = $request->get('menu_id');

        if(is_array($menu_id)){
            $permissions_name = array_column($menu_id,'name');
        }else{
            return fail('授权失败');
        }

        $role = Role::findOrFail($id);

        $role->syncPermissions([]);//删除角色上的权限

        $role = $role->givePermissionTo($permissions_name);//授权

        return $role->permissions ? success() : fail();


    }
}
