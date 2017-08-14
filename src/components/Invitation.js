// Code Invitation Component Here
import React from 'react'

class Invitation extends React.Component{


  render(){
    const children = React.Children.map(this.props.children, child => {
      return ( <div className="some-component-special-class">{child}</div> )
    })
    return(
      <div>
      <h1>You've been invited!</h1>
      <p>This component has {React.Children.count(this.props.children)} children.</p>
       {children}
      </div>
    )
  }
}

export default Invitation
