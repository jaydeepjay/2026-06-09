function Dashboard() {
  const students =
    JSON.parse(localStorage.getItem("students")) || [];

  return (
    <div>
      <h1>Dashboard</h1>

      <h2>Total Students : {students.length}</h2>
    </div>
  );
}

export default Dashboard;