import React, { Component } from 'react'
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import school from "./school.png";


export class Slider extends Component {
  render() {
    return (
      <div className="row mt-5">
        <div className="col-sm-12">
          <h5 className="text-info mt-5"><span>Don't know where to go? Let us help you</span></h5>
          <hr className="bg-info" />
          <Carousel
            showThumbs={false}
            infiniteLoop={true}
            autoPlay={true}
            stopOnHover={true}
            
          >
            <div>
              <img alt="image1" src={school} />
            </div>
            <div>
              <img alt="image1" src={school} />
            </div>
          </Carousel><br />
        </div>
      </div>

    )
  }
}

export default Slider;
