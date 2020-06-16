import React from 'react';
import MapContainer from "../components/MapContainer";
import '../styles/containers/App.styl';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      show: true
    }
    this.toggleShow = this.toggleShow.bind(this);
  }

  toggleShow() {
    this.setState({
      show: false
    })
    {console.log(this.state)}
  }

  render() {
    const { show } = this.state;
    return (
      <div className="App">
        <button type="button" onClick={this.toggleShow}>Hide Map</button>
        {show ? <MapContainer /> : 'Map Hidden'}
      </div>
    )
  }
};

export default App;
