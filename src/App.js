import React, { useState } from 'react';
import MarkdownInput from './components/MarkdownInput';
import NoteDisplay from './components/NoteDisplay';
import Archive from './components/Archive';

const App = () => {
  const[note, setNote] = useState("");
  const[title, setTitle] = useState("");
  const[archive, setArchive] = useState([]);

 
  const changeHandler = (input) =>{
    setNote(input.note)
    setTitle(input.title)
  }

  const saveHandler = (e, input) =>{
        e.preventDefault()
        setArchive([
        ...archive,input])
  }

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-md-3 border-right">
            <div className="container">
              <button className="btn btn-secondary mt-3">Ajouter une note</button>
              <Archive archive={archive}/>
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