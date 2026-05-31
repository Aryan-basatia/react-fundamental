import { useState } from "react";

export default function ToggleText() {
  const [isVisible, setIsVisible] = useState(true);
  function toogleText(){
    setIsVisible(!isVisible)
  }
  return(
    <>
    <p>{isVisible ? 'Hello' : 'Goodbye'}</p>
    <button onClick={toogleText}>ToggleText</button>
    </>
  )
}
