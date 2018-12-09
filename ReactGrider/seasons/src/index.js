import React from 'react';
import ReactDOM from 'react-dom';
import Loader from './Loader';
import SeasonDisplay from './SeasonDisplay';


class App extends React.Component 
{
  state = {lat: null, errorMessage: ''};

  componentDidMount()
  {  
    window.navigator.geolocation.getCurrentPosition(
      position => this.setState({ lat: position.coords.latitude }),
      err => this.setState({ errorMessage: err.message })
    );
  }

  componentDidUpdate()
  {
    
  }

  render()
  {
    if (this.state.errorMessage && !this.state.lat)
      {
        return <div>Error: {this.state.errorMessage} </div>
      }
    
    if (!this.state.errorMessage && this.state.lat)
      {
        return <SeasonDisplay lat={this.state.lat}/>
      }
    
    return <Loader message="Please allow location detection."/>
  }

}

ReactDOM.render(<App/>, document.querySelector('#root'));