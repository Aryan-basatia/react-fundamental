export default function LoginStatus({ isLoggedIn, toggleLogin }) {
  return (
    <div>
      {isLoggedIn ? (
        <>
          <h2>Welcome Back!</h2>
          <button onClick={toggleLogin}>Logout</button>
        </>
      ) : (
        <button onClick={toggleLogin}>LogIn</button>
      )}
    </div>
  );
}
