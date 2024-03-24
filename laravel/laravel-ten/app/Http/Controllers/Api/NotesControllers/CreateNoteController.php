<?php

namespace App\Http\Controllers\Api\NotesControllers;

use App\Http\Controllers\Controller;
use App\Models\Note;
use Illuminate\Http\Request;

class CreateNoteController extends Controller
{
    // note create function
    public function create(Request $request)
    {
        // Validate the incoming request data
        $validatedData = $request->validate([
            'title' => 'required|string|max:255',
            'description' => 'required|string',
        ]);

        // Create a new note instance
        $note = new Note();
        $note->title = $validatedData['title'];
        $note->description = $validatedData['description'];

        // Save the note to the database
        $note->save();

        // Return a JSON response with the newly created note
        return response()->json(['message' => 'Note created successfully', 'note' => $note], 201);
    }
}
