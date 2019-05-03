import React, { Component } from 'react'
const style1 = {
    height: '50px',
    borderStyle: 'outset',
    borderSize: '10px'
}
const style2 = {
    height: '50px'
}

export class Searchbar extends Component {
    render() {
        return (
            <div>
                <form role="search">
                    <div className="row">
                        <div className="col-sm-2"></div>
                        <div className="col-sm-8">
                            <div className="input-group pt-3">
                                <input style={style1} type="text" className="form-control" placeholder="Search" />
                                <button style={style2} className="btn btn-success">
                                    <i className="fas fa-search mr-1"></i>
                                    <b>Search</b>
                                </button>
                            </div>
                        </div>
                        <div className="col-sm-2">
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}

export default Searchbar;
