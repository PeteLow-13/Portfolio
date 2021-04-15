import React from 'react';
import './style.css';
import img1 from './images/sk8tool.png';
import img2 from './images/funapp.png';
import img3 from './images/weatherdashboard.png';
import img4 from './images/burgerapp.png';
// import title from 'portfolio.json';

function Portfolio() {
    return (
        <div className='portfolio-container'>
            <h2>Portfolio</h2>
              <div className='project-container'>
                  <h3 className='title'>Sk8Tool</h3>
                  <img className='portfolio-img' src={img1} alt='Sk8tool'/>
                  <div className='description'><p>Sk8Tool is a project that allows Skateboarders to Find Skateparks, Skateshops and also view and add Skate Spots to our database</p></div>
                  <div className='technologies'>JavaScript, CSS3, HTML5, HandlebarsJS, Google Maps API, Open Weather API</div>
                  <div><a href='https://github.com/PeteLow-13/Project-02-Sk8Tool' target='blank'>Git hub Repository</a></div>
                  <div><a href='https://sk8fndr.herokuapp.com/' target='blank'>Deployed</a></div>
              </div>
              <div className='project-container'>
                  <h3 className='title'>Fun App</h3>
                  <img className='portfolio-img' src={img2} alt='Funapp'/>
                  <div className='description'><p>An app for parents to use to provide safe prescreened content for their children.</p></div>
                  <div className='technologies'>JavaScript, HTML5, SCSS, CSS3</div>
                  <div><a href='https://github.com/PeteLow-13/FunApp' target='blank'>Git hub Repository</a></div>
                  <div><a href='https://project03familyapp.herokuapp.com/' target='blank'>Deployed</a></div>
              </div>
              <div className='project-container'>
                  <h3 className='title'>Weather App</h3>
                  <img className='portfolio-img' src={img3} alt='Weather App'/>
                  <div className='description'><p>A tool to check the weather and the the weather forcast for any city</p></div>
                  <div className='technologies'>JavaScript, HTML5, CSS3, Open Weather API</div>
                  <div><a href='https://github.com/PeteLow-13/WeatherApp' target='blank'>Git hub Repository</a></div>
                  <div><a href='https://petelow-13.github.io/WeatherApp/' target='blank'>Deployed</a></div>
              </div>
              <div className='project-container'>
                  <h3 className='title'>Burger Party!</h3>
                  <img className='portfolio-img' src={img4} alt='Burger App'/>
                  <div className='description'><p>A fun little app to create burgers you would like to eat and save them until you devour them!</p></div>
                  <div className='technologies'>JavaScript, HTML5, CSS3, Open Weather API</div>
                  <div><a href='https://github.com/PeteLow-13/BurgerParty' target='blank'>Git hub Repository</a></div>
                  <div><a href='https://morning-meadow-19398.herokuapp.com/' target='blank'>Deployed</a></div>
              </div>
        </div>
    )
    }
export default Portfolio
