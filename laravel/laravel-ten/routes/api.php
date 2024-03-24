<?php

use App\Http\Controllers\Api\NotesControllers\CreateNoteController;
use App\Http\Controllers\Api\NotesControllers\DeleteNoteByIdController;
use App\Http\Controllers\Api\NotesControllers\ReadNoteByIdController;
use App\Http\Controllers\Api\NotesControllers\ReadNotesController;
use App\Http\Controllers\Api\NotesControllers\UpdateNoteByIdController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

// Group routes with the prefix 'v1'
Route::prefix('v1')->group(function () {
    // Route for creating a note
    Route::post('/notes', [CreateNoteController::class, 'create']);
    Route::get('/all-notes', [ReadNotesController::class, 'read']);
    Route::get('/note/{id}', [ReadNoteByIdController::class, 'readById']);
    Route::put('/update-note/{id}', [UpdateNoteByIdController::class, 'updateNoteById']);
    Route::delete('/delete-note/{id}', [DeleteNoteByIdController::class, 'deleteNoteById']);

});
