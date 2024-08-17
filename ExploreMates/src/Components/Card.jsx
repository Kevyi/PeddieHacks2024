import "../styles/Card.css"

export default function Card(object){

    console.log(object.person.name)

    const name = object.person.name
    const about = object.person.about
    const img = null;

    return (
        <>
            <div className = "card">
                <img alt = "picture of person"></img>
                <h2>Name: {name}</h2>
                <p>{about}</p>
            </div>
        </>
    )
}