
import React, { Component } from 'react'
import Filter from '../Searching/Filter';
import { Return } from './Return';
import Googlemap from './Googlemap'
import { GoogleApiWrapper } from 'google-maps-react';
import { Mapmore } from './Mapmore';




export class Map extends Component {

    render() {
        
        return (
            <div>
                
                <Googlemap />
                <div className="bg-light">
                    <Filter />
                </div>
                <div className="container mt-2" google={this.props.google}>
                    <Return />
                    
                </div>
                <Mapmore/>

            </div>
        )
    }
}

export default GoogleApiWrapper({
    apiKey: 'AIzaSyCEJKPTOJdwZ6UNCu9KANGap34JpCj-MoY'
  })(Map)
