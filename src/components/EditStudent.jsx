import { useParams, useNavigate } from "react-router-dom";
import { useState } from "react";

function EditStudent() {
  const { id } = useParams();
  const navigate = useNavigate();

  const students =
    JSON.parse(localStorage.getItem("students")) || [];

  const currentStudent = students.find(
    (student) => student.id === id
  );

  const [student, setStudent] = useState(currentStudent);

  const handleChange = (e) => {
    setStudent({
      ...student,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const updatedStudents = students.map((s) =>
      s.id === id ? student : s
    );

    localStorage.setItem(
      "students",
      JSON.stringify(updatedStudents)
    );

    navigate("/students");
  };

  return (
    <div>
      <h1>Edit Student</h1>

      <form onSubmit={handleSubmit}>
        <input
          name="name"
          value={student.name}
          onChange={handleChange}
        />

        <input
          name="course"
          value={student.course}
          onChange={handleChange}
        />

        <button>Update</button>
      </form>
    </div>
  );
}

export default EditStudent;