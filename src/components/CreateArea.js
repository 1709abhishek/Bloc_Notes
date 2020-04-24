import React, { useState } from 'react'
import AddCircleIcon from '@material-ui/icons/AddCircle';
import Fab from '@material-ui/core/Fab';

function CreateArea(props) {

    const [note, setnote] = useState({
        title: '',
        content: ''
    })

    function handleChange(event) {
        const { name, value } = event.target

        setnote(prevNote => {
            return {
                ...prevNote,
                [name]: value
            }
        })
    }

    function submitNote(event) {
        props.onAdd(note)
        setnote({
            title: '',
            content: ''
        })
        event.preventDefault()
    }
    return (
        <div>
            <form className="create-note">
                <input name="title" value={note.title} onChange={handleChange} placeholder="Title" />
                <textarea name="content" value={note.content} onChange={handleChange} placeholder="Take a note..." rows="3" />
                <Fab onClick={submitNote}>
                    <AddCircleIcon />
                </Fab>
            </form>
        </div>
    )
}

export default CreateArea

