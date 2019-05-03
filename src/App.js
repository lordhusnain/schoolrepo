import React, { Component } from 'react';
import Home from './Components/Home/Home';
//import {Provider} from './context'
//import { Newexample } from './Components/Searching/Newexample';



class App extends Component {
  render() {
    return (
     
      <div>
        <Home getData={this.props.getData}/>
      </div>
    );
  }
}

export default App;
