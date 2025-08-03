const React = require('react');

function Index(props) {
    const courses = props.courses;

    return (
        <html>
            <head>
                <title>Courses Index</title>
                <link rel="stylesheet" href="/style.css" />
            </head>
            <body>
                <div className="container">
                    <h1>Courses</h1>
                    <a className="create-link" href="/courses/new">+ Add New Course</a>
                    <ul className="course-list">
                        {courses.map(course => (
                            <li className="course-item" key={course._id}>
                                <a href={`/courses/${course._id}`}>{course.name}</a> - {course.credits} credits
                                <form action={`/courses/${course._id}?_method=DELETE`} method="POST">
                                    <button className="btn delete" type="submit">Delete</button>
                                </form>
                                <a href={`/courses/${course._id}/edit`}><button className="btn edit">Edit</button></a>
                            </li>
                        ))}
                    </ul>
                </div>
            </body>
        </html>
    );
}

module.exports = Index;

