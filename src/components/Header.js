import React from 'react'

const Header = ({ handleDarkMode, darkMode }) => {
    return (
        <div className="header">
            <h1>Notes App</h1>
            <button className="save" onClick={() => handleDarkMode(prevMode => !prevMode)}>{darkMode ? 'Toggle Light Mode' : 'Toggle Dark Mode'}</button>
        </div>
    )
}

export default Header
