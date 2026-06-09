import { useState } from "react";

function AddStudent() {
  const [student, setStudent] = useState({
    id: "",
    name: "",
    course: "",
  });

  const handleChange = (e) => {
    setStudent({
      ...student,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const students =
      JSON.parse(localStorage.getItem("students")) || [];

    students.push(student);

    localStorage.setItem(
      "students",
      JSON.stringify(students)
    );

    alert("Student Added");

    setStudent({
      id: "",
      name: "",
      course: "",
    });
  };

  return (
    <div>
      <h1>Add Student</h1>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="id"
          placeholder="Student ID"
          value={student.id}
          onChange={handleChange}
        />

        <input
          type="text"
          name="name"
          placeholder="Student Name"
          value={student.name}
          onChange={handleChange}
        />

        <input
          type="text"
          name="course"
          placeholder="Course"
          value={student.course}
          onChange={handleChange}
        />

        <button>Add Student</button>
      </form>
    </div>
  );
}

export default AddStudent;