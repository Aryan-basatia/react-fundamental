import React from "react";

function Child({ name,handleClick }) {
    {console.log("Child rendered")}
  return (
    <div>
      <p>{name}</p>
      <button onClick={handleClick}>click</button>
    </div>
  );
}

export default React.memo(Child);
