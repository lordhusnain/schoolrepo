import React, { Component } from 'react'

export class Dataimage extends Component {
    render() {
        return (
            <div>
                <div className="row">
                    <div className="col-sm-12">
                        <img src={this.props.img1} className="rounded mt-1" style={{ width: "250px", height: "200px" }} alt="school_place" />
                    </div>
                </div>
            </div>
        )
    }
}

export default Dataimage
