<?php

namespace App\Model;

use App\Traits\CommonSearch;
use Carbon\Carbon;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Support\Facades\DB;

class Finance extends Model
{
    //
    use CommonSearch;
    protected $table = 'income_expenditure';

    protected $fillable = ['project','income','expend','balance','appendix','appendix_name','remarks','type','outgoing_id',
        'created_at'];

    protected $appends = ['money'];

    public function getMoneyAttribute()
    {
        if($this->attributes['type'] == 1){
            $this->attributes['money'] = $this->attributes['income'];
        }else{
            $this->attributes['money'] = $this->attributes['expend'];
        }
        return $this->attributes['money'];


    }

    public function getBalanceAttribute()
    {
        $income = Finance::where('created_at','<=',$this->attributes['created_at'])->sum('income');
        $expend = Finance::where('created_at','<=',$this->attributes['created_at'])->sum('expend');
        return $this->attributes['balance'] = bcsub($income,$expend,2);
    }

    public function outgoing()
    {
        return $this->hasOne(FinishedOutgoing::class,'id','outgoing_id');
    }
}
