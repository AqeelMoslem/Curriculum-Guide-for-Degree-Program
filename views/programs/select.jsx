const React = require('react')
const Layout = require('../layouts/Layout')

function select(props) {
    const programs = props.programs || [
        { _id: '1', name: 'Software Engineering' },
        { _id: '2', name: 'Computer Engineering' },
        { _id: '3', name: 'Information Systems' }
    ]

    return (
        <Layout>
            <h1>📚 Select a Program</h1>
            <form action={props.token ? `/select?token=${props.token}` : '/select'} method="POST">
                <div className="form-group">
                    <label htmlFor="programId">Choose Program:</label>
                    <select id="programId" name="programId" required>
                        <option value="" disabled selected>-- Select Program --</option>
                        {programs.map(program => (
                            <option key={program._id} value={program._id}>{program.name}</option>
                        ))}
                    </select>
                </div>
                <button type="submit" className="btn btn-primary mt-3">Submit</button>
            </form>
        </Layout>
    )
}

module.exports = select
