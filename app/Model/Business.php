<?php

namespace App\Model;

use App\Traits\CommonSearch;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Business extends Model
{
    //
    use CommonSearch;
    protected $table = 'business';
    protected $fillable = ['business_name','contacts','phone','email','distribution_type','remarks','business_type'];
}
