import { useState } from "react";
import { Link } from "react-router-dom";

function StudentList() {
  const [students, setStudents] = useState(
    JSON.parse(localStorage.getItem("students")) || []
  );

  const deleteStudent = (id) => {
    const updatedStudents = students.filter(
      (student) => student.id !== id
    );

    setStudents(updatedStudents);

    localStorage.setItem(
      "students",
      JSON.stringify(updatedStudents)
    );
  };

  return (
    <div>
      <h1>Student List</h1>

      <table border="1">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Course</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          {students.map((student) => (
            <tr key={student.id}>
              <td>{student.id}</td>
              <td>{student.name}</td>
              <td>{student.course}</td>

              <td>
                <Link to={`/edit/${student.id}`}>
                  Edit
                </Link>

                <button
                  onClick={() =>
                    deleteStudent(student.id)
                  }
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default StudentList;