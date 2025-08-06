const React = require('react');
const Layout = require('../layouts/Layout');

function Index(props) {
  const programs = props.programs || [
    { code: '1', name: 'Software Engineering' },
    { code: '2', name: 'Computer Engineering' },
    { code: '3', name: 'Information Systems' }
  ];

  const selectedCourses = props.selectedCourses || [];

  return (
    <Layout>
      <h1>🎓 Select a Program</h1>
      
            <a href={`/programs/select/${programs.code}?token=${props.token}`}>
              SE
            </a>
     

    <h2>🎓 Selected Program & Subject</h2>
{props.program && props.selectedSubject ? (
  <p>
    <strong>Program:</strong> {props.program}<br />
    <strong>Subject:</strong> {props.selectedSubject}
  </p>
) : (
  <p>No program or subject selected yet.</p>
)}
    </Layout>
  );
}

module.exports = Index;
