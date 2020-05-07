import React, { useEffect, useState } from "react";

const Archive = ({displayArchive}) => {
  const[counter, setCounter] = useState(0);
  
  let storage=[]
  for( let i = 0; i < localStorage.length; i++){
    let key=localStorage.key(i)
    let obj=JSON.parse(localStorage[key])
    obj.push(key)
    console.log(obj);
    storage.push(obj)
  }
  console.log(storage);

  const handleDelete = (e, key) =>{
    e.preventDefault();
    localStorage.removeItem(key);
    setCounter(counter+1)
  }

    const archivelist = storage.map((note,i) => (
        <div className="border-top mt-2" key={note[2]}>
            <button className=" btn btn-outline-primary mb-1 mt-3" onClick={ (e) => displayArchive(e, note) } >{note[0]}</button>
            <br/>
            <button className="btn btn-danger btn-sm" onClick={ (e) => handleDelete(e, note[2]) } >Supprimer</button>
        </div>
    ))    

    return (
     <div className="">
       {archivelist}
     </div>
    )
  }
  export default Archive;
  