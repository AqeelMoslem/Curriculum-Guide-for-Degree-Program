const React = require('react');

function Layout(props) {
  return (
    <html lang="en">
      <head>
        <title>Curriculum Guide for Degree Program</title>
        <link rel="stylesheet" href="/style.css" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body>
        <div className="container">
          <header>
            <h1>🎓 Curriculum Guide</h1>
          </header>
          <main>
            {props.children}
          </main>
        </div>
      </body>
    </html>
  );
}

module.exports = Layout;