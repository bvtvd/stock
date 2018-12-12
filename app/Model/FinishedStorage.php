<?php
namespace App\Model;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class FinishedStorage extends Model
{

    protected $table = 'finished_storage';

    // storage_type  '1=生产入库 2=调拨入库 3=退货入库'
    protected $guarded = [];

    protected $appends = ['storage_type_zh'];

    /**
     *  产品信息
     * @return \Illuminate\Database\Eloquent\Relations\HasOne
     * @author alldie
     * @date 2018/4/8 16:13
     */
    public function product()
    {
        return $this->hasOne(Product::class,'id','product_id');
    }

    /**
     *  经办人
     * @return \Illuminate\Database\Eloquent\Relations\HasOne
     * @author alldie
     * @date 2018/4/8 16:14
     *
     */
    public function user()
    {
        return $this->hasOne(User::class,'id','created_user');
    }

    public function getStorageTypeZhAttribute()
    {
        if($this->attributes['storage_type']){
            return [1=>'生产入库','调拨入库','退货入库'][$this->attributes['storage_type']];

        }
    }

    public function out()
    {
        return $this->hasMany(OutgoingProduct::class,'storage_id','id');
    }
}