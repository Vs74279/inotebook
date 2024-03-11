import React from "react";
import NoteContext from "./noteContext";
import { useState } from "react";

const NoteState = (props) => {
   const notesInitial= [
    {
      "_id": "1765ea9787adfdfd3d32dfef972d0579",
      "user": "65e98e55091a4542bb8bc63c",
      "title": "New note",
      "description": "Please access the playlist",
      "tag": "youtube",
      "date": "2024-03-08T04:43:51.110Z",
      "__v": 0
    },
    {
      "_id": "1765ea9787adfdfd3skd32dfef972d0579",
      "user": "65e98e55091a4542bb8bc63c",
      "title": "New note",
      "description": "Please access the playlist",
      "tag": "youtube",
      "date": "2024-03-08T04:43:51.110Z",
      "__v": 0
    },
    {
      "_id": "1765ea9787adfdmkfd3d32dfef972d0579",
      "user": "65e98e55091a4542bb8bc63c",
      "title": "New note",
      "description": "Please access the playlist",
      "tag": "youtube",
      "date": "2024-03-08T04:43:51.110Z",
      "__v": 0
    },
    {
      "_id": "1765ea978vk7adfdfd3d32dfef972d0579",
      "user": "65e98e55091a4542bb8bc63c",
      "title": "New note",
      "description": "Please access the playlist",
      "tag": "youtube",
      "date": "2024-03-08T04:43:51.110Z",
      "__v": 0
    },
   
  ] 

   const [notes, setNotes] = useState(notesInitial)  

   // Add a note
   const addNote = (title,description,tag)=>{
   const note = {
        "_id": "2365ea97e7dkad3d32ef972d0578997d3",
        "user": "65e98e55091a4542CDbb8bc63c",
        "title": title,
        "description":description ,
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
   const editNote = ()=>{
    
   }
      
    return (
        <NoteContext.Provider value={{notes, addNote, deleteNote, editNote}}>
           {props.children}
        </NoteContext.Provider>
    );
}

export default NoteState;
