<?php

namespace App\Http\Controllers;

use App\Models\Patient;
use Illuminate\Http\Request;
use App\Http\Resources\PatientResource;

class PatientController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return Patient::all();
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        return Patient::create($request -> all());
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        return Patient::find($id);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Patient $patient)
    {
        if (Patient::where('id', $id) -> exists()) {
            $patient = Patient::find($id);
            if($request->name != null) {
                $patient->name = $request->name;
            }
            if($request->gender != null) {
                $patient->gender = $request->gender;
            }
            if($request->dateOfBirth != null) {
                $patient->dateOfBirth = $request->dateOfBirth;
            }

            $patient -> save();
            return response() -> json([
                "message" => "patient update complete."
            ], 200);
        } else {
            return response() -> json([
                "message" => "Patient not found"
            ], 404);
        }
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        if (Patient::where('id', $id) -> exists()) {
            
            $patient = Patient::find($id);
            $patient -> delete();
            return response() ->  json([
                "message" => "Patient details deleted."
            ], 200);
        } else {
            return response() -> json([
                "message" => "Patient not found"
            ], 404);
        }
    }
}
