import React, { Component } from 'react'
import {Link} from 'react-router-dom';

export class Mapbutton extends Component {
    render() {
        return (
            <div className="row mt-1">
                <div className="col-sm-2"></div>
                <div className="col-sm-8">
                    <p className="text-info float-left mt-2" style={{ fontFamily: "Sans-Serif" }}>Results</p>
                    <Link to="/Map">
                    <button className="btn btn-light float-right ml-4 mt-1" style={{ width: "130px" }}>
                    <i className="fas fa-map-marked-alt fa-sm pr-2"></i>
                    View Map</button>
                    </Link>
                </div>
                <div className="col-sm-2"></div>
            </div>
        )
    }
}

export default Mapbutton
