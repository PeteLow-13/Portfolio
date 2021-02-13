import React from 'react';
import './style.css';

function Skills() {
    return (
        <div className='skills-container'>
            <h2>Skills, Languages, Technologies and Frameworks:</h2>
                <a className='hovertag' href='https://reactjs.org/' target='blank' alt='React JS'>
                    <img src="https://img.icons8.com/plasticine/100/000000/react.png" alt='React JS logo'/>
                    <span className='hovertext'>ReactJS</span>
                </a>
                <a className='hovertag' href='https://www.javascript.com/' target='blank' alt='JavaScript'>
                    <img src="https://img.icons8.com/color/96/000000/javascript.png" alt='JavaScript logo'/>
                    <span className='hovertext'>JavaScript</span>
                </a>
                <a className='hovertag' href='https://developer.mozilla.org/en-US/docs/Web/CSS' target='blank' alt='CSS'>
                    <img src="https://img.icons8.com/color/96/000000/css3.png" alt='CSS logo'/>
                    <span className='hovertext'>CSS</span>
                </a>
                <a className='hovertag' href='https://developer.mozilla.org/en-US/docs/Web/HTML' target='blank' alt='HTML'>
                    <img src="https://img.icons8.com/color/96/000000/html-5.png" alt='HTML logo'/>
                    <span className='hovertext'>HTML5</span>
                </a>
                <a className='hovertag' href='Node.jshttps://nodejs.org' target='blank' alt='NodeJS'>
                    <img src="https://img.icons8.com/windows/96/000000/node-js.png" alt='NodeJS logo'/>
                    <span className='hovertext'>NodeJS</span>
                </a>
                <a className='hovertag' href='https://www.mongodb.com/' target='blank' alt='MogoDB'>
                    <img src="https://img.icons8.com/color/96/000000/mongodb.png" alt='MogoDB logo'/>
                    <span className='hovertext'>MongoDB</span>
                </a>
                <a className='hovertag' href='https://www.mongodb.com/' target='blank' alt='MySql'>
                    <img src="https://img.icons8.com/ios-filled/100/000000/mysql-logo.png" alt='MySql logo'/>
                    <span className='hovertext'>MySql</span>
                </a>
                <a className='hovertag' href='https://jquery.com/' target='blank' alt='JQuery'>
                    <img src="https://img.icons8.com/ios/100/000000/jquery.png" alt='JQuery logo'/>
                    <span className='hovertext'>JQuery</span>
                </a>
                <a className='hovertag' href='https://handlebarsjs.com/' target='blank' alt='Handlebars'>
                    <img src="https://img.icons8.com/ios-filled/100/000000/handlebar-mustache.png" alt='Handlebars logo'/>
                    <span className='hovertext'>HandlebarsJS</span>
                </a>
                <a className='hovertag' href='https://www.npmjs.com/' target='blank' alt='NPM'>
                    <img src="https://img.icons8.com/color/96/000000/npm.png" alt='NPM logo'/>
                    <span className='hovertext'>NPMjs</span>
                </a>
                <p>and learning more daily</p>
        </div>
    )
}

export default Skills
