/* eslint-disable jsx-a11y/anchor-is-valid */
import './navbar.css';
import Logo from './logo.png'

const Navbar = () => {
  return (
    <div>
      <nav>
        <ul>
          <img className="logo" src={Logo} alt="website logo." />
          <li><a href="#">Home</a></li>
          <li><a href="#">Menu</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;