import React from 'react';
import './style.css';
import img from './profilepic.jpeg';

function Header() {
    return (
        <div className='header-container'>
            <h1>Pete Low</h1>
            <div className='profile-picture-div'>
                <img className='profile-picture' src={img} alt='Pete Low' />
            </div>
            <h2> Full-Stack Developer.</h2>
            <p>Full Stack Web Developer with a restaurant and Operations background. Expert in overcoming challenges with passion for teaching others. Believe strongly in straightforward communication working as a team, and striving to learn more each day and pass it along to others. Recently earned a Certificate in Full Stack Web Development from the University of Washington. </p>
            <div className='social'>
                <a href='https://www.linkedin.com/in/pete-low/' target='blank'><img src="https://img.icons8.com/ios-filled/50/000000/linkedin.png" alt='LinkedIn'/></a>
                <a href='https://github.com/PeteLow-13' target='blank'><img src="https://img.icons8.com/ios-filled/50/000000/github.png" alt='Github'/></a>
            </div>
            <p>Check out my <a href='https://docs.google.com/document/d/1FtLA_F3kEbFwN_glaEtvBXf4-1VkjcCjs5xS0pcoej8/edit?usp=sharing' target='blank'>Resume</a></p>
            
        </div>
    )
}

export default Header
