const React = require('react');

function Dashboard(props) {
  return (
    <html>
      <head>
        <title>Dashboard</title>
      </head>
      <body>
        <h1>Dashboard</h1>
        <p>Welcome, user ID: {props.userId}</p>
        <nav>
          <ul>
            <li><a href="/courses">Courses</a></li>
            <li><a href="/programs">Programs</a></li>
            <li><a href="/students">Students</a></li>
            <li><a href="/logout">Logout</a></li>
          </ul>
        </nav>
      </body>
    </html>
  );
}

module.exports = Dashboard;
