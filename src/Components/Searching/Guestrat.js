import React, { Component } from 'react'

export class Guestrat extends Component {
    render() {
        return (
            <div className="float-left ">
                <span >
                    <label className="text-info">Guest</label>
                </span><br />
                <div className="btn-group">
                    <button className="btn btn-light dropdown-toggle border-left" style={{ width: "110px" }} type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Rating
                    </button>
                    <div className="dropdown-menu bg-light" style={{ width: "200px" }}>
                        <a className="dropdown-item" href="/">
                            <p className="float-right" style={{fontFamily:"Tahoma, Geneva, sans-serif", fontSize:"15px"}}>Excellent</p>
                            <span className="badge badge-success">8.5+</span>
                        </a>
                        <a className="dropdown-item" href="/">
                            <p className="float-right" style={{fontFamily:"Tahoma, Geneva, sans-serif", fontSize:"15px"}}>Very good</p>
                            <span className="badge badge-success" >7.5+</span>
                        </a>
                        <a className="dropdown-item" href="/">
                            <p className="float-right" style={{fontFamily:"Tahoma, Geneva, sans-serif", fontSize:"15px"}}>Good</p>
                            <span className="badge badge-warning">7.0+</span>
                        </a>
                        <a className="dropdown-item" href="/">
                            <p className="float-right" style={{fontFamily:"Tahoma, Geneva, sans-serif", fontSize:"15px"}}>Okay</p>
                            <span className="badge badge-danger">0</span>
                        </a>
                    </div>
                </div>
            </div>

        )
    }
}

export default Guestrat
