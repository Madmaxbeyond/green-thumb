import { Link, NavLink } from 'react-router-dom';
import * as userService from '../../utilities/users-service';

export default function NavBar({ user, setUser }) {

  function handleLogOut() {
    userService.logOut();
    setUser(null);
  }

  return (
    <nav className="navbar" role="navigation">
      <NavLink exact activeStyle={{backgroundColor: 'grey'}} to="/plants/add">Add Plant</NavLink>
      &nbsp; | &nbsp;
      <NavLink exact activeStyle={{backgroundColor: 'grey'}} to="/plants">My Plants</NavLink>
      &nbsp; | &nbsp;
      <span>Welcome, {user.name}</span>
      &nbsp;&nbsp;<Link to="" onClick={handleLogOut}>Log Out</Link>
    </nav>
    // Bootstrap navbar info below... 
    // <nav class="navbar navbar-expand-lg navbar-light bg-light" role="navigation">
    //   <a class="navbar-brand" Link="#">Navbar</a>
    //   <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    //     <span class="navbar-toggler-icon"></span>
    //   </button>
    //   <div class="collapse navbar-collapse" id="navbarNav">
    //     <ul class="navbar-nav">
    //       <li class="nav-item active">
    //         <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
    //       </li>
    //       <li class="nav-item">
    //         <a class="nav-link" href="#">Features</a>
    //       </li>
    //       <li class="nav-item">
    //         <a class="nav-link" href="#">Pricing</a>
    //       </li>
    //       <li class="nav-item">
    //         <a class="nav-link disabled" href="#">Disabled</a>
    //       </li>
    //     </ul>
    //   </div>
    // </nav>    
  );
}