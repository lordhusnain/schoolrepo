import React, { Component } from 'react'
import { Rangebar } from './Rangebar';
import { Ratingfilter } from './Ratingfilter';
import { Guestrat } from './Guestrat';
import { Morefilter } from './Morefilter';



export class Feesfilter extends Component {


    render() {
        return (
            <div>
                <div className="row">
                    <div className="col-sm-2"></div>
                    <div className="col-sm-8 mb-1">
                        <Rangebar />
                        <Ratingfilter />
                        <Guestrat/>
                        <Morefilter/>
                    </div>
                    <div className="col-sm-2"></div>
                </div>
            </div>
        )
    }
}

export default Feesfilter
