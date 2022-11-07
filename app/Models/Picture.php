<?php

namespace App\Models;
use App\Models\Auto;
use App\Models\Picture;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Picture extends Model
{
    use HasFactory;
    protected $guarded =[];
    //pour deactiver le timestamp par defaut a true
    public $timestamps= false;
    public function Auto(){
        //return $this->hasMany('App\odels\photo');
        return $this->belongsTo(Auto::class);
    }

}
