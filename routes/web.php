<?php

use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\PostController;
use Inertia\Inertia;
use App\Models\User;

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
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

Route::get('/home', function() {
    return Inertia::render('Home', [
        'name' => 'Hunter! :)',
        'frameworks' => [
            'Laravel', 'React', 'Inertia'
        ]
    ]);
});

// this is how you only pass the name
// if you send the entire user table / column then it will
// all go to the client
Route::get('/users', function() {
    return Inertia::render('Users', [
        'users' => User::all()->map(fn($user) => [
            'name' => $user->name
        ])
    ]);
});

Route::get('/settings', function() {
    return Inertia::render('Settings');
});

Route::post('/logout', function() {
    dd("logging the user out");
});

Route::resource('/post', PostController::class);

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__.'/auth.php';
