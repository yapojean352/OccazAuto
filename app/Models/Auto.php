<?php

namespace App\Models;
use App\Models\Auto;
use App\Models\Picture;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Auto extends Model
{
    protected $guarded =[];
    use HasFactory;
     //protected $table ='autos';
    // protected $fillable=[
    //     'marque',
    //     'modele',
    //     'prix',
    //     'km',
    // ];
    public function pictures(){
        //return $this->hasMany('App\odels\photo');
        return $this->hasMany(Picture::class);
        
    }
}
