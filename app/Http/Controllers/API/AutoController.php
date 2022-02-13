<?php

namespace App\Http\Controllers\API;

use App\Models\Auto;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class AutoController extends Controller
{
    public function Store(Request $request){
        $auto = new Auto;
        $auto->marque=$request->input('marque');
        $auto->modele=$request->input('modele');
        $auto->prix=$request->input('prix');
        $auto->km=$request->input('km');
        $auto->save();
        return response()->json(['status'=>200,
           'message'=>'add success'

        ]);
    }
    public function listProd(){
      $autos = Auto::all();
      return response()->json(['status'=>200,
           'autos'=> $autos

        ]);
    }
}
