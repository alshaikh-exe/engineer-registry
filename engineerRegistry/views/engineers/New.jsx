const React = require("react");


function New (props) {
    return (
        <div>
            <h1>Add New Engineer</h1>
            <a href="/engineers">Back to Engineer Listings</a>
            <form action="/engineers" method="POST">
            Name: <input type="text" name="name" required />
            <br/>
            Specialty: <input type="text" name="specialty" required />
            <br/>
            Years of Experience: <input type="number" name="yearsExperience" required />
            <br/>
            Available: <input type="checkbox" name="available" />
            <br/>
            <button type="submit">Add New Engineer</button>
            </form>
        </div>
    )
}

module.exports = New;