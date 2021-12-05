import React from 'react';
import Homepage from './Components/Homepage.tsx';
import AboutUs from './Components/AboutUs.tsx';
import CreatePlaylist from './Components/CreatePlaylist';
import {BrowserRouter as Router, Route, Routes} from  'react-router-dom';


function App(){
  return(
    
      <div>
        <Router>
          
            <Routes>
              <Route path="/" element={<Homepage />}/>
              <Route path="/about" element={<AboutUs />}/>
              <Route path='/create-playlist' element={<CreatePlaylist/>}/>
            </Routes>
          
        </Router>
      </div>
    
  );
}
export default App;