const React = require('react');

function SignUp(props) {
  return (
    <html>
      <head>
        <title>Sign Up</title>
      </head>
      <body>
        <h1>Sign Up</h1>
        <form method="POST" action="/signup">
          <input name="email" type="email" placeholder="Email" required/><br/>
          <input name="password" type="password" placeholder="Password" required/><br/>
          <button type="submit">Register</button>
        </form>
        <p>Already have an account? <a href="/signin">Sign In</a></p>
        {props.error && <p style={{color: 'red'}}>{props.error}</p>}
      </body>
    </html>
  );
}

module.exports = SignUp;
