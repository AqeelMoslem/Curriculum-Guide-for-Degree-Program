const React = require('react');

function New() {
    return (
        <html>
            <head>
                <title>New Course</title>
                <link rel="stylesheet" href="/style.css" />
            </head>
            <body>
                <div className="container">
                    <h1>Create New Course</h1>
                    <form action="/courses" method="POST">
                        Name: <input type="text" name="name" /><br />
                        Credits: <input type="number" name="credits" /><br />
                        Description: <textarea name="description"></textarea><br />
                        <input type="submit" value="Create Course" />
                    </form>
                    <a href="/courses">Back to Index</a>
                </div>
            </body>
        </html>
    );
}

module.exports = New;