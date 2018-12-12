<?php

namespace App\Model;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use Spatie\Permission\Models\Permission as PermissionModel;
class Permission extends PermissionModel
{

    protected $fillable = ['name','guard_name','pid','display','display_name','category_id','sort'];
}
