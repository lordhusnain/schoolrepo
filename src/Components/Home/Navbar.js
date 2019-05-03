import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { Modal } from './Modal';



const navstyle = {
    color: 'black',
    textDecoration: 'none',

}

export class Navbar extends Component {
    render() {
        return (
            <div>

                <div className="row">
                    <div className="col-sm-2"></div>
                    <div className="col-sm-8 mt-1">
                        <span className="float-right">
                            <Link to="/" style={navstyle}>
                                <i className="fas fa-language mr-1"></i>
                                En</Link>
                            <Link to="/Account" style={navstyle}>
                                <i className="fas fa-sign-in-alt pl-3 mr-1"></i>
                                Login</Link>
                            <Link data-toggle="modal" data-target="#exampleModal" to="/" style={navstyle}>
                                <i className="fas fa-user-plus pl-3 mr-1"></i>
                                Register</Link>
                            <div className="modal fade" id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                <div className="modal-dialog" role="document">
                                    <div className="modal-content">
                                        <div className="modal-header">
                                            <h5 className="modal-title" id="exampleModalLabel">Registration</h5>
                                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                                <span aria-hidden="true">&times;</span>
                                            </button>
                                        </div>
                                        <div className="modal-body">
                                            <Modal />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </span>
                    </div>
                    <div className="col-sm-2"></div>
                </div>
            </div>

        )
    }
}

export default Navbar;
