const React = require('react');

function Edit(props) {
    const { _id, name, credits, description } = props.course;

    return (
        <html>
            <head>
                <title>Edit Course - {name}</title>
                <link rel="stylesheet" href="/style.css" />
            </head>
            <body>
                <div className="container edit-page">
                    <h1>Edit Course: {name}</h1>
                    <form action={`/courses/${_id}?_method=PUT`} method="POST">
                        Name: <input type="text" name="name" defaultValue={name} required /><br />
                        Credits: <input type="number" name="credits" defaultValue={credits} required /><br />
                        Description:<br />
                        <textarea name="description" rows="5">{description}</textarea><br />
                        <button className="btn edit" type="submit">Update Course</button>
                        <a href={`/courses/${_id}`}><button className="btn" type="button">Cancel</button></a>
                    </form>
                </div>
            </body>
        </html>
    );
}

module.exports = Edit;
