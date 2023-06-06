<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\CategoryController;
use App\Http\Controllers\SubCategoryController;
use App\Http\Controllers\ProductController;
use App\Http\Controllers\PhotoController;

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

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

Route::group([ 'middleware' => 'api', 'prefix' => 'auth' ], function ($router) {
Route::post('/register',[AuthController::class,'register']); 
Route::post('/login',[AuthController::class,'login']);
});

Route::post('/category',[CategoryController::class,'add']);
Route::get('/categories',[CategoryController::class,'getCategories']);

Route::post('/subcategory',[SubCategoryController::class,'addd']);
Route::get('/subcategories',[SubCategoryController::class,'getSubCategories']);

Route::post('/product',[ProductController::class,'addd']);
Route::get('/products',[ProductController::class,'getProduct']);

Route::post('/photo',[PhotoController::class,'adddd']);
Route::get('/photos',[PhotoController::class,'getPhoto']);

Route::post('/stores',[StoreController::class,'store']);