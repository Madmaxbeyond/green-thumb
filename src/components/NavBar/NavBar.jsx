import React from 'react';
import { Link, NavLink} from 'react-router-dom';
import * as userService from '../../utilities/users-service';
import M from 'materialize-css';

export default function NavBar({ user, setUser }) {

  function handleLogOut() {
    userService.logOut();
    setUser(null);
  }

  return (
    <>
    <nav role="navigation">
        <div class="nav-wrapper #CEE0D4 green-text text-lighten-3">
          <NavLink exact class="brand-logo center green-text text-lighten-3" to="/">GreenThumb</NavLink>
          {/* eslint-disable-next-line  */}
          <a data-target="mobile-demo" class="sidenav-trigger"><i class="material-icons black-text">GreenThumb</i></a>
          <ul class="right hide-on-med-and-down black-text">
            <li><span>Welcome, {user.name}</span>&nbsp;&nbsp;</li>
            <li><NavLink exact class="black-text" to="/plants">My Plants</NavLink></li>
            <li><NavLink exact class="black-text" to="/plants/add">Add Plant</NavLink></li>
            <li>&nbsp;&nbsp;&nbsp;&nbsp;</li>
            <li><Link to="" class="black-text" onClick={handleLogOut}>Log Out</Link></li>
          </ul>
        </div>
    </nav>    

    <ul class="sidenav" id="mobile-demo">
      <li><span>Hi {user.name}!</span>&nbsp;&nbsp;</li>
      <li><NavLink exact class="black-text" to="/">Home</NavLink></li>
      <li><NavLink exact to="/plants">My Plants</NavLink></li>
      <li><NavLink exact to="/plants/add">Add Plant</NavLink></li>
      <li><Link to="" onClick={handleLogOut}>Log Out</Link></li>
    </ul>
  <br/>
  </>             
  );
}

document.addEventListener('DOMContentLoaded', function() {
  var elems = document.querySelectorAll('.sidenav');
  // eslint-disable-next-line
  var instances = M.Sidenav.init(elems);
});
