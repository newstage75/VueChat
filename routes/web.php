<?php

use Illuminate\Support\Facades\Route;
use Illuminate\Support\Facades\Auth;

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
Auth::routes();

Route::get('/', function () {
    return view('welcome');
});

// Route::get('chat',function(){
//     return view('chat');
// });

// chatにアクセスした際に、認証するよう設定
Route::group(['prefix'=>'/','middleware'=>'auth'],function(){
    Route::get('chat',[App\Http\Controllers\ChatController::class,'chat']);
    Route::post('send', [App\Http\Controllers\ChatController::class,'send']);
});


Route::get('/home', [App\Http\Controllers\HomeController::class, 'index'])->name('home');