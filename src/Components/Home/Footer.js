import React, { Component } from 'react'


export class Footer extends Component {
    render() {
        return (

            <div className="row" style={{ backgroundColor: "#293339" }}>
                <div className="col-sm-12">
                    <div className="row mt-5">
                        <div className="col-sm-6">
                            <p className="float-right text-light">Want to receive daily updates? Subscribe to our newsletter! </p>
                        </div>
                        <div className="col-sm-6">
                            <div className="input-group h-100">
                                <input type="text" placeholder=" Email address" className="w-50 bg-light border border-0 float-left" />
                                <button className="btn btn-dark border border-0"><b className="text-white ">Subscribe</b></button>
                            </div>
                        </div>
                    </div>
                    <hr className="bg-white mt-4 w-75 mx-auto pr-5" />
                    <div className="row">
                        <div className="col-sm-6">
                            <p className="text-white pr-4 float-right"> <strong>SchoolsDiary</strong>, University of SouthAsia AQ Khan Campus.</p>
                        </div>
                        <div className="col-sm-6"></div>
                    </div>
                    <div className="row">
                        <div className="col-sm-6"></div>
                        <div className="col-sm-6">
                            <h5 className="text-light">Follow us:</h5>
                            <a href="/" ><i className="fab fa-facebook-square fa-2x float-left" style={{ color: "white" }}></i></a>
                            <a href="/" ><i className="fab fa-twitter-square fa-2x float-left ml-3" style={{ color: "white" }}></i></a>
                            <a href="/" ><i className="fab fa-google-plus-square fa-2x float-left ml-3" style={{ color: "white" }}></i></a>
                            <a href="/" ><i className="fab fa-instagram fa-2x float-left ml-3" style={{ color: "white" }}></i></a>
                        </div>
                    </div>
                    <div className="row mt-1" style={{backgroundColor:"#37454d", height:"80px"}}>
                        <div className="col-sm-4"></div>
                        <div className="col-sm-4">
                        <b className="text-light ml-5" style={{fontSize:"30px"}}>SchoolsDiary</b><br/>
                        <small className="text-light ml-1">Copyright 2019 SchoolsDiary | All rights reserved. </small>
                        </div>
                        <div className="col-sm-4"></div>
                    </div>
                </div>
            </div>

        )
    }
}

export default Footer
