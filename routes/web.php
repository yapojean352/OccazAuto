<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/
Route::get('/{path?}',function () {
    return view('react');
})->where('path','.*');
// Route::view('/{path?}', 'react') ;
// Route::get('/vehicule-usager/{marque}-{modele}-{id}',function () {
//     return view('react');
// });
// Route::get('/A-vendre', function () {
//     return view('react');
// });
// Route::get('/vehicule-usager/{id}', function () {
//     return view('react');
// });
// Route::get('/plus', function () {
//     return view('react');
// });
// Route::get('/{id}', function () {
//     return view('react');
// });
// Route::get('/', function () {
//     return view('react');
// });
