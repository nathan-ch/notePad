import React, { useState, useEffect } from 'react';

const MarkdownInput = ({ changeHandler, saveHandler }) => {
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
          <input type="text" className="form-control m-2" name="title" placeholder="Le titre de ta note ici ..." onChange={handleInputChange} />
        </div>
        <div>
          <textarea type="text" className="form-control m-2" name="note" rows="15" placeholder="Ta note ici ..." onChange={handleInputChange} />
        </div>
        <input className="btn btn-primary m-2" type="submit"  value="Sauvegarder ma note" onClick={ (e) => saveHandler(e, input) } />
      </form>
    )
  }
  export default MarkdownInput;
  