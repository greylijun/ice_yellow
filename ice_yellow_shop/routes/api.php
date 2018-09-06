<?php

use Illuminate\Http\Request;

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

Route::group(['namespace' => 'Api'], function () {
	Route::get('home/slider', 'HomeController@slider');
	Route::apiResource('good', 'GoodController');
	Route::middleware('auth:api')->group(function () {
		Route::apiResource('user', 'UserController');
	});
});
