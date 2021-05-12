import React, { useState } from 'react'

const AddNote = ({ handleAddNote, darkMode }) => {
    const [noteText, setNoteText] = useState("");
    const characterLimit = 200;
    const handleChange = (e) => {
        if (characterLimit - e.target.value.length >= 0) {
            setNoteText(e.target.value)
        }

    }
    const handleSaveClick = () => {
        if (noteText.trim().length > 0 && noteText.length < characterLimit) {
            handleAddNote(noteText)
        }

        setNoteText("")
    }
    return (
        <div className={`${darkMode ? "note new dark-mode" : "note new"}`}>
            <textarea
                name=""
                cols="10"
                rows="8"
                placeholder="Type to add a note..."
                value={noteText}
                onChange={handleChange}>
            </textarea>
            <div className="note-footer">
                <small>{characterLimit - noteText.length} remaining</small>
                <button className="save" onClick={handleSaveClick}>Save</button>
            </div>
        </div>
    )
}

export default AddNote
