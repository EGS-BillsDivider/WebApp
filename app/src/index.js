import React from 'react';
import ReactDOM from 'react-dom';
import Mysidebar from './layouts/Mysidebar/Mysidebar';

import './index.css';

function App() {
  return (
    <div>
      <Mysidebar></Mysidebar>
      <h2 class="testclass">teste</h2>
      <span onClick={openNav}>Open</span>
      <br></br>
      <span onClick={closeNav}>Close</span> 
    </div>
  );
}

/* Set the width of the side navigation to 250px */
function openNav() {
  document.getElementById("mySidenav").style.width = "50em";
  document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
  console.log("abri!");
}

/* Set the width of the side navigation to 0 */
function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
  document.body.style.backgroundColor = "white";
}



ReactDOM.render(
  <App/>,
  document.getElementById('root')
);