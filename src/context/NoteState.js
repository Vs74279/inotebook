import React from "react";
import NoteContext from "./noteContext";
import { useState } from "react";

const NoteState = (props) => {
   const notesInitial= [
    {
      "_id": "65ea9787ad3d32ef972d0579",
      "user": "65e98e55091a4542bb8bc63c",
      "title": "New note",
      "description": "Please access the playlist",
      "tag": "youtube",
      "date": "2024-03-08T04:43:51.110Z",
      "__v": 0
    },
    {
      "_id": "65ea97e7ad3d32ef972d057d",
      "user": "65e98e55091a4542bb8bc63c",
      "title": "New note",
      "description": "Please access the playlist",
      "tag": "youtube",
      "date": "2024-03-08T04:45:27.101Z",
      "__v": 0
    },
    {
        "_id": "65ea97e7ad3d32ef972d057d",
        "user": "65e98e55091a4542bb8bc63c",
        "title": "New note",
        "description": "Please access the playlist",
        "tag": "youtube",
        "date": "2024-03-08T04:45:27.101Z",
        "__v": 0
      },
      {
        "_id": "65ea97e7ad3d32ef972d057d",
        "user": "65e98e55091a4542bb8bc63c",
        "title": "New note",
        "description": "Please access the playlist",
        "tag": "youtube",
        "date": "2024-03-08T04:45:27.101Z",
        "__v": 0
      },
      {
        "_id": "65ea97e7ad3d32ef972d057d",
        "user": "65e98e55091a4542bb8bc63c",
        "title": "New note",
        "description": "Please access the playlist",
        "tag": "youtube",
        "date": "2024-03-08T04:45:27.101Z",
        "__v": 0
      },
  ] 
   const [notes, setNotes] = useState(notesInitial)  
      
    return (
        <NoteContext.Provider value={{notes, setNotes}}>
           {props.children}
        </NoteContext.Provider>
    );
}

export default NoteState;
