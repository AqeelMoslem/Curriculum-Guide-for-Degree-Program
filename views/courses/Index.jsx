const React = require('react');
const Layout = require('../layouts/Layout');

function Index(props) {
  const programs = props.programs || [
    { _id: '1', name: 'Software Engineering' },
    { _id: '2', name: 'Computer Engineering' },
    { _id: '3', name: 'Information Systems' }
  ];
  return (
    <Layout>
      <h1>Courses List</h1>
      <ul>
        {props.courses && props.courses.map(course => (
          <li key={course._id}>
            <strong>{course.name}</strong> - {course.credits} credits
          </li>
        ))}
      </ul>
      <h2>📚 Select a Program</h2>
      <form action={props.token ? `/select?token=${props.token}` : '/select'} method="POST">
        <div className="form-group">
          <label htmlFor="programId">Choose Program:</label>
          <select id="programId" name="programId" required>
            <option value="" disabled selected>-- Select Program --</option>
            {programs.map(program => (
              <option key={program._id} value={program._id}>{program.name}</option>
            ))}
          </select>
        </div>
        <button type="submit" className="btn btn-primary mt-3">Submit</button>
      </form>
      {props.program && (
        <div style={{marginTop: '2em'}}>
          <h2>Selected Program</h2>
          <p>{typeof props.program === 'object' ? props.program.name : props.program}</p>
        </div>
      )}
    </Layout>
  );
}

module.exports = Index;
