<?php

namespace App\Model;

use App\Traits\CommonSearch;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class FinishedOutgoing extends Model
{
    //
    use CommonSearch;
    protected $table = 'outgoing_storage';

    protected $fillable = ['created_user', 'business_id', 'outgoing_address', 'contract_number', 'outgoing_type', 'taxation', 'appendix', 'appendix_name','content','outgoing_money','receivable_money','value_added_tax','withholding_tax','category_id','received_money','received_time','created_at'];

    protected $appends = ['outgoing_type_zh'];
    /**
     * @return \Illuminate\Database\Eloquent\Relations\HasMany
     * 出库产品
     */
    public function product()
    {
        return $this->hasMany(OutgoingProduct::class,'outgoing_id','id');
    }

    /**
     * @return \Illuminate\Database\Eloquent\Relations\HasOne
     * 商家
     */
    public function business()
    {
        return $this->hasOne(Business::class,'id','business_id');
    }

    public function getOutgoingTypeZhAttribute()
    {
        if($this->attributes['outgoing_type']){

            return [1=>'销售','样品','调拨出库','退货入库'][$this->attributes['outgoing_type']];

        }
    }

    /*public function getOutgoingMoneyAttribute()
    {
        return  number_format($this->attributes['outgoing_money'],2);
    }
    public function getReceivableMoneyAttribute()
    {
        return  number_format($this->attributes['receivable_money'],2);
    }
    public function getValueAddedTaxAttribute()
    {
        return  number_format($this->attributes['value_added_tax'],2);
    }
    public function getWithholdingTaxAttribute()
    {
        return  number_format($this->attributes['withholding_tax'],2);
    }
    public function getReceivedMoneyAttribute()
    {
        return  number_format($this->attributes['received_money'],2);
    }*/
    public function scopehasTime($query,$start,$end)
    {
        return $start && $end ? $query->whereBetween('created_at',[$start,$end]) : $query;
    }


}
