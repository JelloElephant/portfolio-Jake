import React from 'react';
import '../app.css'
import './header.css'

function Header({ handlePage, page }) {
    return (
        <div className="headerStyle">
            <h1 onClick={() => handlePage('')}>Jake Eik</h1>
            <div className="navStyle">
                <p onClick={() => handlePage('about')} key={'about'}>About Me</p>
                <p onClick={() => handlePage('portfolio')} key={'portfolio'}>Portfolio</p>
                <p onClick={() => handlePage('resume')} key={'resume'}>Resume</p>
                <p onClick={() => handlePage('contact')} key={'contact'}>Contact</p>
            </div>
        </div>
    )
}
export default Header
