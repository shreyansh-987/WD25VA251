import React from "react";
import "./App.css";

// Student Component
function Student(props) {

  return (

    <div className="student-card">

      <h2>Student Information</h2>

      <p>
        <strong>Name:</strong> {props.name}
      </p>

      <p>
        <strong>Course:</strong> {props.course}
      </p>

      <p>
        <strong>Marks:</strong> {props.marks}
      </p>

    </div>
  );
}

// Main App Component
function App() {

  return (

    <div className="container">

      <h1>React Components using JSX and Props</h1>

      {/* Student Components */}

      <Student
        name="Rahul Sharma"
        course="B.Tech CSE"
        marks="85"
      />

      <Student
        name="Priya Singh"
        course="BCA"
        marks="91"
      />

      <Student
        name="Aman Verma"
        course="MCA"
        marks="78"
      />

    </div>
  );
}

export default App;