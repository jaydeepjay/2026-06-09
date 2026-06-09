import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Dashboard from "./components/Dashboard";
import AddStudent from "./components/AddStudent";
import StudentList from "./components/StudentList";
import EditStudent from "./components/EditStudent";

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/add" element={<AddStudent />} />
        <Route path="/students" element={<StudentList />} />
        <Route path="/edit/:id" element={<EditStudent />} />
      </Routes>
    </BrowserRouter>   
  );
  function App() {
  return <h1>Hello</h1>;
}
}

export default App;