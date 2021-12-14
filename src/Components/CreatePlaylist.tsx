import React from 'react';

import logo from '../img/Logo2.svg'
import {Link} from 'react-router-dom'

import moon from "../img/moon.svg";
import artist from "../img/GeneratePlaylist/artist.svg"
import artist1 from "../img/GeneratePlaylist/artist1.svg"
import artist2 from "../img/GeneratePlaylist/artist2.svg"

import track from "../img/GeneratePlaylist/track.svg"
import track1 from "../img/GeneratePlaylist/track1.svg"
import track2 from "../img/GeneratePlaylist/track2.svg"

import mic from "../img/GeneratePlaylist/mic.svg"
import guitar from "../img/GeneratePlaylist/guitar.svg"
import guitar1 from "../img/GeneratePlaylist/guitar1.svg"
import piano from "../img/GeneratePlaylist/piano.svg"

import sleeping from "../img/GeneratePlaylist/sleeping.png"
import dance from "../img/GeneratePlaylist/dance.png"

import triangle from "../img/ElementsBackground/triangle.svg"
import circle1 from "../img/ElementsBackground/circle1.svg"
import circle2 from "../img/ElementsBackground/circle2.svg"
import note from "../img/ElementsBackground/note1.svg"
import axios from "axios"; 


import '../css/CreatePlaylist.css'

import { Slider, Radio,Input, InputNumber } from 'antd';



import 'antd/dist/antd.css';



function CreatePlaylist() {

    const TempoMarks = {
        40: {
            style: {
              transform:'translateX(30px)'
            },
            label: <p>Low</p>,
          },
      
        250: {
            style: {
              transform:'translateX(30px)'
            },
            label: <p>High</p>,
          }
    }

    const PopularityMarks = {
        0: {
            style: {
              transform:'translateX(30px)'
            },
            label: <p>Low</p>,
          },
      
        100: {
            style: {
              transform:'translateX(30px)'
            },
            label: <p>High</p>,
          }
    }

    
    const verticalstyle = {
        height:150,
    };

   

    const verticaltrackstyletest = {
        width:35,
        backgroundColor:'#4CB5AA',
        borderRadius:'5px'
    };

    const horizontaltrackstyletest = {
        height:5,
        backgroundColor:'#4CB5AA',
        borderRadius:'5px'
    }

    const handlestyletest = {
        display:'none',
    };

    let artistname:string = '';
    let trackname:string = '';
    let numberOfSong:number = 10;
    let popularity:number = 50;
    let liveness:number=0.5;
    let tempo:number=100;
    let instrumentalness:number = 0.5;
    let energy:number=0.5;

    
    const getValues = ()=>{
        if(artistname !== null && trackname !== null){
            const route = 'https://mellow-dy.tinker.ovh/'
            alert('Check your spotify accout, your playlist has been created')
         axios({
                method: 'post',
                url: route + '?artist='+ artistname + '&track='+trackname+'&limit='+numberOfSong+'&popularity='+popularity+'&liveness='+liveness+'&tempo='+tempo+'&instrumentalness='+instrumentalness+'&energy='+energy,
                headers: { Authorization: `Bearer ${window.localStorage.getItem('FrontToken')}`}
              })
            }
        }
        

    const getArtistName=(e:any)=>{
        artistname = e.target.value;
        
    }

    const getTrackName=(e:any)=>{
        trackname=e.target.value;  
    }

   

    let getNumberOfSongs = (value:number)=>{
        numberOfSong = value;
        
    }

    let getPopularity = (value:number)=>{
        popularity = value
        
    }

    

    let getTempo = (value:number)=>{
        tempo=value;
        
    }

    let getInstrumentalness = (e:any)=>{
        instrumentalness =e.target.value;
        
    }

    let getLiveness = (value:number)=>{
        liveness=value
    }

    let getEnergy = (value:number)=>{
        energy=value
    }

    

    

    




    return(
        <div className="GPgrid">

            <div className='headergp'>
                <Link to='/' className='linklogo'>
                    <img src={logo} alt="Mellowdy's Logo"/>
                </Link>
                
                    <div className='menu'>
                    <Link to='/about' className='linkToAbout'>About us</Link>    
                    <img src={moon} alt="A moon icon"/>
                </div>
            </div>

            <form className='formgp'>

                        <div>
                            <h2>Hello you</h2>
                            <p>What do you feel like listening to today ?</p>
                        </div>




                        <div className='formdiv formartisttrack'>
                            <p>*You must choose one for each</p>
                            <div>
                                <div>
                                    <div>
                                        <img src={artist} />
                                        <div>
                                            <img src={artist1}/>
                                            <img src={artist2}/>
                                            <img src={artist1}/>
                                        </div>
                                    </div>
                                    <Input placeholder='Artist name...' required onChange={getArtistName}/>

                                </div>
                                <div>
                                    <div>
                                        <img src={track} />
                                        <div>
                                            <img src={track1} />
                                            <img src={track2} />
                                            <img src={track1} />
                                        </div>
                                    </div>
                                    <Input placeholder='Track name...' required onChange={getTrackName}/>
                                </div> 
                            </div>
                        </div>


                        <div className='formdiv songnumber'>
                            <p>How many songs would you like in your playlist?</p>
                            <Slider min={1} max={100} defaultValue={10} trackStyle={horizontaltrackstyletest} className='numberOfSong' onChange={getNumberOfSongs}/>
                        </div>

                       

                        <div className='formdiv formparameters'>
                            <div className='firstparam'>

                                <div className='livenessContainer'>

                                    <div>
                                        <h3>Liveness</h3>
                                        <div>
                                            <div>
                                                <span>studio</span>
                                                <span className='numberspan'>0</span>
                                            </div>
                                            <InputNumber min={0} max={1} step={0.1} defaultValue={0.5} size='small' onChange={getLiveness}/>
                                            <div>
                                                <span>concert</span>
                                                <span className='numberspan'>1</span>
                                            </div>
                                        </div>
                                        <p></p>
                                    </div>

                                </div>

                                <div className='slidersContainer'>

                                    <div className='verticalselectdiv'>
                                        <Slider onChange={getTempo} style={verticalstyle} vertical defaultValue={100} min={40} max={250} trackStyle={verticaltrackstyletest} handleStyle={handlestyletest} marks={TempoMarks} className='tempo' />
                                        <h3 className='tempotitle'>Tempo</h3>
                                    </div>

                                    <div className='verticalselectdiv'>
                                        <Slider style={verticalstyle} vertical min={0} max={100} defaultValue={10} trackStyle={verticaltrackstyletest} handleStyle={handlestyletest}  marks={PopularityMarks} className='popularity' onChange={getPopularity}/>
                                        <h3 className='popularitytitle'>Popularity</h3>
                                    </div>
                                
                                </div>
                               
                            </div>
                            <div className='secondparam'>
                                <div className='EnergyContainer'>
                                    <h3>Energy</h3>
                                    <div>
                                        <div>
                                            <img src={sleeping} alt="" />
                                            <div>
                                                <span>0</span>
                                                <InputNumber min={0} max={1} step={0.1} defaultValue={0.5} size='small' onChange={getEnergy}/>
                                                <span>1</span>
                                            </div>
                                            <img src={dance} alt="" />
                                        </div>
                                    </div>
                                </div>
                                <div className='RadioContainer'>

                                    <h3 className='instrumentalnesstitle'>Instrumentalness</h3>
                                    
                                        <Radio.Group defaultValue="0.5"  size='middle' className='instrumentalness' onChange={getInstrumentalness}>
                                            <Radio.Button value="0.25">
                                                <img src={mic} alt="" />
                                            </Radio.Button>
                                            <Radio.Button value="0.5">
                                                <img src={mic} alt="" />
                                                <img src={guitar} alt="" />     
                                            </Radio.Button>
                                            <Radio.Button value="0.75">
                                                <img src={mic} alt="" />
                                                <img src={guitar} alt="" />
                                                <img src={piano} alt="" />
                                            </Radio.Button>
                                            <Radio.Button value="1">
                                                <img src={guitar} alt="" />
                                                <img src={guitar1} alt="" />
                                                <img src={piano} alt="" />
                                            </Radio.Button>
                                        </Radio.Group>  
                                     

                                </div>
                            </div>
                        </div>


                        <div className='formdiv generatebutton'>
                            <input type="button" value="Generate playlist" onClick={getValues}/>
                        </div>

            </form>

            <div className='hoverablebgdiv hbgd10'>
                <img src={triangle} alt="A background element icon" />
            </div>
            <div className='hoverablebgdiv hbgd11'>
                <img src={triangle} alt="A background element icon" />
            </div>
            <div className='hoverablebgdiv hbgd12'>
                <img src={triangle} alt="A background element icon" />
            </div>
            <div className='hoverablebgdiv hbgd13'>
                <img src={note} alt="A background element icon" />
            </div>
            <div className='hoverablebgdiv hbgd15'>
                <img src={note} alt="A background element icon" />
            </div>
            <div className='hoverablebgdiv hbgd16'>
                <img src={note} alt="A background element icon" />
            </div>
            <div className='hoverablebgdiv hbgd17'>
                <img src={circle1} alt="A background element icon" />
            </div>
            <div className='hoverablebgdiv hbgd18'>
                <img src={circle1} alt="A background element icon" />
            </div>
            <div className='hoverablebgdiv hbgd14'>
                <img src={circle2} alt="A background element icon" />
            </div>
            <div className='hoverablebgdiv hbgd19'>
                <img src={triangle} alt="A background element icon" />
            </div>
            <div className='hoverablebgdiv hbgd20'>
                <img src={triangle} alt="A background element icon" />
            </div>
            <div className='hoverablebgdiv hbgd21'>
                <img src={triangle} alt="A background element icon" />
            </div>
            <div className='hoverablebgdiv hbgd22'>
                <img src={note} alt="A background element icon" />
            </div>
            <div className='hoverablebgdiv hbgd23'>
                <img src={note} alt="A background element icon" />
            </div>
            <div className='hoverablebgdiv hbgd24'>
                <img src={note} alt="A background element icon" />
            </div>
            <div className='hoverablebgdiv hbgd25'>
                <img src={circle1} alt="A background element icon" />
            </div>
            <div className='hoverablebgdiv hbgd26'>
                <img src={circle1} alt="A background element icon" />
            </div>
            <div className='hoverablebgdiv hbgd27'>
                <img src={circle2} alt="A background element icon" />
            </div>

        </div>
    );
}

export default CreatePlaylist;