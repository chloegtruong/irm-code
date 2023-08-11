import { Link, NavLink, useLoaderData, useLocation } from "react-router-dom";
import logo from '/Users/chloetruong/Desktop/DPoD dash/digipath-dashboard-frontend-main/src/Components/NavMenu/logo.jpg';
import { useEffect, useState } from 'react';
/*
----------------------------- Notes -------------------------------------
1. Updated NavMenu with horizontal (desktop view) and vertical (mobile view) menu-items.
2. NavLink, Link components of react-router-dom used for highlighting the activate menu-item, 
navigate back to landing page on brand click.
3. Made the nav-bar container responsive to view-port widths rather fluid. 

Chloe: I redid this navbar using styling from Figma. 
*/

const NavMenu = ({timeframe, setTimeFrame}) => {

  const selectedStyle = ({isActive})=>{
    return{
      color: isActive? '#1B75BC': '#626262',
      textAlign:'center',
      fontFamily:'Inter',
      fontSize:'20px',
      fontStyle:'normal',
      fontWeight:  isActive? '700px' : '400px',
      lineHeight:'normal',
      textDecoration: isActive? 'normal' : 'none',
    }
  }

  return (
    <div class = "nav-bar">
      <div class = "nav-content">
      <div class = "logo">
      <img src = {logo} alt = "logo"/>
      </div>
      <NavLink style = {selectedStyle} to="/current">Current</NavLink>
      <NavLink style = {selectedStyle} to="/history">History</NavLink>
      </div>
    </div>
  );
};

export default NavMenu;
