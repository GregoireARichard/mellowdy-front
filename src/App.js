import React from 'react';
import Homepage from './Components/Homepage.tsx';
import AboutUs from './Components/AboutUs.tsx';
import CreatePlaylist from './Components/CreatePlaylist';
import FrontToken from './Components/frontToken';
import {BrowserRouter as Router, Route, Link, Routes, Redirect} from  'react-router-dom';



function App(){
  return(
    
      <div>
        <Router>
          
            <Routes>
              <Route path="/" element={<Homepage />}/>
              <Route path="/about" element={<AboutUs />}/>
              <Route path='/create-playlist' element={<CreatePlaylist/>}/>
              <Route path="/frontToken" element={<FrontToken />}/>
            </Routes>
          
        </Router>
      </div>
    
  );
}
export default App;