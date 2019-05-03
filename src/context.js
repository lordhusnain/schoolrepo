import React, { Component } from 'react'

const myContext=React.createContext()

export class Provider extends Component {
  state={
        list:[]
  }
  
    render() {
    return (
     <myContext.Provider value={this.state}>
        {this.props.children}
     </myContext.Provider>
    )
  }
}

export const Consumer=myContext.Consumer;