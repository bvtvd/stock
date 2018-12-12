<?php
/**
 * Created by PhpStorm.
 * User: Administrator
 * Date: 2018/3/14
 * Time: 10:07
 */
namespace App\Http\Controllers;

use App\Model\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Validator;

class AuthController extends Controller
{
    public $username = 'username';

    /**
     *  登录
     * @return \Illuminate\Http\JsonResponse
     * @author alldie
     * @date 2018/3/14 15:46
     */
    public function login()
    {
        $username = request()->get($this->username);
        $password = request()->get('password');
        //$user = User::where(['username'=>$username,'password'=>$password])->first();

        if(Auth::attempt(['username'=>$username,'password'=>$password])){

            $success['token'] =  Auth::user()->createToken('test')->accessToken;
            $success['user'] = Auth::user();
            if($success['user']['status'] == 0){
                return fail('账号已被禁用');
            }
            return success($success);
        }else{
            return fail('登录失败');
        }
    }

    public function register(Request $request)
    {

        $validator = Validator::make($request->all(), [
            'username' => 'required',
            //'email' => 'required|email',
            'password' => 'required',
            //'c_password' => 'required|same:password',
        ]);

        if ($validator->fails()) {
            return fail($validator->errors());
        }

        $input = $request->all();
        $input['password'] = bcrypt($input['password']);
        $user = User::create($input);
        $success['token'] =  $user->createToken('MyApp')->accessToken;
        $success['username'] =  $user->username;

        return success($success);

    }

    /**
     *  退出
     * @return \Illuminate\Http\JsonResponse
     * @author alldie
     * @date 2018/3/14 15:46
     */
    public function logout()
    {
        Auth::user()->tokens()->delete();

        return success();
    }

    /**
     *  获取用户
     * @return \Illuminate\Http\JsonResponse
     * @author alldie
     * @date 2018/3/14 15:48
     */
    public function user()
    {
        $user = Auth::user();
        return success($user);
    }
}