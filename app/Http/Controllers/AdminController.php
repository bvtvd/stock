<?php

namespace App\Http\Controllers;

use App\Http\Requests\AdminRequest;
use App\Model\Role;
use App\Model\User;

use Illuminate\Support\Facades\DB;
use Mockery\Exception;

class AdminController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {

        $list = User::with('roles')->Like(request()->get('username'),'username')
            ->paginate($this->per_page)
            ->toArray();

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
    public function store(AdminRequest $request)
    {

        try{
            DB::transaction(function() use ($request){
                $data = $request->all();
                $data['password'] = bcrypt($data['password']);
                $admin = User::create($data);
                if($request->get('roles')){
                    $role = Role::findOrFail($request->get('roles'));

                    if($role->status == 0){
                        throw new Exception('该角色已被禁用!',100);
                    }
                    $admin->syncRoles([]);//清除角色身上原有的角色

                    $admin->assignRole($role->name);//赋予角色

                }
            });
            return success();
        }catch (Exception $exception){
            if($exception->getCode() == 100){
                return fail($exception->getMessage());
            }
            return fail('授权失败');
        }

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
    public function update(AdminRequest $request, $id)
    {

        try{
            DB::transaction(function() use ($request,$id){

                $admin = User::findOrFail($id);
                $data = $request->all();
                if(key_exists('password',$data)){
                    $data['password'] = bcrypt($data['password']);
                }
                $admin->fill($data)->save();


                if($request->get('roles')){
                    $role = Role::findOrFail($request->get('roles'));
                    if($role->status == 0){
                        throw new Exception('该角色已被禁用!',100);
                    }
                    $admin->syncRoles([]);//清除角色身上原有的角色

                    $admin->assignRole($role->name);//赋予角色

                }

            });
            return success();
        }catch (Exception $exception){
            if($exception->getCode() == 100){
                return fail($exception->getMessage());
            }
            return fail('授权失败');
        }
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }

    public function role()
    {
        $roles = Role::get()->toArray();

        return success($roles);
    }
}
