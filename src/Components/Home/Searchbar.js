import React, { Component } from 'react';
import { GoogleApiWrapper } from 'google-maps-react';
import { Link } from 'react-router-dom';
const style1 = {
    height: '50px',
    borderStyle: 'outset',
    borderSize: '10px'
}
const style2 = {
    height: '50px'
}
export class Searchbar extends Component {
    constructor(props) {
        super(props)

        this.state = {
            searchTerm: "",
            places: []

        }

    }

    componentDidMount() {
        const google = window.google;
        const input = this.refs.search;
        this.searchBox = new google.maps.places.SearchBox(input);
        this.searchBox.addListener('places_changed', () => {
            const places = this.searchBox.getPlaces()
            if (places.length === 0) {
                return;
            }
            this.setState({ searchTerm: this.refs.search, places: places })
            this.props.getData(this.state.places)

        });


    }

    render() {
        return (
            <div>
                <form role="search">
                    <div className="row">
                        <div className="col-sm-2"></div>
                        <div className="col-sm-8">
                            
                                <div className="input-group">
                                    <input style={style1} type="text" ref="search" className="form-control" placeholder="Search" />
                                    <Link to={
                                {
                                    pathname: "/search",
                                    state: { googleplaces: "zain" }
                                }
                            } >
                                    <button style={style2} className="btn btn-success">
                                        <i className="fas fa-search mr-1"></i>
                                        <b>Search</b>
                                    </button>
                                    </Link>
                                </div>
                            
                        </div>
                        <div className="col-sm-2">
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}

export default GoogleApiWrapper({
    apiKey: 'AIzaSyCEJKPTOJdwZ6UNCu9KANGap34JpCj-MoY'
})(Searchbar)
