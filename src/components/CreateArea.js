import React, { useState } from 'react'
import AddCircleIcon from '@material-ui/icons/AddCircle';
import Fab from '@material-ui/core/Fab';
import Zoom from '@material-ui/core/Zoom';

function CreateArea(props) {

    const [isExpanded, setExpanded] = useState(false)

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

    function expand() {
        setExpanded(true)
    }
    return (
        <div>
            <form className="create-note">
                {isExpanded ? (<input name="title" value={note.title} onChange={handleChange} placeholder="Title" />) : null}
                <textarea name="content" value={note.content} onClick={expand} onChange={handleChange} placeholder="Take a note..." rows={isExpanded ? "3" : "1"} />
                <Zoom in={isExpanded} >
                    <Fab onClick={submitNote}>
                        <AddCircleIcon />
                    </Fab>
                </Zoom>

            </form>
        </div>
    )
}

export default CreateArea

