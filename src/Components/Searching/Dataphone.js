import React, { Component } from 'react'

export class Dataphone extends Component {
    render() {
        return (
            <div>
                <div className="col-sm-12">
                    <i className="fas fa-phone-square float-left "></i>
                    <p className="float-left ml-1" style={{ fontSize: "10px" }}> {this.props.phn}</p>
                </div>
            </div>
        )
    }
}

export default Dataphone
