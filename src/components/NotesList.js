import React from 'react'
import AddNote from './AddNote'
import Note from './Note'

const NotesList = ({ notes, handleAddNote, handleDeleteNote, darkMode }) => {
    return (
        <div className="notes-list">
            <AddNote handleAddNote={handleAddNote} darkMode={darkMode} />
            {notes.map(note => <Note id={note.id} key={note.id} text={note.text} date={note.date} handleDeleteNote={handleDeleteNote} darkMode={darkMode} />)}
        </div>
    )
}

export default NotesList
