import React, { Component } from 'react'
import { Feesfilter } from './Feesfilter';
import { Searchnavbar } from './Searchnavbar';
//import { Searchbar } from './Searchbar';
import Searchbar from '../Home/Searchbar'

export class Filter extends Component {
  render() {
    return (
      
        <div className="container">
          <Searchnavbar />
          {/*<Searchbar searchTerm={this.props.searchTerm} onSearchChange={this.props.onSearchChange}/>*/}
          <div className="mt-1">
          <Searchbar getdata={this.props.getdata}/>
          </div>
          <Feesfilter />
        </div>
        
      
    )
  }
}

export default Filter
