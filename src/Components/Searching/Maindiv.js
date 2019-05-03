import React, { Component } from 'react'
//import myimage from "./images2.jpg"
import "react-responsive-carousel/lib/styles/carousel.min.css";
//import { Dataimage } from './Dataimage';
//import { Dataname } from './Dataname';
//import { Dataadress } from './Dataadress';
//import { Dataphone } from './Dataphone';
//import { Datawebsite } from './Datawebsite';
//import { Datafee } from './Datafee';
//import { Collapsesec } from './Collapsesec';
export class Maindiv extends Component {
componentWillUpdate(){
    //console.log(this.props)
}

    render() {
        
        return (
            <div>
                {/*{mySchool.map(item => (
                    <div key={item.id}>
                        <div className="row mt-1 mb-3" style={{ backgroundColor: "#ebeced" }}>
                            <div className="col-sm-12">
                                <div className="row">
                                    <div className="col-sm-3 border-right">
                                        <Dataimage
                                            img1={item.school}
                                        />
                                    </div>
                                    <div className="col-sm-5 border-right">
                                        <Dataname
                                            name={item.name}
                                        />
                                        <hr className="bg-dark" />
                                        <div className="row">
                                            <Dataadress
                                                adr={item.adress}
                                            />
                                        </div>
                                        <div className="row">
                                            <Dataphone
                                                phn={item.phone}
                                            />
                                        </div>
                                        <div className="row">
                                            <Datawebsite
                                                web={item.website}
                                            />
                                        </div><hr />
                                        <div className="row">
                                            <Datafee
                                                fee={item.Fee}
                                            />
                                        </div>
                                    </div>
                                    <div className="col-sm-4">
                                        <div className="row mt-5">
                                            <div className="col-sm-4"></div>
                                            <div className="col-sm-4">
                                                <p><b>Admission:</b><i>{this.state.obj1.admission}</i></p>
                                            </div>
                                            <div className="col-sm-4"></div>
                                        </div>
                                        <div className="row">
                                            <div className="col-sm-2"></div>
                                            <div className="col-sm-8">
                                                <button className="btn btn-success" data-toggle="collapse" data-target="#demo" style={{ width: "100%" }}>
                                                    More info
                                    <i className="fas fa-angle-right ml-1"></i>
                                                </button>
                                            </div>
                                            <div className="col-sm-2"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                ))}
                <div id="demo" className="collapse">
                    <Collapsesec />
                </div>*/}
            </div>
        )
    }
}

export default Maindiv
