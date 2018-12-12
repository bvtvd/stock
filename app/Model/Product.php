<?php
namespace App\Model;

use App\Traits\CommonSearch;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Product extends Model
{

    use CommonSearch;
    protected $table = 'product';

    protected $fillable = ['name','category_id','created_user','market_price','metering_unit','spec','desc','status','outgoing_number','storage_number','sort'];

    /**
     *  分类
     * @return \Illuminate\Database\Eloquent\Relations\HasOne
     * @author alldie
     * @date 2018/4/8 14:06
     */
    public function category()
    {
        return $this->hasOne(Category::class,'id','category_id');
    }

    /**
     *  添加人
     * @return \Illuminate\Database\Eloquent\Relations\HasOne
     * @author alldie
     * @date 2018/4/8 14:42
     */
    public function user()
    {
        return $this->hasOne(User::class,'id','created_user');
    }

}