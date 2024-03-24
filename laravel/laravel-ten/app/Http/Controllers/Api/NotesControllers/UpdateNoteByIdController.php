<?php

namespace App\Http\Controllers\Api\NotesControllers;

use App\Http\Controllers\Controller;
use App\Models\Note;
use Illuminate\Http\Request;

class UpdateNoteByIdController extends Controller
{
    // Function to update a note by ID
    public function updateNoteById(Request $request, $id)
    {
        // Find the note by ID
        $note = Note::find($id);

        // Check if the note exists
        if (!$note) {
            return response()->json(['message' => 'Note not found'], 404);
        }

        // Validate the incoming request data
        $validatedData = $request->validate([
            'title' => 'required|string|max:255',
            'description' => 'required|string',
        ]);

        // Update the note attributes
        $note->title = $validatedData['title'];
        $note->description = $validatedData['description'];

        // Save the updated note to the database
        $note->save();

        // Return a JSON response with the updated note
        return response()->json(['message' => 'Note updated successfully', 'note' => $note], 200);
    }
}
