<?php

namespace App\Exceptions;

use Exception;
use Illuminate\Auth\AuthenticationException;
use Illuminate\Database\Eloquent\ModelNotFoundException;
use Illuminate\Foundation\Exceptions\Handler as ExceptionHandler;
use Illuminate\Validation\ValidationException;
use Symfony\Component\HttpKernel\Exception\MethodNotAllowedHttpException;
use Symfony\Component\HttpKernel\Exception\NotFoundHttpException;

class Handler extends ExceptionHandler
{
    /**
     * A list of the exception types that are not reported.
     *
     * @var array
     */
    protected $dontReport = [
        //
    ];

    /**
     * A list of the inputs that are never flashed for validation exceptions.
     *
     * @var array
     */
    protected $dontFlash = [
        'password',
        'password_confirmation',
    ];
    /**
     * @var array
     *
     */
    private $ignore = [
        'api'
    ];
    /**
     * Report or log an exception.
     *
     * This is a great spot to send exceptions to Sentry, Bugsnag, etc.
     *
     * @param  \Exception  $exception
     * @return void
     */
    public function report(Exception $exception)
    {
        parent::report($exception);
    }

    /**
     * Render an exception into an HTTP response.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Exception  $exception
     * @return \Illuminate\Http\Response
     */
    public function render($request, Exception $exception)
    {
        if ($request->ajax() || in_array(strtolower(explode('/', $request->path())[0]), $this->ignore)) {
            if ($exception instanceof MethodNotAllowedHttpException) {
                return response(['msg' => '方法不存在', 'code' => 2000, 'data' => []]);
            }
            if ($exception instanceof ValidationException) {
                foreach ($exception->validator->errors()->getMessages() as $k => $v) {
                    $data[$k] = $v[0];
                }
                return response(['msg' => array_values($data)[0], 'code' => 2000, 'data' => $data]);
            }
            if ($exception instanceof ModelNotFoundException) {
                return response(['msg' => '查询数据不存在', 'code' => 2000, 'data' =>[]]);
            }
            if ($exception instanceof NotFoundHttpException) {
                return response(['msg' => '路由不存在', 'code' => 2000, 'data' => []]);
            }
            if ($exception instanceof AuthenticationException ){
                return response(['msg' => '登录异常!', 'code' => 2000, 'data' => []]);
            }

            return response(['msg' => $exception->getMessage() . $exception->getFile() . $exception->getLine(), 'code' => 2000, 'data' => []]);

        }
        return parent::render($request, $exception);
    }
}
