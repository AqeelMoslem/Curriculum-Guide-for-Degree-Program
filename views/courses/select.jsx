const React = require('react');
const Layout = require('../layouts/Layout');

function SelectSE(props) {
  const token = props.token;

  // Subjects list for Software Engineering
  const subjects = [
    { id: 'html_css_js', name: 'HTML / CSS / JAVASCRIPT' },
    { id: 'express_node', name: 'EXPRESS / NODE.JS' },
    { id: 'react_js', name: 'REACT.JS' },
    { id: 'python_django', name: 'PYTHON.PY / DJANGO' }
  ];

  return (
    <Layout>
      <h1>Select One Subject for Software Engineering</h1>

      <form action={`/programs/select/se?token=${token}`} method="POST">
        {subjects.map(subject => (
          <div key={subject.id}>
            <input
              type="radio"
              id={subject.id}
              name="selectedSubject"
              value={subject.name}
              required
            />
            <label htmlFor={subject.id}>{subject.name}</label>
          </div>
        ))}
        <button type="submit">Submit</button>
      </form>

    </Layout>
  );
}

module.exports = SelectSE;
