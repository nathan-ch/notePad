import React, { useEffect, useState } from "react";

const Archive = ({displayArchive, modify, deleteNote}) => {
  
  let storage=[]
  for( let i = 0; i < localStorage.length; i++){
    let key=localStorage.key(i)
    let obj=JSON.parse(localStorage[key])
    obj.push(key)
    storage.push(obj)
  }

    const archivelist = storage.map((note,i) => (
        <div className="border-top mt-2" key={note[2]}>
            <a className="text-primary" onClick={ (e) => displayArchive(e, note) } ><h4 className="mt-1">{note[0]}</h4></a>
            <p className="text-break">
              {note[1].length > 140
                ? note[1].substring(0, 140) + "..."
                : note[1]}
            </p>
            <button className="btn btn-danger btn-sm mb-3 mr-1" onClick={ (e) => deleteNote(e, note[2]) } >Suppr</button>
            <button className="btn btn-warning btn-sm mb-3" onClick={ (e) => modify(e, note ) } >Modifier la note</button>
        </div>
    ))    

    return (
     <div className="">
       {archivelist}
     </div>
    )
  }
  export default Archive;
  