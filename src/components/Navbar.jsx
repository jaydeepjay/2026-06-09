import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav>
      <h2>Student Management System</h2>

      <Link to="/">Dashboard</Link>
      <Link to="/add">Add Student</Link>
      <Link to="/students">Student List</Link>
    </nav>
  );
}

export default Navbar;