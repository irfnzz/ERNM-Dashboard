import React from "react";

import "./styles.scss";
import SideBar from "./Nav/sidebar";
import Topnav from './Nav/navbar';


const Mainmenu = () => {
  return (
    <div id="App">
            <Topnav/>
            <SideBar pageWrapId={"page-wrap"} outerContainerId={"App"} />

      <div id="page-wrap" className='container-fluid'>
        <ls>
        <h1> Subject To change as it is not perfect🍔🍕
        </h1>
        </ls>
      </div>
    </div>
  )
}

export default Mainmenu
