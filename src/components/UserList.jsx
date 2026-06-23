import UserCard from "./UserCard";

function UserList({ users, onChange, onClick, searchTerm,theme }) {
  return (
    <div>
      <div className="p-6 max-w-4xl mx-auto">
        <input
          value={searchTerm}
          onChange={(e) => onChange(e)}
          className="w-full border border-gray-300 rounded-md px-4 py-2 mb-6 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {users
            .filter((u) =>
              u.name.toLowerCase().includes(searchTerm.toLowerCase()),
            )
            .map((u) => {
              return <UserCard key={u.id} user={u} theme={theme} />;
            })}
        </div>
        <button onClick={onClick}>Refresh</button>
      </div>
    </div>
    // TODO: 'theme' travels through here but UserList doesn't use it.
    // This is prop drilling. Context API will fix this on Day 25.
  );
}

export default UserList;
