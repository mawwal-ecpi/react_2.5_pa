import React, { Component } from "react";
 
class Image extends Component {
  render() {
    return (
      <div>
        <h2>This is my Image:</h2>
        
        <img src={require('./pic.jpg') }
        alt="" height="70%" width="90%"/>
        </div>
    );
  }
}

export default Image;



