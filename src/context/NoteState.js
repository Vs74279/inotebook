import React from "react";
import NoteContext from "./noteContext";
import { useState } from "react";

const NoteState = (props) => {
  const host = "http://localhost:4000"
  const notesInitial = []
  const [notes, setNotes] = useState(notesInitial)
  
  // get all  note
  const getNotes = async () => {
    const response = await fetch(`http://localhost:4000/api/notes/fetchallnotes`, {
      'method': 'GET',
      'headers': {
        'Content-Type': 'application/json',
        "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjVlOThlNTUwOTFhNDU0MmJiOGJjNjNjIn0sImlhdCI6MTcwOTgwNTE0MX0.wGf5TGxHy8qE9o9jPzFY7WBQMCIim9np6wXqj8OIG9w"
        
      }
      
    });
    const json = await response.json()
    console.log(json)
    setNotes(json)  
    
  }


  // Add a note
  const addNote = async (title, description, tag) => {
    const response = await fetch(`${host}/api/notes/addnote`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjVlOThlNTUwOTFhNDU0MmJiOGJjNjNjIn0sImlhdCI6MTcwOTgwNTE0MX0.wGf5TGxHy8qE9o9jPzFY7WBQMCIim9np6wXqj8OIG9w"
      },
      body: JSON.stringify({title,description,tag})
    });

    
    const note = {
      "_id": "2365ea97e7dkad3d32ef972d0578997d3",
      "user": "65e98e55091a4542CDbb8bc63c",
      "title": title,
      "description": description,
      "tag": tag,
      "date": "2024-03-08T04:45:27.101Z",
      "__v": 0
    };
    setNotes(notes.concat(note))
  }

  // Delete a note
  const deleteNote = (id) => {
    console.log("Deleting the note with id: " + id);
    try {
      const newNotes = notes.filter((note) => note._id !== id);
      setNotes(newNotes);
    } catch (error) {
      console.error("Error deleting note:", error);
    }
  };


  // Edit a note
  const editNote = async (id, title, description, tag) => {

    const response = await fetch(`${host}/api/notes/updatenote/${id}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjVlOThlNTUwOTFhNDU0MmJiOGJjNjNjIn0sImlhdCI6MTcwOTgwNTE0MX0.wGf5TGxHy8qE9o9jPzFY7WBQMCIim9np6wXqj8OIG9w"
      },
      body: JSON.stringify({title,description,tag})
    });

    



    for (let index = 0; index < notes.length; index++) {
      const element = notes[index];
      if (element._id === id) {
        element.title = title;
        element.description = description;
        element.tag = tag;
      }
    }

  }

  return (
    <NoteContext.Provider value={{ notes, addNote, deleteNote, editNote, getNotes }}>
      {props.children}
    </NoteContext.Provider>
  );

}
export default NoteState;
