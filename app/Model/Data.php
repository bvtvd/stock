<?php

namespace App\Model;

use App\Traits\CommonSearch;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Data extends Model
{
    //
   protected $table = 'ysz_outstore';
    protected $fillable = ['name','sex','age','id_number','lose_time','culture','job_number','company','company_time','address','phone','category','rusticate','pension_month','pension_money','pension_standard','pension_month_total','pension_money_total','pension_medicare_money','medicare_month','medicare_money','medicare_standard','medicare_month_total','medicare_money_total','card_number','is_machine','people_category','job_category'];
    /*protected $table = 'ysz_instore';

    protected $fillable = ['cate_id','sex','age','id_number','lose_time','culture','job_number','company','company_time','address','phone','category','rusticate','pension_month','pension_money','pension_standard','pension_month_total','pension_money_total','pension_medicare_money','medicare_month','medicare_money','medicare_standard','medicare_month_total','medicare_money_total','card_number','is_machine','people_category','job_category'];*/
    public $timestamps = false;
    /*protected $table = 'ysz_detail';
    protected $fillable = ['name','sex','age','id_number','lose_time','culture','job_number','company','company_time','address','phone','category','rusticate','pension_month','pension_money','pension_standard','pension_month_total','pension_money_total','pension_medicare_money','medicare_month','medicare_money','medicare_standard','medicare_month_total','medicare_money_total','card_number','is_machine','people_category','job_category'];*/
}
