import React from "react";
import { Link } from "react-router-dom";

const searchHandler = ()=>{
  console.log('handle search box')
}

const NavItems = () => {
  return (
    <div className="NavList">
      <div className="logo"><Link to='/'><h3>GITVIEW</h3></Link></div>
      <ul>
        <Link to="/">
          <li className="menuItem ">Home</li>
        </Link>
        <Link to="/list">
          <li className="menuItem ">List</li>
        </Link>
        <Link to="/auth/login">
          <li className="menuItem loginBtn">Login</li>
        </Link>
      </ul>
    </div>
  );
};

export default NavItems;
