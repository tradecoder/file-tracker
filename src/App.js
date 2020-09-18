import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Navbar from './components/navbar.component';
import AddFile from "./components/addfile.component";
import TrackFile from "./components/trackfile.component";



function App() {
  return (
    <Router>
      <Navbar />
      <Route path="/file-tracker/add-file/" component={AddFile}/>
      <Route path="/file-tracker/track-file/" exact component={TrackFile}/>
    </Router>
  );
}

export default App;
