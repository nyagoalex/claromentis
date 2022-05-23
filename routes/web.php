<?php

use App\Http\Controllers\BulkFileController;
use App\Http\Controllers\CategoryController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

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
Route::get('/', function () {
    return Inertia::render('Home');
})->name('home');

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->name('dashboard');

#=============================CATEGORIES==================================
Route::controller(CategoryController::class)->prefix('categories')->group(function () {
    Route::get('/', 'index')->name('categories.index');
    Route::post('/', 'store')->name('categories.store');
    Route::patch('/{category}', 'update')->name('categories.update')->whereNumber('category');;
    Route::delete('/{category}', 'destroy')->name('categories.delete')->whereNumber('category');;
});

#=============================EXPENSES==================================
Route::controller(BulkFileController::class)->prefix('bulk-files')->group(function () {
    Route::get('/', 'index')->name('bulk.file.index');
    Route::post('/', 'store')->name('bulk.file.store');
    Route::get('/template', 'template')->name('bulk.file.template');
    Route::get('/{bulkFile}', 'show')->name('bulk.file.show')->whereNumber('bulkFile');
    Route::get('/{bulkFile}/export', 'export')->name('bulk.file.export')->whereNumber('bulkFile');
});




