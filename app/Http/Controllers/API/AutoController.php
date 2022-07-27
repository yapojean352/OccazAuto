<?php

namespace App\Http\Controllers\API;

use App\Models\Auto;
use App\Models\Picture;   
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Rules\imageValidateUpdate;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Facades\DB;

class AutoController extends Controller
{
    /**
     * funtion Add new products
     * validation 
     * param: $request  value post in request
     * return: json
     */
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
        if ($request->image) {
          //  foreach ($request->image as $photo) {
            $file = $request->file('image') ;
            $fileName = $file->getClientOriginalName() ;
            $destinationPath = public_path().'/images' ;
            $file->move($destinationPath,$fileName);
        }else {
            # code...default file 
            $fileName='img-9.jpg';
        };
Picture::create([
            'auto_id' => $v->id,
            'imageUrl' => $fileName,
        ]);
        return response()->json(['status'=>200,
           'message'=>'add success'

        ]);
    }
    /**function List all product
     * Return Json
     */
    public function listProd($req){
      if($req == "all"){
        $req="";
      }else{
        $req=$req;
      }
      $url      = request()->input('CARAVAN 290');
      $url_path = parse_url($url, PHP_URL_PATH);
      $basename = pathinfo($url_path, PATHINFO_BASENAME);
    $autos = Auto::with('pictures')->Where('modele', 'like', "%$req%")
    ->orWhere('marque', 'like', "%$req%")
    ->orWhere('carrosserie', 'like', "%$req%")->get();
     // $autos = Auto::all();
   $total = count($autos);
   $total= $total;
    //   $img = Picture::where('auto_id', 2)->get()->id;
//return $result;
      return response()->json(['status'=>200,
           'autos'=> $autos,  
          'sum'=> $total ,
          'request'=>$req       
        ]);
    }
    /** function list of product search 
     * Param $seach  value search
     * return: json
    */
    public function listProdsearch($s){
     $autos = Auto::with('pictures')->Where('modele', 'like', "%$s%")
     ->orWhere('marque', 'like', "%$s%")->get();
      // $autos = Auto::all();
     //   $img = Picture::where('auto_id', 2)->get()->id;
 //return $result;
       return response()->json(['status'=>200,
            'autos'=> $autos           
         ]);
     }


    public function getProd($id ){ 
       $autos = Auto::Where('id', '=', "$id")->get();
       //where('marque', 'like', "%$modele%");
       $picture = Picture::where('auto_id', '=', $autos[0]['id'])->first();
        return response()->json(['status'=>200,
        'auto'=> $autos,
        'images'=>$picture,
        ]);
      }
      /**Function all product model and */
      public function getProdByModel($marque , $modele){ 
        $autoMod = Auto::select('modele')->Where('marque', 'like', "%$marque%")->get();
         return response()->json(['status'=>200,
         'modele'=> $autoMod,
         'images'=>$modele,
         ]);
       } 
            /** Function get all carrosserie(Marque )
      * RETURN Array of object
      */
       
      public  function getCarrosserie(){
        $carrosserie = DB::table('autos')->distinct('carrosserie')->get('carrosserie');
        return response()->json(['status'=>200,
        'typeCarrosserie'=> $carrosserie,
        ]);
    }

     /** Function get all category(Marque )
      * RETURN Array of object
      */
    public function category() {
        $categories = DB::table('autos as cat')->distinct('marque')->get('marque');
        $sub_categories = DB::table('autos')
        ->distinct('modele')->get('marque');
        $things = Auto::all(); // or whatever Eloquent query you want that returns a collection
       $grouped = $things->groupBy('modele');
        return response()->json(['status'=>200,
        'category'=> $categories,
        'subcategory'=> $grouped,
        ]);
    }
    /** Function group modele (category) by marque (categorie) */
    public function subcategory() {
           $things = Auto::select('modele','marque')->distinct('marque'); // or whatever Eloquent query you want that returns a collection
          $grouped[] = $things->get()->groupBy('marque');
           return response()->json(['status'=>200,
           'subcategory'=> $grouped,
           ]);
       }
       /****get list auto filter by marque or modele or carr  */
  //      public function getListeAutos()
  //      {
  //  // donees a envoyes a la vue
  //          if (request()->input('marque') || request()->input('modele')) {
              
  //              $this->marque = request()->input('marque');
  //              $cat = request()->input('modele');
   
  //          } else {
  //              $this->marque = "";
  //              $cat = "";
  //          }
   
  //          $autoch = Auto::Where('id', '!=', 0)
  //              ->where(function ($q) {
  //                  $q->orwhere('modele', 'like', "%$this->marque%");
  //                  $q->orwhere('marque', 'like', "%$this->marque%");
  //                  // ->orWhere('type', 'public');
  //              })
  //              return response()->json(['status'=>200,
  //              'autos'=> $autoch,  
                    
  //           ]);
   
  //         // return view('velos.listesVelos', compact('velos'));
  //      }
}
