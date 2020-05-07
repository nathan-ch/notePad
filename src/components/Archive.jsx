import React, { useEffect, useState } from "react";
const Archive = ({archive}) => {

    const archivelist = archive.map((note,i) => (
        <div className="border-top mt-2" key={i}>
            <h4 className="text-primary">{note.title}</h4>
            <p>{note.note}</p>    
        </div>
    ))    

    return (
     <div className="">
       {archivelist}
     </div>
    )
  }
  export default Archive;
  