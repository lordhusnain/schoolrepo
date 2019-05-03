import React, { Component } from 'react'

export class Datawebsite extends Component {
    render() {
        return (
            <div>
                <div className="col-sm-12">
                    <i className="fab fa-internet-explorer float-left "></i>
                    <a target="blank" href={this.props.web} className="float-left ml-1 text-dark" style={{ fontSize: "10px" }}> {this.props.web}</a>
                </div>
            </div>
        )
    }
}

export default Datawebsite
