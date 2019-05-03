import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { Modal } from '../Home/Modal';
import school from './school.png'


const navstyle = {
    color: 'black',
    textDecoration: 'none',

}


export class Searchnavbar extends Component {
    render() {
        return (
            <div className="">
                <div className="row">
                    <div className="col-sm-2"></div>
                    <div className="col-sm-8 mt-1">
                        <span>
                            <img src={school} className="float-left" style={{width:"100px",height:"30px"}} alt="Cinque Terre" />
                        </span>
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

export default Searchnavbar
