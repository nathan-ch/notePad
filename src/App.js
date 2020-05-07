import React, { useState } from 'react';
import MarkdownInput from './components/MarkdownInput';
import NoteDisplay from './components/NoteDisplay';
import Archive from './components/Archive';

const App = () => {
  const[note, setNote] = useState("");
  const[title, setTitle] = useState("");
  const[id, setId] = useState(0)

 
  const changeHandler = (input) =>{
    setNote(input.note)
    setTitle(input.title)
  }

  const saveHandler = (e) =>{
    let array=[title, note]
    let json = JSON.stringify(array)
    e.preventDefault()
    localStorage.setItem(title, json);
    setId(id+1)
  }

  const newNote = (e) =>{
    e.preventDefault()
  }

  const displayArchive = (e, note) =>{
    e.preventDefault();
    localStorage.getItem(note[2]);
    console.log(localStorage.getItem(note));
    setNote(note[1])
    setTitle(note[0])
  }


  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-md-3 border-right">
            <div className="container">
              <button onClick={ (e) => newNote(e)} className="btn btn-secondary mt-3">Ajouter une note</button>
              <Archive displayArchive={displayArchive}/>
            </div>

          </div>
          <div className="col-md-9">
            <NoteDisplay mdTitle={title} mdNote={note} />
            <MarkdownInput changeHandler={changeHandler} saveHandler={saveHandler}/>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
