const React = require('react');
const Layout = require('../layouts/Layout');

function Edit(props) {
  const token = props.token;
  const programCode = props.programCode || '1'; // Get programCode from props

  const programMap = {
    '1': {  
      name: 'Software Engineering',
      formAction: `/programs/select/se?token=${token}`,
      subjects: [
        { id: 'html_css_js', name: 'HTML / CSS / JAVASCRIPT' },
        { id: 'express_node', name: 'EXPRESS / NODE.JS' },
        { id: 'react_js', name: 'REACT.JS' },
        { id: 'python_django', name: 'PYTHON.PY / DJANGO' }
      ]
    },
    '2': {
      name: 'Computer Engineering',
      formAction: `/programs/select/ce?token=${token}`,
      subjects: [
        { id: 'digital_logic', name: 'DIGITAL LOGIC DESIGN' },
        { id: 'microprocessors', name: 'MICROPROCESSORS & MICROCONTROLLERS' },
        { id: 'computer_architecture', name: 'COMPUTER ARCHITECTURE' },
        { id: 'embedded_systems', name: 'EMBEDDED SYSTEMS' }
      ]
    },
    '3': {
      name: 'Information Systems',
      formAction: `/programs/select/is?token=${token}`,
      subjects: [
        { id: 'database_systems', name: 'DATABASE SYSTEMS' },
        { id: 'system_analysis', name: 'SYSTEM ANALYSIS & DESIGN' },
        { id: 'enterprise_systems', name: 'ENTERPRISE INFORMATION SYSTEMS' },
        { id: 'it_project_mgmt', name: 'IT PROJECT MANAGEMENT' }
      ]
    }
  };

  const selectedProgram = programMap[programCode];

  return (
    <Layout token={props.token}>
      <div className="container">
        <h1>Choose New Subject for {selectedProgram.name}</h1>

        <form action={selectedProgram.formAction} method="POST">
          {selectedProgram.subjects.map(subject => (
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
      </div>
    </Layout>
  );
}

module.exports = Edit;
