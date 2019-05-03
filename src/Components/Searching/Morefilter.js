import React, { Component } from 'react'

export class Morefilter extends Component {
    render() {
        return (
            <div className="float-left">
                <span className="ml-3">
                    <label className="text-info">School near me</label>
                </span><br />
                <div className="btn-group"  >
                    <button className="btn btn-light dropdown-toggle border-left border-left" style={{ width: "126px" }} type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Distance
                    </button>
                    <div className="dropdown-menu bg-light" style={{ width: "200px" }}>
                        <a className="dropdown-item" href="/">
                            <span className="float-left" style={{ fontFamily: "Tahoma, Geneva, sans-serif", fontSize: "13px" }}>0.5/1<b> KM</b></span>
                            <span className="float-right">
                                <span style={{color:"black"}}>
                                    <i className="fas fa-walking fa-1x"></i>

                                </span>

                            </span>
                        </a>
                        <a className="dropdown-item" href="/">
                            <span className="float-left" style={{ fontFamily: "Tahoma, Geneva, sans-serif", fontSize: "13px" }}>2<b> KM</b></span>
                            <span className="float-right">
                                <span style={{color:"blue"}}>
                                    <i className="fas fa-bicycle fa-1x ml-1"></i>
                                    
                                </span>
                            </span>
                        </a>
                        <a className="dropdown-item" href="/">
                            <span className="float-left" style={{ fontFamily: "Tahoma, Geneva, sans-serif", fontSize: "13px" }}>5<b> KM</b></span>
                            <span className="float-right">
                                <span style={{color:"red"}}>
                                <i className="fas fa-motorcycle fa-1x"></i> 
                                </span>
                            </span>
                        </a>
                        <a className="dropdown-item" href="/">
                            <span className="float-left" style={{ fontFamily: "Tahoma, Geneva, sans-serif", fontSize: "13px" }}>10+<b> KM</b></span>
                            <span className="float-right">
                                <span style={{color:"yellow"}}>
                                    <i className="fas fa-car fa-1x"></i>
                                    <i className="fas fa-bus-alt fa-1x ml-1"></i>
                                </span>
                            </span>
                        </a>
                    </div>
                </div>
            </div>

        )
    }
}

export default Morefilter
