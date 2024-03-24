<?php

namespace App\Http\Controllers\Api\NotesControllers;

use App\Http\Controllers\Controller;
use App\Models\Note;
use Illuminate\Http\Request;

class ReadNoteByIdController extends Controller
{
    // Function to read a note by ID
    public function readById($id)
    {
        // Find the note by ID
        $note = Note::find($id);

        // Check if the note exists
        if (!$note) {
            return response()->json(['message' => 'Note not found'], 404);
        }

        // Return a JSON response with the note
        return response()->json(['message' => 'Note retrieved successfully', 'note' => $note], 200);
    }
}
