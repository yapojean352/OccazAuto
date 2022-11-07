<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api\AutoController;
/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/
Route::post('/add-auto',[AutoController::class,'store']);
Route::get('/list/{req}',[AutoController::class,'listProd']);
Route::get('/Auto-Usager/{seach}',[AutoController::class,'listProdsearch']);
Route::get('/vehicule-usager/{id}',[AutoController::class,'getProd']);
Route::get('/carrosserie/{seach}',[AutoController::class,'getCarrosserie']);
Route::get('/category',[AutoController::class,'category']);
Route::get('/subcategory',[AutoController::class,'subcategory']);
Route::get('/product/{marque}/{modele}',[AutoController::class,'getProdByModel']);
Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});
