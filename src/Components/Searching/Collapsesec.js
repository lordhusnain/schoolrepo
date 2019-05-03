import React, { Component } from 'react'
export class Collapsesec extends Component {
    render() {
        return (
            <div className="row mt-1">
                <div className="col-sm-12 bg-light">
                    <ul className="nav nav-tabs nav-justified">
                        <li className="nav-item">
                        <a className="nav-link" href="/">Map</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/">Reviews</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/">Photos</a>
                        </li>
                    </ul>
                </div>
            </div>
        )
    }
}

export default Collapsesec
