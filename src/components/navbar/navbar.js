import './navbar.css';
import Logo from './logo.png'

const Navbar = () => {
  return (
    <div>
      <nav>
      <img className="logo" src={Logo} alt="website logo." />
        <ul>
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