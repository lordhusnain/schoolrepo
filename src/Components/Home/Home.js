import React, { Component } from 'react'
import {withRouter} from 'react-router-dom'
import Logo from "./Logo";
import Navbar from "./Navbar";
import Searchbar from "./Searchbar";
import Slider from "./Slider";
import Note from "./Note";
import Whatus from './Whatus';
import Footer from './Footer';



class Home extends Component {
  state = {
    searchTerm: ''
  }
  
  render() {

    return (
      
        <div className="container">
          <Navbar />
          <Logo />
          <Searchbar getData={this.props.getData} />
          <Note />
          <Slider />
          <Whatus />
          <Footer />
        </div>
        
      

    );
  }
}

export default withRouter(Home)
