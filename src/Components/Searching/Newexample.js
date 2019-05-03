import React, { Component } from 'react'
import { Consumer } from '../../context';

export class Newexample extends Component {
  render() {
    return (
      <div>
        <Consumer>
            {value=>{
                return(
                    <div>
                        <p>{value.list.name}</p>
                        <p>hii</p>
                        </div>
                )
            }}
            </Consumer>
      </div>
    )
  }
}

export default Newexample
