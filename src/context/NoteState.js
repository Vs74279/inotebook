import React, { useState } from "react";
import NoteContext from "./noteContext";

const NoteState = (props) => {
    // Define state using useState hook
    const s1= {
        "name": "vikash",
        "class": "8a"
    }
     const [state, setstate] = useState(s1);
      const update = () =>{
        setTimeout(() => {
         setstate({
            "name":"singh",
            "class":"10b"
         })
        },1000)
     }
    return (
        <NoteContext.Provider value={{state, update}}>
           {props.children}
        </NoteContext.Provider>
    );
}

export default NoteState;
