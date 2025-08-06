const React = require('react');

function New(props) {
    return (
        <html>
            <head>
                <title>New Course</title>
                <link rel="stylesheet" href="/style.css" />
            </head>
            <body>
                <div className="container">
                    <h1>Create New Course</h1>
                    <form action={`/courses?token=${props.token}`} method="POST">
                        Name: <input type="text" name="name" required /><br />
                        Credits: <input type="number" name="credits" required /><br />
                        Description: <textarea name="description"></textarea><br />
                        <input type="submit" value="Create Course" />
                    </form>

                    <a href={`/programs?token=${props.token}`}>⬅️ Back to Programs</a>
                </div>
            </body>
        </html>
    );
}

module.exports = New;
