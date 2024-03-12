import React from "react";
import NoteContext from "./noteContext";
import { useState } from "react";

const NoteState = (props) => {
  const host = "http://localhost:4000"
  const notesInitial = []
  const [notes, setNotes] = useState(notesInitial)
  
  // get all  note
  const getNotes = async () => {
    const response = await fetch(`${host}/api/notes/fetchallnotes`, {
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
    const note = await response.json();
    setNotes(notes.concat(note))
   
    
   
  }

  // Delete a note
  const deleteNote =async (id) => {

    const response = await fetch(`${host}/api/notes/deletenote/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjVlOThlNTUwOTFhNDU0MmJiOGJjNjNjIn0sImlhdCI6MTcwOTgwNTE0MX0.wGf5TGxHy8qE9o9jPzFY7WBQMCIim9np6wXqj8OIG9w"
      },
      
    });

    const json = response.json();
    
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
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjVlOThlNTUwOTFhNDU0MmJiOGJjNjNjIn0sImlhdCI6MTcwOTgwNTE0MX0.wGf5TGxHy8qE9o9jPzFY7WBQMCIim9np6wXqj8OIG9w"
      },
      body: JSON.stringify({title,description,tag})
    });

    const json = await response.json();
    


    let newNotes = JSON.parse(JSON.stringify(notes))
    for (let index = 0; index < newNotes.length; index++) {
      const element = newNotes[index];
      if (element._id === id) {
        newNotes[index].title = title;
        newNotes[index].description = description;
        newNotes[index].tag = tag;
        break;
      }
    
    }
   setNotes(newNotes);
  }

  return (
    <NoteContext.Provider value={{ notes, addNote, deleteNote, editNote, getNotes }}>
      {props.children}
    </NoteContext.Provider>
  );

}
export default NoteState;
