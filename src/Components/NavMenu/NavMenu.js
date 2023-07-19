import { Link, NavLink } from "react-router-dom";

/*
----------------------------- Notes -------------------------------------
1. Updated NavMenu with horizontal (desktop view) and vertical (mobile view) menu-items.
2. NavLink, Link components of react-router-dom used for highlighting the activate menu-item, 
navigate back to landing page on brand click.
3. Made the nav-bar container responsive to view-port widths rather fluid. 
*/

const NavMenu = () => {
  return (
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
      <div class="container-fluid">
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav justify-content-evenly w-100">
            <li className="nav-item text-md-center">
              <NavLink to="/current">Current</NavLink>
            </li>
            <li className="nav-item text-md-center">
              <NavLink to="/history">History</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavMenu;
