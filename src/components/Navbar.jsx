import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav>
      <h2>Student Management System</h2>

      <nav className="navbar">
  <Link to="/" className="nav-btn">🏠 Dashboard</Link>
  <Link to="/add" className="nav-btn">➕ Add Student</Link>
  <Link to="/students" className="nav-btn">📋 Student List</Link>
</nav>
    </nav>
  );
}

export default Navbar;