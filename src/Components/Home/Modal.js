import React, { Component } from 'react'

export class Modal extends Component {
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-sm-12">
                        <input type="email" className="border-0 w-100" placeholder="Email" />
                    </div>
                </div>
                <div className="row mt-1">
                    <div className="col-sm-12">
                        <input type="password" className="border-0 w-100" placeholder="Password" />
                    </div>
                </div>
                <div className="row mt-1">
                    <div className="col-sm-4">

                    </div>
                    
                    <div className="col-sm-8">
                        <button className="btn btn-primary float-right">
                            <i className="fas fa-graduation-cap mr-1"></i>
                            School Owner</button>
                        <button className="btn btn-primary float-right mr-1">
                            <i className="fas fa-user mr-1"></i>
                            User</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default Modal
