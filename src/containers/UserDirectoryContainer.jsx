import { useEffect, useState } from "react";
import UserList from "../components/UserList";

export default function UserDirectoryContainer({theme}) {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [refresh, setRefresh] = useState(0);
  const [searchTerm, setSearchTerm] = useState("");

  function handleChange(e) {
    setSearchTerm(e.target.value);
  }

  function handleClick() {
    setRefresh((prev) => prev + 1);
  }

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

  if (loading)
    return (
      <div className="p-6 max-w-4xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {Array.from({ length: 10 }).map((_, index) => (
            <div
              key={index}
              className="bg-gray-200 rounded-lg h-40 animate-pulse"
            />
          ))}
        </div>
      </div>
    );
  if (error) return <p className="text-center text-red-500 mt-10">{error}</p>;

  return (
    <UserList
      users={users}
      searchTerm={searchTerm}
      onChange={handleChange}
      onClick={handleClick}
      theme = {theme}
    />
  );
}
