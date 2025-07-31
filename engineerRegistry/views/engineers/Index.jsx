const React = require("react");

/*
const engineerSchema = new mongoose.Schema( {
    name: { type: String, required: true },
    speciality: { type: String, required: true },
    yearsExperience: Number,
    available: Boolean,
});
*/

function Index (props) {
    const engineers = props.engineers;
    return (
        <div>
            <a href="/engineers/new">Add Engineer</a>
            <h1>Engineers</h1>
            <ul>
                {
                    engineers.map((engineer) => {
                        return (<li>This is <a href={`/engineers/${engineer._id}?token=${props.token}`}>{engineer.name}</a> who is specialized in {engineer.specialty} with {engineer.yearsExperience} of experience. Currently {engineer.available ? "Available" : "Unavailable"}</li>)
                    })
                }
            </ul>
        </div>
    )
}

module.exports = Index;