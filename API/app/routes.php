<?php

/*
|--------------------------------------------------------------------------
| Application Routes
|--------------------------------------------------------------------------
|
| Here is where you can register all of the routes for an application.
| It's a breeze. Simply tell Laravel the URIs it should respond to
| and give it the Closure to execute when that URI is requested.
|
*/



Route::get('/', function()
{
    // afficher 404
});

Route::group(array('prefix' => '/v1', 'before' => 'auth.basic'), function()
{
    Route::get('projects', 'ProjectController@index');
    Route::get('project/{id}', 'ProjectController@show');
});


Route::group(array('prefix' => '/admin', 'before' => 'auth.basic'), function()
{
    Route::get('/', 'AdminController@home');
    Route::get('/home', 'AdminController@home');
    Route::get('/listProjects', 'AdminController@listProjects');
    Route::get('/addProject', 'AdminController@addProject');
});

Route::group(array('prefix' => '/admin', 'before' => 'auth.basic'), function()
{
    // afficher une page 404 de préférence
    Route::get('/home', 'AdminController@home');
    Route::get('/listProjects', 'AdminController@listProjects');
    Route::get('/addProject', 'AdminController@addProject');

});

Route::get('/authtest', array('before' => 'auth.basic', function()
{
    return View::make('hello');
}));
