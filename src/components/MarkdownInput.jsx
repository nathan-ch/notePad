import React, { useState, useEffect } from 'react';

const MarkdownInput = ({ changeHandler, saveHandler, title, note }) => {
    const [input, setInput] = useState({})

    const handleInputChange = (e) => {
            setInput({
            ...input,
            [e.currentTarget.name]: e.currentTarget.value
        })
    }
    useEffect(() => {
        changeHandler(input)
      }, [input]);

    return (
      <form>
        <div>
          <input type="text" className="form-control m-2" name="title" value={title} placeholder="Le titre de ta note ici ..." onChange={handleInputChange} />
        </div>
        <div>
          <textarea type="text" className="form-control m-2" name="note" rows="15" value={note} placeholder="Ta note ici ..." onChange={handleInputChange} />
        </div>
        <input className="btn btn-success m-2" type="reset"  value="Sauvegarder ma note" onClick={ (e) => saveHandler(e) } />
      </form>
    )
  }
  export default MarkdownInput;
  