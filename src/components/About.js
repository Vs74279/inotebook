import React, { useContext } from "react";
import NoteContext from "../context/noteContext";
import { useEffect } from "react";

const ConsumerComponent = () => {
    // Access the context using useContext hook
    const a = useContext(NoteContext);
    useEffect(() => {
      a.update();
      // eslint-disable-next-line
    },[])

    return (
        <div>
          this is about {a.state.name} and he is in class {a.state.class}
            
        </div>
    );
}

export default ConsumerComponent;

