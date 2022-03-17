import React from "react";
import './postit.css'

class Postit extends React.Component {
    render() {
      return (
          <div>
              <img id="postit" src={this.props.src} alt="postit"></img>
          </div>
      );
    }
  }

  export default Postit;