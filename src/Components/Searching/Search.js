import React, { Component } from 'react'
import {withRouter} from 'react-router-dom'
import { Filter } from './Filter';
import { Mapbutton } from './Mapbutton';
import { Maindiv } from './Maindiv';
import { Footer } from '../Home/Footer';


export class Search extends Component {
    state = {
        searchTerm: '',
        data: null
    }

   componentDidMount(){
   this.setState({ data: this.props.places})

   
   } 
    
    render() {
        //const {mysearch}= this.props.places
        console.log("data"+ this.props.places)
        return (
            <div>
                <div className="bg-light">
                    <Filter />
                </div>
                <div className="container">
                    <Mapbutton />
                    <Maindiv />
                    <Footer />
                </div>
            </div>
        )
    }
}

export default withRouter(Search);

