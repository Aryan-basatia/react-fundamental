export default function UserCard({name,role = "Guest",onClick}){
    return(
        <div >
        <h1>{name}</h1>
        <p>{role}</p>
        <button onClick={onClick}>Badge</button>
        </div>
    )
}