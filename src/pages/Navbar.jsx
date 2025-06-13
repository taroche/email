import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        <Link className="navbar-brand" to="/">Email in a Day</Link>

        <ul className="navbar-nav ms-auto">
          <li className="nav-item">
            <Link className="nav-link" to="/">Home</Link>
          </li>

          <li className="nav-item">
            <Link className="nav-link" to="/pricing">Price</Link>
          </li>

          <li className="nav-item">
           
              <Link className="nav-link" to="/contact">Contact Us</Link>
            
            
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
