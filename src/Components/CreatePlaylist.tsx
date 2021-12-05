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

import { Slider, Radio } from 'antd';



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
        height:35,
        backgroundColor:'#4CB5AA',
        borderRadius:'5px'
    }

    const handlestyletest = {
        display:'none',
    };

    const energytitle = document.getElementsByClassName('energytitle')
    const [EnergyState, setEnergyState] = React.useState(true)
    const toggleEnergyState = ()=>{
        setEnergyState(!EnergyState);
        if(EnergyState===true){
            energytitle[0].style.color = '#45B5AA'
        }else{
            energytitle[0].style.color = '#BFBFBF'
        }
        
    }



    const livenesstitle = document.getElementsByClassName('livenesstitle')
    const [LivenessState, setLivenessState] = React.useState(true)
    const toggleLivenessState = ()=>{
        setLivenessState(!LivenessState);
        if(LivenessState===true){
            livenesstitle[0].style.color = '#45B5AA'
        }else{
            livenesstitle[0].style.color = '#BFBFBF'
        }
        
    }


    const instrumentalnesstitle = document.getElementsByClassName('instrumentalnesstitle')
    const [InstrumentalnessState, setInstrumentalnessState] = React.useState(true)
    const toggleInstrumentalnessState = ()=>{
        setInstrumentalnessState(!InstrumentalnessState);
        
        if(InstrumentalnessState===true){
            instrumentalnesstitle[0].style.color = '#45B5AA'
        }else{
            instrumentalnesstitle[0].style.color = '#BFBFBF'
        }
        
    }


    const tempotitle = document.getElementsByClassName('tempotitle')
    const [TempoState, setTempoState] = React.useState(true)
    const toggleTempoState = ()=>{
        setTempoState(!TempoState);
        
        if(TempoState===true){
            tempotitle[0].style.color = '#45B5AA'
        }else{
            tempotitle[0].style.color = '#BFBFBF'
        }
        
    }


    const popularitytitle = document.getElementsByClassName('popularitytitle')
    const [PopularityState, setPopularityState] = React.useState(true)
    const togglePopularityState = ()=>{
        setPopularityState(!PopularityState);
        
        if(PopularityState===true){
            popularitytitle[0].style.color = '#45B5AA'
        }else{
            popularitytitle[0].style.color = '#BFBFBF'
        }
        
    }

    const sossur = ()=>{
        
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

            <form action="" className='formgp'>

                        <div>
                            <h2>Hi <span>user,</span></h2>
                            <p>What do you feel like listening to today ?</p>
                        </div>




                        <div className='formdiv formartisttrack'>
                            <p>*You must choose at least one for each</p>
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
                                    <input type="text" name="artist" id="artist" placeholder='artist' required/>

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
                                    <input type="text" name="track" id="track" placeholder='track' required/>
                                </div> 
                            </div>
                        </div>


                        <div className='formdiv formparameters'>
                            <p>Click on the title of a parameter so that it is taken into account in your playlist creation</p>
                            <div>
                                <div className='verticalselectdiv'>
                                    <Slider style={verticalstyle} vertical defaultValue={10} min={0} max={10} trackStyle={verticaltrackstyletest} handleStyle={handlestyletest} marks={VerticalMarks}  className='energy' disabled={EnergyState}/>
                                    <h3 onClick={toggleEnergyState} className='energytitle'>Energy</h3>
                                </div>
                                <div className='verticalselectdiv'>
                                    <Slider style={verticalstyle} vertical defaultValue={10} min={0} max={10} trackStyle={verticaltrackstyletest} handleStyle={handlestyletest} marks={VerticalMarks}  className='liveness' disabled={LivenessState}/>
                                    <h3 onClick={toggleLivenessState} className='livenesstitle'>Liveness</h3>
                                </div>

                                <div className='horizontalselectdiv'>
                                    
                                    
                                     
                                        <Radio.Group defaultValue="0.66"  size='middle' className='instrumentalness' disabled={InstrumentalnessState}>
                                            <Radio.Button value="0">
                                                <img src={mic} alt="" />
                                            </Radio.Button>
                                            <Radio.Button value="0.33">
                                                <img src={mic} alt="" />
                                                <img src={guitar} alt="" />     
                                            </Radio.Button>
                                            <Radio.Button value="0.66">
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

                                        <h3 onClick={toggleInstrumentalnessState} className='instrumentalnesstitle'>Instrumentalness</h3>
                                    
                                    
                                   
                                    
                                </div>

                                <div className='verticalselectdiv'>
                                    <Slider style={verticalstyle} vertical defaultValue={10} min={0} max={10} trackStyle={verticaltrackstyletest} handleStyle={handlestyletest} marks={VerticalMarks} className='tempo' disabled={TempoState} />
                                    <h3 onClick={toggleTempoState} className='tempotitle'>Tempo</h3>
                                </div>

                                <div className='verticalselectdiv'>
                                    <Slider style={verticalstyle} vertical min={0} max={10} defaultValue={10} trackStyle={verticaltrackstyletest} handleStyle={handlestyletest} tooltipVisible={false} marks={VerticalMarks} className='popularity'disabled={PopularityState} />
                                    <h3 onClick={togglePopularityState} className='popularitytitle'>Popularity</h3>
                                </div>
                                
                                
                                

                            </div>
                        </div>


                        <div className='formdiv playlistnamediv'>
                            <p>What name do you want to give to it  ?</p>
                            <input type="text" name="playlistname" id="playlistname" placeholder="Your playlist's name ..." required/>
                        </div>

                        <div className='formdiv generatebutton'>
                            <input type="submit" value="Generate playlist" onSubmit={sossur}/>
                        </div>

            </form>

        </div>
    );
}

export default CreatePlaylist;