import React,{useContext, useState} from 'react';
import noteContext from "../context/noteContext";

const AddNote = () => {
    const context = useContext(noteContext);
    const {addNote} = context;

    const [note, setNote] = useState({title: "", description:"",tag: "default"})
    const handleClick=(e)=>{
        e.preventDefault();
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
        <label htmlFor="title" className='form-control'>Title</label>
        <input type="text" className="form-control" id="title" name="title" aria-describedby="emailHelp" placeholder="Enter email" onChange={onChange} />

      </div>
      <div className="form-group">
        <label htmlFor="description" className='form-label'>description</label>
        <input type="text" className="form-control" id="description" name="description"  onChange={onChange} />
      </div>
      <div className="form-check">
        <input type="checkbox" className="form-check-input" id="exampleCheck1" />
        <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
      </div>
      <button type="submit" className="btn btn-primary" onClick={handleClick}>Add Note</button>
    </form>
    </div>
  )
}

export default AddNote
