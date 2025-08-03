const React = require('react');

function Show(props) {
    const course = props.course;

    return (
        <html>
            <head>
                <title>Course Details - {course.name}</title>
                <link rel="stylesheet" href="/style.css" />
            </head>
            <body>
                <div className="container show-page">
                    <h1>{course.name}</h1>
                    <p><strong>Credits:</strong> {course.credits}</p>
                    <p><strong>Description:</strong> {course.description}</p>

                    <div className="course-actions">
                        <a href={`/courses/${course._id}/edit`}><button className="btn edit">Edit</button></a>
                        <form action={`/courses/${course._id}?_method=DELETE`} method="POST">
                            <button className="btn delete" type="submit">Delete</button>
                        </form>
                        <a href="/courses"><button className="btn">Back to Index</button></a>
                    </div>
                </div>
            </body>
        </html>
    );
}

module.exports = Show;
