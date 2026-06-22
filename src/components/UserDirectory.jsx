import { useEffect, useState } from "react";
import Badge from "./Badge";

export default function UserDirectory() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [refresh, setRefresh] = useState(0);
  const [searchTerm, setSearchTerm] = useState("");

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
    <div className="p-6 max-w-4xl mx-auto">
      <input
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="w-full border border-gray-300 rounded-md px-4 py-2 mb-6 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {users
          .filter((u) =>
            u.name.toLowerCase().includes(searchTerm.toLowerCase()),
          )
          .map((u) => {
            return (
              <div
                key={u.id}
                className="bg-white rounded-lg shadow-md p-6 flex flex-col gap-2"
              >
                <h2 className="text-lg font-bold text-gray-800">{u.name}</h2>
                <p className="text-sm text-gray-500">{u.email}</p>
                <p className="text-sm text-gray-500">{u.company.name}</p>
                <Badge label={u.address.city} color="blue" />
              </div>
            );
          })}
      </div>
      <button onClick={() => setRefresh((prev) => prev + 1)}>Refresh</button>
    </div>
  );
}
