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

import '../css/CreatePlaylist.css'

import { Slider, Radio,InputNumber,Input } from 'antd';



import 'antd/dist/antd.css';



function CreatePlaylist() {

    const VerticalMarks = {
        0: {
            style: {
              transform:'translateX(15px)'
            },
            label: <p>Low</p>,
          },
      
        10: {
            style: {
              transform:'translateX(15px)'
            },
            label: <p>High</p>,
          }
    }

    const HorizontalsMarks = {
        0: {
            style: {
              transform:'translateY(15px)'
            },
            label: <p>Low</p>,
          },
        
        10: {
            style: {
              transform:'translateY(15px)'
            },
            label: <p>High</p>,
          }
    }

    const verticalstyle = {
        height:150,
    };

    const horizontalstyle = {
        width:250,
    }

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
       
    }

    const getArtistName=(e:any)=>{
        artistname = e.target.value;
        console.log(artistname)
    }

    const getTrackName=(e:any)=>{
        trackname=e.target.value;
        console.log(trackname)
    }

   

    let getNumberOfSongs = (value:number)=>{
        numberOfSong = value;
        console.log(numberOfSong)
    }

    let getPopularity = (value:number)=>{
        popularity = value
        console.log(popularity)
    }

    let getLiveness = (value:number)=>{
        liveness=value;
        console.log(liveness)
    }

    let getTempo = (value:number)=>{
        tempo=value;
        console.log(tempo)
    }

    let getInstrumentalness = (e:any)=>{
        instrumentalness =e.target.value;
        console.log(instrumentalness)
    }

    let getEnergy = (value:number) =>{
        energy=value;
        console.log(energy)
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
                            <h2>Hi user,</h2>
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
                            <div>
                                <div className='verticalselectdiv'>
                                    <Slider style={verticalstyle} vertical defaultValue={0.5} min={0} max={1} step={0.1} trackStyle={verticaltrackstyletest} handleStyle={handlestyletest} marks={VerticalMarks} onChange={getEnergy} className='energy' />
                                    <h3 className='energytitle'>Energy</h3>
                                </div>
                                <div className='verticalselectdiv'>
                                    <Slider onChange={getLiveness} style={verticalstyle} step={0.1} vertical defaultValue={0.5} min={0} max={1} trackStyle={verticaltrackstyletest} handleStyle={handlestyletest} marks={VerticalMarks}  className='liveness' />
                                    <h3 className='livenesstitle'>Liveness</h3>
                                </div>

                                <div className='horizontalselectdiv'>
                                    
                                    
                                     
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

                                        <h3 className='instrumentalnesstitle'>Instrumentalness</h3>
                                    
                                    
                                   
                                    
                                </div>

                                <div className='verticalselectdiv'>
                                    <Slider onChange={getTempo} style={verticalstyle} vertical defaultValue={100} min={40} max={250} trackStyle={verticaltrackstyletest} handleStyle={handlestyletest} marks={VerticalMarks} className='tempo' />
                                    <h3 className='tempotitle'>Tempo</h3>
                                </div>

                                <div className='verticalselectdiv'>
                                    <Slider style={verticalstyle} vertical min={0} max={100} defaultValue={10} trackStyle={verticaltrackstyletest} handleStyle={handlestyletest} tooltipVisible={false} marks={VerticalMarks} className='popularity' onChange={getPopularity}/>
                                    <h3 className='popularitytitle'>Popularity</h3>
                                </div>
                                
                                
                                

                            </div>
                        </div>


                        <div className='formdiv generatebutton'>
                            <input type="submit" value="Generate playlist" onClick={getValues}/>
                        </div>

            </form>

        </div>
    );
}

export default CreatePlaylist;