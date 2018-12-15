<?php

namespace App\Model;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class OutgoingProduct extends Model
{
    //

    protected $table = 'outgoing_product';

    protected $guarded = [];

    public function product()
    {
        return $this->hasOne(Product::class, 'id', 'product_id');
    }


    public function storage()
    {
        return $this->hasOne(FinishedStorage::class, 'id', 'storage_id');
    }

    public function out()
    {
        return $this->hasOne(FinishedOutgoing::class, 'id', 'outgoing_id');
    }


    public function minusFrom()
    {
        return $this->belongsTo(self::class, 'minus_from', 'id');
    }


    public function getStorageMoneyAttribute($value)
    {
        return $value ?: bcmul($this->product_price, abs($this->outgoing_quantity), 2);
    }
}
