<?php

namespace App\Model;


use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use Spatie\Permission\Models\Role as RoleModel;
class Role extends RoleModel
{


    protected $fillable = ['name','guard_name','status'];

    protected $appends = ['disabled'];
    public function getDisabledAttribute()
    {
        return $this->attributes['disabled'] = !$this->attributes['status'];
    }
}
