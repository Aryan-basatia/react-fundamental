import { useEffect, useState } from "react";

export default function UserDirectory() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [refresh, setRefresh] = useState(0);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        setLoading(true);
        setError(null);

        const res = await fetch("https://jsonplaceholder.typicode.com/users");

        if (!res.ok) {
          throw new Error(`Request failed with status ${res.status}`);
        }

        const data = await res.json();

        setUsers(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchUsers();
  }, [refresh]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <>
      {users.map((u) => {
        return (
          <div key={u.id}>
            <h2>{u.name}</h2>
            <p>{u.email}</p>
          </div>
        );
      })}
      <button onClick={() => setRefresh((prev) => prev + 1)}>Refresh</button>
    </>
  );
}
