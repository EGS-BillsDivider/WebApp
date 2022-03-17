import React from "react";
import './sidebar.css'

class Mysidebar extends React.Component {
  render() {
    return(
      <div id="mySidenav" class="sidenav">
        <a href="javascript:void(0)" class="closebtn" onClick={closeNav}>&times;</a>
        <h1>conteúdo</h1>
      </div>
    );
  }
}

export default Mysidebar;

/* Set the width of the side navigation to 0 */
function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
  document.body.style.backgroundColor = "white";
}