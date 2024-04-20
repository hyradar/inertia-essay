<?php

use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\PostController;
use Inertia\Inertia;
use App\Models\User;
use Illuminate\Support\Facades\Request;

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

Route::get('/home', function () {
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
Route::get('/users', function () {
    return Inertia::render('Users/Index', [
        'users' => User::query()
        // When there is a search variable in the url, send the query
            ->when(Request::input('search'), function ($query, $search) {
                // give me only the records where the name matches the search
                // the percent sides - anything can come before or after it
                $query->where('name', 'like', "%{$search}%");
            })
            ->paginate(10)
            // this is the method that sends the query
            // to the other page numbers
            // without this the links on the page numbers
            // will not have the query string attached
            ->withQueryString()
            ->through(fn ($user) => [
                'id' => $user->id,
                'name' => $user->name
            ]),
            // sends through the existing filters on the page
            // like the filter that is in the url
            // for instane my current url is 
            // http://localhost:8000/users?page=1&search=gg
            // sends to the client a list of approved filters
            'filters' => Request::only(['search'])
    ]);
});

Route::get('users/create', function() {
    return Inertia::render('Users/Create');
});

Route::post('/users', function() {
    //validate the request
    $attributes = Request::validate([
        'name' => 'required',
        'email' => ['required', 'email'],
        'password' => 'required'
    ]);

    //Create the user
    // passing in the attributes
    User::create($attributes);

    // redirect somewhere
    return redirect('/users');


});

Route::get('/settings', function () {
    return Inertia::render('Settings');
});

Route::post('/logout', function () {
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

require __DIR__ . '/auth.php';
