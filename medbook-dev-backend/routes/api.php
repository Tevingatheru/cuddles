<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Models\Patient;
use App\Http\Controllers\PatientController;
use App\Http\Resources\PatientResource;

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

Route::post('/patients/save', [PatientController::class, 'store']);

Route::delete('/patients/id/{id}',[PatientController::class, 'destroy']);

Route::get('/patients/all', [PatientController::class, 'index']);

Route::get('/patients/id/{id}',[PatientController::class, 'show']);

Route::put('/patients/id/{id}/update',[PatientController::class, 'update']);

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});
