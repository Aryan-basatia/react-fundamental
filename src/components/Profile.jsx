export default function Profile() {
  const user = {
    name: "Aryan",
    age: 19,
    city: "Haryana",
  };
  return (
    <div className="counter">
      <h1>{user.name}</h1>
      <p>Age: {user.age}</p>
      <p>City: {user.city}</p>
      <p>Today: {new Date().toLocaleDateString()}</p>
    </div>
  );
}
