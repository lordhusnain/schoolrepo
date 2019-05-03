import React, { Component } from 'react';

export class Note extends Component {
    render() {
        return (
            <div>
                <div className="row mt-2">
                    <div className="col-sm-2"></div>
                    <div className="col-sm-8">
                        <i className="fas fa-info-circle fa-2x float-left"></i>
                        <p className="text-info font-weight-light pl-5">For better results
                            <b> search</b> with <kbd>schools near place_name</kbd> or with <kbd>school name</kbd>. If you are unable to find your required results check your spelling or place name.
                         </p>
                    </div>
                </div>
                <div className="col-sm-2"></div>

            </div>
        )
    }
}

export default Note
