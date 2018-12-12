<?php
namespace  App\Http\Controllers;


use Illuminate\Http\Request;

use Illuminate\Support\Facades\Storage;

class CommonController extends Controller
{

    public function appendix(Request $request)
    {
        $file = $request->file('file',null);

        $type = $request->get('type','appendix');

        if(!$file){
            return fail('请选择上传文件');
        }

//        $path = $file->store(date('Ymd',time()));

        $path = Storage::putFileAs($type, $file ,$file->getClientOriginalName() );

       // $this->changeImg($path);

        return success(['url'=>'storage/'.$path,'name' => $file->getClientOriginalName()]);
    }

}