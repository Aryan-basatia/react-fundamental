import UserCard from "./components/UserCard";

function App() {
  function handleClick(name) {
    console.log(name);
  }
  return (
    <>
      <UserCard
        name="Aryan"
        role="Tutor"
        onClick={() => handleClick("Admin")}
      />
      <UserCard
        name="Ravan"
        onClick={() => handleClick("Admin")}
      />
      <UserCard
        name="Rajesh"
        role="Owner"
        onClick={() => handleClick("Admin")}
      />
      <UserCard
        name="Ruchi"
        role="Divorce officer"
        onClick={() => handleClick("Admin")}
      />
    </>
  );
}

export default App;
