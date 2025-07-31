const React = require("react");

function Edit (props) {
    const engineer=props.engineer
    return (
        <div>
            <h1>Edit {engineer.name}</h1>
            <a href="/engineers">Back to Listing Page</a>
            <form action={`/engineers/${engineer._id}?_method=PUT`} method="POST">
            Name: <input type="text" name="name" defaultValue={engineer.name} />
            <br/>
            Specialty: <input type="text" name="specialty" defaultValue={engineer.specialty} />
            <br/>
            Years of Experience: <input type="number" name="yearsExperience" defaultValue={engineer.yearsExperience} />
            <br/>
            Available: <input type="checkbox" name="available" defaultChecked={engineer.available} />
            <br/>
            <input type="submit" value="Submit Changes" />
            </form>
        </div>
    )
}

module.exports = Edit;