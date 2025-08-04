const React = require('react');

function SignIn(props) {
  return (
    <html>
      <head>
        <title>Sign In</title>
      </head>
      <body>
        <h1>Sign In</h1>
        <form method="POST" action="/signin">
          <input name="email" type="email" placeholder="Email" required/><br/>
          <input name="password" type="password" placeholder="Password" required/><br/>
          <button type="submit">Login</button>
        </form>
        <p>Don't have an account? <a href="/signup">Sign Up</a></p>
        {props.error && <p style={{color: 'red'}}>{props.error}</p>}
      </body>
    </html>
  );
}

module.exports = SignIn;
