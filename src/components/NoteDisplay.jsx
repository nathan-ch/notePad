import React, { useState } from 'react';
import Showdown from "showdown";

const NoteDisplay = ({mdTitle, mdNote}) => {

  const converter = new Showdown.Converter();
  let htmlTitle = converter.makeHtml(mdTitle)
  let htmlNote = converter.makeHtml(mdNote)
  
    return (
     <div className="border-bottom" style={{minHeight:'20em'}}> 
        <h1><div dangerouslySetInnerHTML={{__html: htmlTitle}} /></h1>
        <div dangerouslySetInnerHTML={{__html: htmlNote}} />
     </div>
    )
  }
  export default NoteDisplay;
  