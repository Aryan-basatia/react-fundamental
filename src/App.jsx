import UserCard from "./components/UserCard";

function App() {
  function handleClick(name) {
    console.log(name);
  }
  return (
    <UserCard name="Aryan" role="Admin" onClick={() => handleClick("Admin")} />
  );
}

export default App;
