<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\TaskController;

// Taskify route for the user to be able to create tasks
Route::middleware('auth:sanctum')->group(function () {
    Route::prefix('tasks')->group(function () {
        Route::post('/', [TaskController::class, 'store']); // Create task
        Route::get('/', [TaskController::class, 'index']); // Get tasks
        Route::get('/{task}', [TaskController::class, 'show']); // Get single task
        Route::put('/{task}', [TaskController::class, 'update']); // Update task
        Route::delete('/{task}', [TaskController::class, 'destroy']); // Delete task
    });
});

// Taskify route for the user to be able to perform authentication.
Route::prefix('auth')->group(function () {
    Route::post('/register', [AuthController::class, 'register']);
    Route::post('/login', [AuthController::class, 'login']);
    Route::post('/logout', [AuthController::class, 'logout']);
});
