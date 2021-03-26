import React from "react";
import { elastic as Menu } from "react-burger-menu";

export default props => {
  return (
    // Pass on our props
    <Menu {...props}>
      <a className="menu-item" href="/">
        Home
      </a>

      <a className="menu-item" href="/Login">
        Login
      </a>

      <a className="menu-item" href="/Register">
        Register
      </a>
    </Menu>
  );
};
