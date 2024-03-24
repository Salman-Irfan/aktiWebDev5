<?php

namespace App\Http\Controllers\Api\NotesControllers;

use App\Http\Controllers\Controller;
use App\Models\Note;
use Illuminate\Http\Request;

class ReadNotesController extends Controller
{
    // Function to read all notes
    public function read()
    {
        // Get all notes from the Note model
        $notes = Note::all();

        // Return a JSON response with the notes
        return response()->json(['message' => 'Notes retrieved successfully', 'notes' => $notes], 200);
    }
}
