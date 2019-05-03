import React, { Component } from 'react'

export class Datafee extends Component {
    render() {
        return (
            <div>
                <div className="col-sm-12">
                    <label className="float-left">Fee:</label>
                    <b className="float-left ml-1"> {this.props.fee}</b>
                    <i className="fas fa-rupee-sign ml-1 mt-1 fa-1x float-left "></i>
                </div>
            </div>
        )
    }
}

export default Datafee
