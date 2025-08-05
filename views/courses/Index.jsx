const React = require('react');

function Index(props) {
  console.log(props)
  return (
    <html>
      <head>
        <title>Home Page</title>
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
        <a href={`/programs/select?token=${props.token}`}>See program</a>
        {props.program && (
          <div style={{marginTop: '2em'}}>
            <h2>Selected Program</h2>
            <p>{typeof props.program === 'object' ? props.program.name : props.program}</p>
          </div>
        )}
      </body>
    </html>
  );
}

module.exports = Index;
