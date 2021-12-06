import React from 'react';
import {Link} from 'react-router-dom'
import "../css/Homepage.css"
import imghomepage from "../img/Homepage/img_Homepage.png";
import logo from "../img/Logo2.svg";
import moon from "../img/moon.svg";
import triangle from "../img/ElementsBackground/triangle.svg"
import circle1 from "../img/ElementsBackground/circle1.svg"
import circle2 from "../img/ElementsBackground/circle2.svg"
import note from "../img/ElementsBackground/note1.svg"

function Homepage(){
    return(
        <div className='homepagegrid'>
            <div className='headerhp'>
                <Link to='/' className='linklogo'>
                    <img src={logo} alt="Mellowdy's Logo"/>
                </Link>
                
                    <div className='menu'>
                    <Link to='/about' className='linkToAbout'>About us</Link>    
                    <img src={moon} alt="A moon icon"/>
                </div>
            </div>
            <div  className='maintext'>
                <h2>Find the <span>playlist</span><br/>that suits you.</h2>
                <h3>Let the music take you away</h3>
                
                <a href="https://mellow-dy.tinker.ovh/oauth" className="button">Get started</a>
            </div>
            <img src={imghomepage} alt="A women listening music" className='imghomepage'/>

            <div className='hoverablebgdiv hbgd1'>
                <img src={triangle} alt="A background element icon" />
            </div>
            <div className='hoverablebgdiv hbgd2'>
                <img src={triangle} alt="A background element icon" />
            </div>
            <div className='hoverablebgdiv hbgd3'>
                <img src={triangle} alt="A background element icon" />
            </div>
            <div className='hoverablebgdiv hbgd4'>
                <img src={note} alt="A background element icon" />
            </div>
            <div className='hoverablebgdiv hbgd5'>
                <img src={note} alt="A background element icon" />
            </div>
            <div className='hoverablebgdiv hbgd6'>
                <img src={note} alt="A background element icon" />
            </div>
            <div className='hoverablebgdiv hbgd7'>
                <img src={circle1} alt="A background element icon" />
            </div>
            <div className='hoverablebgdiv hbgd8'>
                <img src={circle1} alt="A background element icon" />
            </div>
            <div className='hoverablebgdiv hbgd9'>
                <img src={circle2} alt="A background element icon" />
            </div>

        </div>
        
    );
}

export default Homepage;