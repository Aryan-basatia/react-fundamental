/* import UserCard from "./components/UserCard";
import Greeting from "./components/Greeting";
import Profile from "./components/Profile"; */

import Counter from "./components/Counter";
import ToggleText from "./components/ToggleText";
import UserForm from "./components/UserForm";

function App() {
  /* function handleClick(name) {
    console.log(name);
  } */
  return (
    <>
      {/* <Profile />
      <Greeting />
      <UserCard
        name="Aryan"
        role="Tutor"
        onClick={() => handleClick("Admin")}
      />
      <UserCard name="Ravan" onClick={() => handleClick("Admin")} />
      <UserCard
        name="Rajesh"
        role="Owner"
        onClick={() => handleClick("Admin")}
      />
      <UserCard
        name="Ruchi"
        role="Divorce officer"
        onClick={() => handleClick("Admin")}
      /> */}

        <Counter/>
        <ToggleText/>
        <UserForm />

    </>
  );
}

export default App;
