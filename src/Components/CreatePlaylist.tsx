import logo from '../img/Logo2.svg'
import {Link} from 'react-router-dom'

import moon from "../img/moon.svg";

import '../css/CreatePlaylist.css'






function CreatePlaylist() {


    return(
        <form className="GPgrid">

            <div className='headergp'>
                <Link to='/' className='linklogo'>
                    <img src={logo} alt="Mellowdy's Logo"/>
                </Link>
                
                    <div className='menu'>
                    <Link to='/about' className='linkToAbout'>About us</Link>    
                    <img src={moon} alt="A moon icon"/>
                </div>
            </div>



            <div>
                <h2>Hi <span>Insérer le nom du client,</span></h2>
                <p>What do you feel like listening to today ?</p>
            </div>


            

            <div className='sossur'>
                <p>*You must choose at least one</p>
                <div>
                    <div>
                        <div>
                            <p>Artist</p>
                            <div>
                                <img src="" alt="" /><img src="" alt="" /><img src="" alt="" />
                            </div>
                        </div>
                        <input type="text" name="artist" id="artist" placeholder='artist' required/>
                    </div>
                    <div>
                        <div>
                            <p>Track</p>
                            <div>
                                <img src="" alt="" /><img src="" alt="" /><img src="" alt="" />
                            </div>
                        </div>
                        <input type="text" name="track" id="track" placeholder='track' required/>
                    </div> 
                </div>
            </div>


            <div className='sossur'>
                <p>Click on the title of a parameter so that it is taken into account in your playlist creation</p>
                <div className='parametersgrid'>
                    <label htmlFor="Energy">Energy</label>
                    <input type="range" name="Energy" id="energy" min="0" max="1" step="0.1"/>
                    <label htmlFor="Popularity">Popularity</label>
                    <input type="range" name="Popularity" id="popularity" min="0" max="1" step="0.1"/>
                    <label htmlFor="Temporality">Temporality</label>
                    <input type="range" name="Temporality" id="temporality" min="0" max="1" step="0.1"/>
                    <label htmlFor="Instrumentalness">Instrumentalness</label>
                    <input type="range" name="Instrumentalness" id="instrumentalness" min="0" max="1" step="0.1"/>
                    <label htmlFor="Liveness">Livesness</label>
                    <input type="range" name="Liveness" id="liveness"min="0" max="1" step="0.1"/>

                </div>
            </div>


            <div className='sossur'>
                <p>What name do you want to give to it  ?</p>
                <input type="text" name="playlistname" id="playlistname" placeholder="Your playlist's name ..." required/>
            </div>

            <div className='sossur'>
                <input type="submit" value="Generate playlist" />
            </div>


        </form>
    );
}

export default CreatePlaylist;