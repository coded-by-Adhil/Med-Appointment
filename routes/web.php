<?php

use App\Http\Controllers\ProfileController;
use Illuminate\Support\Facades\Route;

Route::get('/', function () {
    return redirect()->route('login');
})->name('home');


// Route::inertia('dashboard', 'dashboard')
//     ->middleware(['auth', 'verified'])
//     ->name('dashboard');

Route::get('/dashboard', function () {
    return view('patient.index');
})->middleware(['auth', 'verified'])->name('dashboard');

// require __DIR__.'/auth.php';
require __DIR__.'/settings.php';
