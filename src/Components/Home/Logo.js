import React, { Component } from 'react'
import school from "./school.png";
const logostyle = {
  width: '100%',
  height: '180px',
  marginTop: '100px'
}
const slogan = {
  float: 'right'
}
export class Logo extends Component {
  render() {
    return (
      <div>
        <div className="row mt-5">
          <div className="col-sm-2"></div>
          <div className="col-sm-8">
            <img style={logostyle} alt="logo" src={school}></img>
          </div>
          <div className="col-sm-2"></div>
          <br />
        </div>
        <div className="row">
          <div className="col-sm-2"></div>
          <div className="col-sm-8">
            <span style={slogan}><h5 className="text-success">Find your ideal <em>school</em> at best <em>location</em></h5></span>
          </div>
          <div className="col-sm-2"></div>
        </div><br />
      </div>
    )
  }
}

export default Logo;
