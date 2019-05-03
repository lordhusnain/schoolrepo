import React, { Component } from 'react';
const headerstyle = {
  fontSize: '20px',
  fontFamily: 'Georgia, serif'
}

export class Whatus extends Component {
  render() {
    return (
      <div>
        <div className="row mt-5">
          <div className="col-sm-6">
            <h5 style={headerstyle} className="text-info">SchoolsDiary global school search</h5>
            <p>our search engine allows users to compare school prices in just a few clicks
              for 68,000+ schools across the country pakistan. Get information for a school and you can find the right school for your kids without any problem quickly and easily.
          </p>
            <h5 style={headerstyle} className="text-info">School reviews/rating help you find your ideal school</h5>
            <p>Over 68000+ school's ratings and more than 19 million images allow you to find out your right school for your kids at right place.
          </p>
          </div>

          <div className="col-sm-6">
            <h5 style={headerstyle} className="text-info">Find cheap school on SchoolsDiary</h5>
            <p>With SchoolsDiary you can easily find your ideal school and compare prices with other schools.Simply just enter your place_name or school name and rest of the work will do our search engine.
          </p>
          </div>
        </div>
      </div>
    )
  }
}

export default Whatus
