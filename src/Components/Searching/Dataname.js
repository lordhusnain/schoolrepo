import React, { Component } from 'react'

export class Dataname extends Component {
    render() {
        return (
            <div>
                <div className="row">
                    <div className="col-sm-12">
                        <b> {this.props.name}</b>
                    </div>
                </div>
            </div>
        )
    }
}

export default Dataname
