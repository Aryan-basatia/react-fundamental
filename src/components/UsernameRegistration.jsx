import { useState } from "react";

export default function UsernameRegistration() {
  const [username, setUsername] = useState("");
  const [touched, setTouched] = useState(false);
  const isValid = username.length >= 4 && username.length <= 20;
  const showError = !isValid && touched;

  return (
    <>
      <input
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        onBlur={() => setTouched(true)}
      />
      <p>{isValid ? "success" : ""}</p>
      <p>{showError ? "Plese enter valid username" : ""}</p>
      <button disabled={!isValid}>continue</button>
      <p>{username.length}/20 Character</p>
    </>
  );
}
