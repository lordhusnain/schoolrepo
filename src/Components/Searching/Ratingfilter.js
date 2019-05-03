import React, { Component } from 'react'



export class Ratingfilter extends Component {
    render() {
        return (

            <div className="float-left">
                <span className="ml-3">
                    <label className="text-info">School</label>
                </span><br />
                <div className="btn-group ml-3"  >
                    <button className="btn btn-light dropdown-toggle border-left" style={{width:"110px"}} type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Rating
                    </button>
                    <div className="dropdown-menu bg-light" style={{width:"200px"}}>
                        <a className="dropdown-item" href="/">
                            <span className="float-left" style={{fontFamily:"Tahoma, Geneva, sans-serif", fontSize:"13px"}}>5 Star</span>
                            <span className="float-right">
                                <span className="fa fa-star fa-sm" style={{color:"orange"}}></span>
                                <span className="fa fa-star fa-sm" style={{color:"orange"}}></span>
                                <span className="fa fa-star fa-sm" style={{color:"orange"}}></span>
                                <span className="fa fa-star fa-sm" style={{color:"orange"}}></span>
                                <span className="fa fa-star fa-sm" style={{color:"orange"}}></span>
                            </span>
                        </a>
                        <a className="dropdown-item" href="/">
                        <span className="float-left" style={{fontFamily:"Tahoma, Geneva, sans-serif", fontSize:"13px"}}>4 Star</span>
                            <span className="float-right">
                                <span className="fa fa-star fa-sm" style={{color:"orange"}}></span>
                                <span className="fa fa-star fa-sm" style={{color:"orange"}}></span>
                                <span className="fa fa-star fa-sm" style={{color:"orange"}}></span>
                                <span className="fa fa-star fa-sm" style={{color:"orange"}}></span>
                            </span>
                        </a>
                        <a className="dropdown-item" href="/">
                        <span className="float-left" style={{fontFamily:"Tahoma, Geneva, sans-serif", fontSize:"13px"}}>3 Star</span>
                            <span className="float-right">
                                <span className="fa fa-star fa-sm" style={{color:"orange"}}></span>
                                <span className="fa fa-star fa-sm" style={{color:"orange"}}></span>
                                <span className="fa fa-star fa-sm" style={{color:"orange"}}></span>
                            </span>
                        </a>
                        <a className="dropdown-item" href="/">
                        <span className="float-left" style={{fontFamily:"Tahoma, Geneva, sans-serif", fontSize:"13px"}}>2 Star</span>
                            <span className="float-right">
                                <span className="fa fa-star fa-sm" style={{color:"orange"}}></span>
                                <span className="fa fa-star fa-sm" style={{color:"orange"}}></span>
                            </span>
                        </a>
                        <a className="dropdown-item" href="/">
                        <span className="float-left" style={{fontFamily:"Tahoma, Geneva, sans-serif", fontSize:"13px"}}>1 Star</span>
                            <span className="float-right">
                                <span className="fa fa-star fa-sm" style={{color:"orange"}}></span>
                            </span>
                        </a>
                    </div>
                </div>
            </div>


        )
    }
}

export default Ratingfilter
