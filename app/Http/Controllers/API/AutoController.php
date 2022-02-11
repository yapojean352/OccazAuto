<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use  App\Models\Auto;

class AutoController extends Controller
{
    public function Store(Request $request){
        $auto = new Auto;
        $auto->marque=$request->input('marque');
        $auto->modele=$request->input('modele');
        $auto->prix=$request->input('prix');
        $auto->km=$request->input('km');
    }
}
