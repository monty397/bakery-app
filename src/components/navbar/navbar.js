/* eslint-disable jsx-a11y/anchor-is-valid */
import './navbar.css';
import Logo from './logo.png'
import Button from '@mui/material/Button';


const Navbar = () => {

  return (
    <div>
      <nav >
        <ul>
          <li><img className="logo" src={Logo} alt="website logo." /></li>
          <li><a href="#">Home</a></li>
          <li><a href="#">Menu</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Contact</a></li>
          <li><input type="text" className="search-box" placeholder="Search..." /></li>
          <li><Button style={{
          }} variant="contained" size="small">Search</Button></li>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;