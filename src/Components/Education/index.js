import React from 'react';
import './style.css';
import UW from './uwseal.png' ;
import UH from './uhsealgold.jpg' ;

function Education() {
    return (
        <div className='education-container'>
            <h2>Education</h2>
            <div className='seal-div'>
            <a href='https://bootcamp.uw.edu/coding/landing/?s=Google-Brand&msg_cv_scta=4&msg_cv_stbn=1&msg_cv_fcta=1&fqvar1=3&pkw=university%20of%20washington%20coding%20bootcamp&pcrid=463279349719&pmt=e&utm_source=google&utm_medium=cpc&utm_campaign=GGL%7CUNIVERSITY-OF-WASHINGTON%7CSEM%7CCODING%7C-%7COFL%7CTIER-1%7CALL%7CBRD%7CEXACT%7CCore%7CBootcamp&utm_term=university%20of%20washington%20coding%20bootcamp&s=google&k=university%20of%20washington%20coding%20bootcamp&utm_adgroupid=112635573270&utm_locationphysicalms=9033322&utm_matchtype=e&utm_network=g&utm_device=c&utm_content=463279349719&utm_placement=&gclid=CjwKCAiA65iBBhB-EiwAW253WzQp76B1oKS8SFGYFSbHlALjuKk7GbtKrZH3m-r9lzY3X_6wivpo0xoC3_AQAvD_BwE&gclsrc=aw.ds' target='blank'><img className='school-seal' src={UW} alt='UW seal' /></a>
            </div> 
            <h3>University of Washington</h3>
            <p>Certificate: Full-stack Web Development</p>
            <div className='seal-div'>
            <a href='https://manoa.hawaii.edu/' target='blank'><img className='school-seal' src={UH} alt='UH seal' /></a>
            </div> 
            <h3>University of Hawaii Manoa</h3>
            <p>Bachelors Political Science, with emphasis on Spanish</p>
        </div>
    )
}

export default Education

