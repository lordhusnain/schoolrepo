/*global google*/
import React, { Component } from 'react';
import { Map, GoogleApiWrapper } from 'google-maps-react';
//import { Consumer } from '../../context';
//import marker3 from './home-sign3.png'
//import {Consumer} from './Context'



export class Googlemap extends Component {
constructor(props) {
  super(props)

  this.state = {
    myLocation: {
        lat: 31.455456,
        lng: 74.236055,
    },
        showingInfowWindow: false,
        activeMarker: {},
        selectedPlace: "default",
        list:{
            name:"undefined",
            rating:"undefined"
        }
  }
}


    componentWillMount() {
        if (navigator && navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(pos => {
                const coords = pos.coords;
                        this.setState({
                            myLocation: {
                                lat: coords.latitude,
                                lng: coords.longitude
                            }
                        });
                        console.log(coords);
                    }
                    
                )
                /**/
                
                
                }
    }

    fetchPlaces = (mapProps, map) => {
        //const { google } = mapProps;
        //const google = window.google;
        const pyrmont = new window.google.maps.LatLng(this.state.myLocation.lat,this.state.myLocation.lng);
        map = new window.google.maps.Map((map), {
            center: pyrmont,
            zoom: 16
        });
        const request = {
            location: pyrmont,
            radius: 500,
            type: ['school']
        };
        const service = new window.google.maps.places.PlacesService(map);
        service.nearbySearch(request, (results, status) => {
            if (status === google.maps.places.PlacesServiceStatus.OK) {
                for (let i = 0; i < results.length; i++) {
                    const request = {
                        placeId: results[i].place_id
                    };
                    //console.log(this.placeId)
                    const places = new window.google.maps.places.PlacesService(map);
                    places.getDetails(request, (results, status) => {
                        if (status === window.google.maps.places.PlacesServiceStatus.OK) {
                            this.setState({ list: results })
                            console.log(this.state.list)
                        }
                    });
                }
            }

        });
    }

    onMarkerClick = (marker) => {
        this.setState({
            activeMarker: marker,
            showingInfoWindow: true,
            selectedPlace: "Current Location"
        });
    }

    render() {
        const mapStyle = {
            width: '100%',
            height: '100%',
            zIndex: ""
        }
        return (
            
            <div className="map-responsive">
                <div>
                    <Map
                        google={this.props.google}
                        zoom={14}
                        style={mapStyle}
                        //initialCenter={{ lat: this.state.myLocation.lat, lng: this.state.myLocation.lng }}
                        onReady={this.fetchPlaces}
                        zoomControlOptions={true}
                    >


                    </Map>

                </div>
                
            </div>

        )
    }
}

export default GoogleApiWrapper({
    apiKey: 'AIzaSyCEJKPTOJdwZ6UNCu9KANGap34JpCj-MoY'
})(Googlemap)
