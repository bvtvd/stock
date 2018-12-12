<?php

namespace App\Model;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class OutgoingProduct extends Model
{
    //

    protected $table = 'outgoing_product';

    protected $fillable = ['outgoing_quantity','product_price','product_id','outgoing_id','return_quantity','storage_id'];

    public function product()
    {
        return $this->hasOne(Product::class,'id','product_id');
    }


    public function storage()
    {
        return $this->hasOne(FinishedStorage::class,'id','storage_id');
    }

    public function out()
    {
        return $this->hasOne(FinishedOutgoing::class,'id','outgoing_id');
    }
}
