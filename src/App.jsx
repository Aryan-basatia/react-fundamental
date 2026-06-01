/* import UserCard from "./components/UserCard";
import Greeting from "./components/Greeting";
import Profile from "./components/Profile"; */

import { useState } from "react";
import PlayerScore from "./components/PLayerScore";

/* import Counter from "./components/Counter";
import ToggleText from "./components/ToggleText";
import UserForm from "./components/UserForm"; */



function App() {
  /* function handleClick(name) {
    console.log(name);
  } */

  const [score1,setScore1] = useState(0);
  const [score2,setScore2] = useState(0);

  function onIncrement1(){
    setScore1(prev => prev+1)
  }
  function onIncrement2(){
    setScore2(prev=>prev+1)
  }

  function onReset(){
    setScore1(0);
    setScore2(0);
  }


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

        {/* <Counter/>
        <ToggleText/>
        <UserForm /> */}

        <PlayerScore name="player1" score={score1} onIncrement={onIncrement1}/>
        <button  className="btn1" onClick={onReset}>Reset</button>
        <PlayerScore name="player2" score={score2} onIncrement={onIncrement2}/>
        

    </>
  );
}

export default App;
