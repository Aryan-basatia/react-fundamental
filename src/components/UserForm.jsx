import { useState } from "react";

export default function UserForm() {
  const [user, setUser] = useState({ name: "xyz", email: "xyz@gmail.com" });

  function toggleUser() {
    setUser((prevUser) => ({
      ...prevUser,
      name: "Aryan",
      email: "aryan123@gmail.com",
    }));
  }
  return(
    <>
        <p>{user.name}</p>
        <p>{user.email}</p>
        <button onClick={toggleUser}>ToggleUser</button>
    </>
  )
}
