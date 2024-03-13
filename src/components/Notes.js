import React, { useContext, useEffect, useRef, useState } from 'react'
import noteContext from "../context/noteContext";
import Noteitem from './Noteitem';
import AddNote from './AddNote';


const Notes = (props) => {
  const context = useContext(noteContext);
  const { notes, getNotes ,editNote} = context;
  useEffect(() => {

    getNotes()
    // eslint-disable-next-line


  }, [getNotes]);
  const myRef = useRef(null);
  const myRefClose = useRef(null);
  const [note, setNote] = useState({ id: "" ,etitle: "", edescription:"",etag: ""})
  const updateNote = (currentNote) => {
    myRef.current.click();
    setNote({ id: currentNote._id, etitle: currentNote.title, edescription: currentNote.description, etag: currentNote.tag})
    props.showAlert("updated successfully","success");
  }

  const handleClick=(e)=>{
    console.log("Updating the note...",note)
    editNote(note.id, note.etitle, note.edescription, note.etag)
    myRefClose.current.click()
    
      
}
const onChange = (e)=>{
   setNote({...note, [e.target.name]: e.target.value})
}
  return (
    <>
      <AddNote showAlert={props.showAlert}/>
      <button ref={myRef} type="button" className="btn btn-primary d-none" data-bs-toggle="modal" data-bs-target="#exampleModal">
        Launch demo modal
      </button>


      <div class="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel">Edit Note</h5>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
              <form className='my-3'>
                <div className="form-group">
                  <label htmlFor="etitle" className='form-control'>Title</label>
                  <input type="text" className="form-control" id="etitle" name="etitle" value={note.title} aria-describedby="emailHelp"  onChange={onChange} />

                </div>
                <div className="my-3">
                  <label htmlFor="edescription" className='form-label'>description</label>
                  <input type="text" className="form-control" id="edescription" name="edescription"  value= {note.description} onChange={onChange} minLength={5} required />
                </div>
                <div className="my-3">
                  <label htmlFor="etag" className='form-label'>tag</label>
                  <input type="text" className="form-control" id="etag" name="etag" value={note.tag} onChange={onChange} minLength={5} required />
                </div>

               
              </form>
            </div>
            <div class="modal-footer">
              <button ref={myRefClose}type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
              <button disabled={note.etitle.length<5 || note.edescription.length<5} onClick={handleClick} type="button" class="btn btn-primary">updateNote</button>
            </div>
          </div>
        </div>
      </div>
      <div className='row my-3'>
        <h1>your Notes</h1>
        <div className='container mx-2'>
        {notes.length===0 && 'No notes to display'}
        </div>
        {notes.map((note) => {
          return <Noteitem key={note._id} updateNote={updateNote} showAlert={props.showAlert}note={note} />


        })}
      </div>
    </>
  )
}

export default Notes
