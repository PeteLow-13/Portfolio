import React from 'react';
import './style.css';
import UW from './uwseal.png' ;
import UH from './uhsealgold.jpg' ;

function Education() {
    return (
        <div className='education-container'>
            <h2>Education</h2>
            <div className='seal-div'>
            <img className='school-seal' src={UW} alt='UW seal' />
            </div> 
            <h3>University of Washington</h3>
            <p>Certificate: Full-stack Web Development</p>
            <div className='seal-div'>
            <img className='school-seal' src={UH} alt='UH seal' />
            </div> 
            <h3>University of Hawaii Manoa</h3>
            <p>Bachelors Political Science, with emphasis on Spanish</p>
        </div>
    )
}

export default Education

