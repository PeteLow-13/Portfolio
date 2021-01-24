import React from 'react';
import './style.css';
import img from './profilepic.jpeg';

function Header() {
    return (
        <div className='header-container'>
            <h1>Pete Low</h1>
            <img className='profilePic' src={img} alt='Pete Low' />
            <p>Certified Full-stack Developer.</p>
        </div>
    )
}

export default Header
