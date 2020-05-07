import React, { useState } from 'react';
import MarkdownInput from './components/MarkdownInput';
import NoteDisplay from './components/NoteDisplay';
import Archive from './components/Archive';

const App = () => {
  const[note, setNote] = useState("");
  const[title, setTitle] = useState("");
  const[add, setAdd] = useState(false);
  const[read, setRead] = useState(false);
  const[edit, setEdit] = useState("");


  const changeHandler = (input) =>{
    setNote(input.note)
    setTitle(input.title)
  }

  const saveHandler = (e) =>{
    if(edit){
      if(!title || !note){
        alert("Tu dois modifier le titre et le contenu pour sauvegarder")
      }else{
      localStorage.removeItem(edit);
      let array=[title, note]
      let json = JSON.stringify(array)
      localStorage.setItem(title, json);
      setRead(false)
      setEdit(false)
      }
    }else{
    let array=[title, note]
    let json = JSON.stringify(array)
    localStorage.setItem(title, json);
    setRead(false)
    }
  }

  const newNote = (e) =>{
    e.preventDefault()
    setNote("")
    setTitle("")
    setAdd(true)
    setRead(true)
  }

  const modify = (e, note) =>{
    e.preventDefault();
    setRead(true)
    setAdd(true)
    localStorage.getItem(note[2]);
    setNote(note[1])
    setTitle(note[0])
    setEdit(note[0])
  }

  const deleteNote = (e, key) =>{
    e.preventDefault();
    localStorage.removeItem(key);
    setRead(false)
    setAdd(false)
  }

  const displayArchive = (e, note) =>{
    e.preventDefault();
    setRead(true)
    setAdd(false)
    localStorage.getItem(note[2]);
    setNote(note[1])
    setTitle(note[0])
  }


  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-md-3 border-right">
              <button onClick={ (e) => newNote(e)} className="btn btn-primary mt-3">Ajouter une note</button>
              <Archive displayArchive={displayArchive} modify={modify} deleteNote={deleteNote} />
          </div>
            {read && (
                <div className="col-md-9" id="display">
                  <NoteDisplay mdTitle={title} mdNote={note} />
                {add && <MarkdownInput changeHandler={changeHandler} saveHandler={saveHandler} title={title} note={note}/>}
                </div>
            )}
          </div>
        </div>
    </>
  );
}

export default App;
