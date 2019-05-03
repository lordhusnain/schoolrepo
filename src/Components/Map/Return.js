
import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { GoogleApiWrapper } from 'google-maps-react';

export class Return extends Component { 

    


    render() {
        return (
            <div className="row mb-1">
                <div className="col-sm-2"></div>
                <div className="col-sm-8">
                    <Link to="/Search">
                        <button className="btn btn-dark float-left" >
                            <i className="fas fa-arrow-left fa-sm mr-1"></i>
                            Return
                        </button>
                    </Link>
                    <button className="btn btn-dark float-right" onClick={this.fetchPlaces} >
                        <i className="fas fa-compass fa-sm mr-1"></i>
                        Find Near Schools
                    </button>
                </div>
                <div className="col-sm-2"></div>
            </div>
        )
    }
}

export default GoogleApiWrapper({
    apiKey: 'AIzaSyCEJKPTOJdwZ6UNCu9KANGap34JpCj-MoY'
  })(Return)
