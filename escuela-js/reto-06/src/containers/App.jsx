import React from 'react';
import MapContainer from "../components/MapContainer";
import '../styles/containers/App.styl';

const App = () => {
  return (
    <div className="App">
      <button type="button">Hide Map</button>
      <MapContainer />
    </div>
  )
};

export default App;
