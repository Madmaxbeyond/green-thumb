import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import * as userService from '../../utilities/users-service';

export default function NavBar({ user, setUser }) {

  function handleLogOut() {
    userService.logOut();
    setUser(null);
  }

  return (
    <nav className="navbar" role="navigation">
      <NavLink exact to="/">Home</NavLink>
      &nbsp; | &nbsp;
      <NavLink exact to="/plants">My Plants</NavLink>
      &nbsp; | &nbsp;
      <NavLink exact to="/plants/add">Add Plant</NavLink>
      &nbsp; | &nbsp;
      <span>Welcome, {user.name}</span>
      &nbsp;&nbsp;<Link to="" onClick={handleLogOut}>Log Out</Link>
    </nav>


    // Bootstrap navbar info below... 
    // <nav class="navbar navbar-expand-lg navbar-light bg-light" role="navigation">
    //   <NavLink class="navbar-brand" exact to="/">GreenThumb</NavLink>
    //   <button class="navbar-toggler" type="nav" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
    //     <span class="navbar-toggler-icon"></span>
    //   </button>
    //   <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
    //     <div class="navbar-nav">
    //       <Link class="nav-item nav-link active" exact to="/plants/add">Add Plant <span class="sr-only">(current)</span></Link>
    //       <Link class="nav-item nav-link active" exact to="/plants/add">Add Plant <span class="sr-only">(current)</span></Link>
    //       <a class="nav-item nav-link" href="#">Features</a>
    //       <a class="nav-item nav-link" href="#">Pricing</a>
    //       <a class="nav-item nav-link disabled" href="#">Disabled</a>
    //     </div>
    //   </div>
    // </nav>    
  );
}