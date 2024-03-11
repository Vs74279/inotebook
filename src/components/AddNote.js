import React,{useContext, useState} from 'react';
import noteContext from "../context/noteContext";

const AddNote = () => {
    const context = useContext(noteContext);
    const {addNote} = context;

    const [note, setNote] = useState({title: "", description:"",tag: "default"})
    const handleClick=(e)=>{
        e.oreventDefault();
           addNote(note.title, note.description, note.tag);
    }
    const onChange = (e)=>{
       setNote({...note, [e.target.name]: e.target.value})
    }
  return (
    <div className='container my-3'>
    <h1> Add a Note</h1>
    <form className='my-3'>
      <div className="form-group">
        <label htmlFor="title">Title</label>
        <input type="text" className="form-control" id="title" name="title" aria-describedby="emailHelp" placeholder="Enter email" onChange={onChange} />

      </div>
      <div className="form-group">
        <label htmlFor="description">description</label>
        <input type="text" className="form-control" id="description" name="description" placeholder="Password" onChange={onChange} />
      </div>
      <div className="form-check">
        <input type="checkbox" className="form-check-input" id="exampleCheck1" />
        <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
      </div>
      <button type="submit" className="btn btn-primary" onClick={handleClick}>Submit</button>
    </form>
    </div>
  )
}

export default AddNote
