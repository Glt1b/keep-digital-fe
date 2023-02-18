import { React, useEffect, useState, useContext } from "react";

import { DetailsContext } from '../context/Details';
import { AboutAdmin } from '../components/AboutAdmin'

const header = require('../images/header.jpg');

export default function Page() {
    
    const { details, setDetails } = useContext(DetailsContext);

    return (
        <div className="App">
        <div className='NavBar'>
          <div className='Logo'>
             <p>Place for Logo</p>
          </div>
          <div>
        { details.active_sections ? details.active_sections.map(item => (<button key={item} className="Menu-button">{item}</button>)) : (<p>Loading...</p>)}
          </div>
          <div>
            <button>Book Now!</button>
          </div>
        </div>
        <header className="App-header">
        <img className='header-image' src={header} alt="header"/>
        <h1 className="centered-header-text">Header</h1>
        </header>

        { details.active_sections.includes('About') ? <AboutAdmin /> : (<p>Loading...</p>)}

        </div>
    )
};
