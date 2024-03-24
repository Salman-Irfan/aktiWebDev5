<?php

namespace App\Http\Controllers\Api\NotesControllers;

use App\Http\Controllers\Controller;
use App\Models\Note;
use Illuminate\Http\Request;

class DeleteNoteByIdController extends Controller
{
    // Function to delete a note by ID
    public function deleteNoteById($id)
    {
        // Find the note by ID
        $note = Note::find($id);

        // Check if the note exists
        if (!$note) {
            return response()->json(['message' => 'Note not found'], 404);
        }

        // Delete the note
        $note->delete();

        // Return a JSON response with a success message
        return response()->json(['message' => 'Note deleted successfully'], 200);
    }
}
