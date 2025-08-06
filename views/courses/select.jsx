const React = require('react');
const Layout = require('../layouts/Layout');

function Select(props) {
  const token = props.token;
  // Use a prop to determine which program's subjects to show
  // Accepts: props.programCode ('1', '2', '3') or props.programName
  const programCode = props.programCode || '1';

  let subjects = [
    { id: 'html_css_js', name: 'HTML / CSS / JAVASCRIPT' },
    { id: 'express_node', name: 'EXPRESS / NODE.JS' },
    { id: 'react_js', name: 'REACT.JS' },
    { id: 'python_django', name: 'PYTHON.PY / DJANGO' }
  ];
  let title = 'Software Engineering';
  let formAction = `/programs/select/se?token=${token}`;

  if (programCode === '2') {
    subjects = [
      { id: 'digital_logic', name: 'DIGITAL LOGIC DESIGN' },
      { id: 'microprocessors', name: 'MICROPROCESSORS & MICROCONTROLLERS' },
      { id: 'computer_architecture', name: 'COMPUTER ARCHITECTURE' },
      { id: 'embedded_systems', name: 'EMBEDDED SYSTEMS' }
    ];
    title = 'Computer Engineering';
    formAction = `/programs/select/ce?token=${token}`;
  } else if (programCode === '3') {
    subjects = [
      { id: 'database_systems', name: 'DATABASE SYSTEMS' },
      { id: 'system_analysis', name: 'SYSTEM ANALYSIS & DESIGN' },
      { id: 'enterprise_systems', name: 'ENTERPRISE INFORMATION SYSTEMS' },
      { id: 'it_project_mgmt', name: 'IT PROJECT MANAGEMENT' }
    ];
    title = 'Information Systems';
    formAction = `/programs/select/is?token=${token}`;
  }

  return (
    <Layout>
      <h1>Select One Subject for {title}</h1>

      <form action={formAction} method="POST">
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

module.exports = Select;
