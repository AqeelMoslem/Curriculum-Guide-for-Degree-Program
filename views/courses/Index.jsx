const React = require('react');

function Index(props) {
  return (
    <html>
      <head>
        <title>Courses</title>
      </head>
      <body>
        <h1>Courses List</h1>
        <ul>
          {props.courses && props.courses.map(course => (
            <li key={course._id}>
              <strong>{course.name}</strong> - {course.credits} credits
            </li>
          ))}
        </ul>
        <a href="/dashboard">Back to Dashboard</a>
      </body>
    </html>
  );
}

module.exports = Index;
