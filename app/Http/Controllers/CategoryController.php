<?php
/**
 * Created by PhpStorm.
 * User: root
 * Date: 2018/3/22
 * Time: 1:23
 */

namespace App\Http\Controllers;

use App\Http\Requests\CategoryRequest;
use App\Model\Category;
use App\Model\Product;

class CategoryController extends Controller
{

    public function index(){

        $category = Category::get()->keyBy('id')->toArray();

        if(!request()->get('old')){
            $category = toTree($category);

        }

        return success($category);

    }

    public function store(CategoryRequest $request)
    {
        return Category::create($request->all()) ? success() : fail();
    }

    public function update(CategoryRequest $request,$id)
    {
        $category = Category::findOrFail($id);

        return $category->fill($request->all())->save() ? success() : fail();
    }

    public function destroy($id)
    {
        $product = Product::where('category_id',$id)->first();
        if($product){
            return fail('该分类下还有产品不可删除!');
        }
        return Category::destroy($id) ? success() : fail();
    }

}