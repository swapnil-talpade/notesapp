import React, { useState, useEffect } from 'react'
import { nanoid } from 'nanoid'
import NotesList from './components/NotesList'
import Search from './components/Search'
import Header from './components/Header'


const App = () => {

  const [notes, setNotes] = useState([])
  const [searchText, setSearchText] = useState('')
  const [darkMode, setDarkMode] = useState(false)
  useEffect(() => {
    const savedNotes = JSON.parse(
      localStorage.getItem('react-notes-app-data')
    )
    if (savedNotes) {
      setNotes(savedNotes)
    }
  }, [])
  useEffect(() => {
    const getMode = JSON.parse(
      localStorage.getItem('react-notes-app-darkMode')
    )
    if (getMode) {
      setDarkMode(getMode)
    }
  }, [])

  useEffect(() => {
    localStorage.setItem(
      'react-notes-app-data',
      JSON.stringify(notes))
  }, [notes])
  useEffect(() => {
    localStorage.setItem(
      'react-notes-app-darkMode',
      JSON.stringify(darkMode)
    )
  }, [darkMode])

  const addNote = (text) => {
    console.log(text)
    const date = new Date();
    const newNote = {
      id: nanoid(),
      text: text,
      date: date.toLocaleDateString()
    }
    const newNotes = [...notes, newNote];
    setNotes(newNotes)
  }

  const deleteNote = (id) => {
    const newNotes = notes.filter((note) => note.id !== id)
    setNotes(newNotes)
  }

  return (
    <div className={`${darkMode && 'dark-mode'}`}>
      <div className="container">
        <Header handleDarkMode={setDarkMode} darkMode={darkMode} />
        <Search handleSearchNote={setSearchText} />
        <NotesList notes={notes.filter((note) => note.text.toLowerCase().includes(searchText))} handleAddNote={addNote} handleDeleteNote={deleteNote} darkMode={darkMode} />
      </div>
    </div>

  )
}

export default App
