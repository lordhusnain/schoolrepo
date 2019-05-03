import React, { Component } from 'react'

export class Dataadress extends Component {
    render() {
        return (
            <div>
                <div className="col-sm-12">
                    <i className="fas fa-map-marker-alt float-left "></i>
                    <p className="float-left ml-1" style={{ fontSize: "10px" }}> {this.props.adr}</p>
                </div>
            </div>
        )
    }
}

export default Dataadress
