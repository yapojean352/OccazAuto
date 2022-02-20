<?php

namespace App\Http\Controllers\API;

use App\Models\Auto;
use App\Models\Picture;   
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Rules\imageValidateUpdate;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Storage;

class AutoController extends Controller
{
    public function Store(Request $request){
        $data = request()->validate([
            'marque' => ['', ''],
            'modele' => ['', ''],
            'immatriculation' => ['', ''],
            'carrosserie' => ['', ''],
            'couleur' => ['', ''],
            'prix' => ['', ''],
            'km' => [''],
            'annee' => [''],
            'address_address' => [''],
            'address_latitude' => [''],
            'address_longitude' => [''],
            'transmission' => ['', ''],
            'carburant' => ['', ''],
            'details' => [':'],
//'image' => 'file|image|max:5000'
            //  'image' => [''],
        ]);
        $v = Auto::create([
            'marque' => $data['marque'],
            'modele' => $data['modele'],
            'immatriculation' => $data['immatriculation'],
            'couleur' => $data['couleur'],
            'prix' => $data['prix'],
            'km' => $data['km'],
            'details' => $data['details'],
            'transmission' => $data['transmission'],
            'annee' => $data['annee'],
            'carrosserie' =>  $data['carrosserie'],
            'carburant' => $data['carburant'],
            'address_address' => $data['address_address'],
            'address_longitude' => $data['address_longitude'],
            'address_latitude' => $data['address_latitude'],
        ]);

//   foreach($files as $file){
        // $filename = $file->getClientOriginalName();
        // $extension = $file->getClientOriginalExtension();
        // $check=in_array($extension,$allowedfileExtension);
        //dd($check);
        //if($check)
        //{
        //dd($request->files);
        //$items= Item::create($request->all());
        //recupeerer les photos de cet utlisateur
        // $us = Auth::user()->id;
        // $uservelos = Velo::where("users_id", $us)->paginate(100);
        // foreach ($uservelos as $ts) {
        //dd($request->image);
    //     if($file = $request->hasFile('image')) {
             
    //         $file = $request->file('image') ;
    //         $fileName = $file->getClientOriginalName() ;
    //         $destinationPath = public_path().'/images' ;
    //         $file->move($destinationPath,$fileName);
    //       //  return redirect('/uploadfile');
    // }
        if ($request->image) {
          //  foreach ($request->image as $photo) {
            $file = $request->file('image') ;
            $fileName = $file->getClientOriginalName() ;
            $destinationPath = public_path().'/images' ;
            $file->move($destinationPath,$fileName);
               // $filename = $request->image->store('uploads', 'public');
               // $filename = $request->image->store('uploads', 'public');
        Picture::create([
            'auto_id' => $v->id,
            'imageUrl' => $fileName,
        ]);
               
           // }
        };
        
        // $auto = new Auto;
        // $auto->marque=$request->input('marque');
        // $auto->modele=$request->input('modele');
        // $auto->prix=$request->input('prix');
        // $auto->km=$request->input('km');
        // $auto->save();
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
    public function getProd($id){
       
        $auto= Auto::find($id);
        return response()->json(['status'=>200,
        'auto'=> $auto]);
  
      }
    
}
