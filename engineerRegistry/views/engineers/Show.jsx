const React = require("react");

function Show (props) {
    return (
        <div>
            <a href="/engineers">Back to Engineer Listing Page</a>
            <h1>Meet {props.engineer.name}</h1>
            <p>Name: {props.engineer.name}</p>
            <br/>
            <p>Specialty: {props.engineer.specialty}</p>
            <br/>
            <p>Years of Experience: {props.engineer.yearsExperience} years</p>
            <br />
            <p>Available: {props.engineer.available ? "Yes" : "No"} </p>
            <br/>
            <div>
            <a href={`/engineers/${props.engineer._id}/edit`}><button>Edit This Engineer</button></a>
            </div>
            <form action={`/engineers/${props.engineer._id}?_method=DELETE`} method="POST">
                <input type="submit" value={"Delete This Engineer"}/>
            </form>
        </div>
    )
}

module.exports = Show;