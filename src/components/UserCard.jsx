import Badge from "./Badge";
import UserCardFooter from "./UserCardFooter";
function UserCard({ user, theme }) {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 flex flex-col gap-2">
      <h2 className="text-lg font-bold text-gray-800">{user.name}</h2>
      <p className="text-sm text-gray-500">{user.email}</p>
      <p className="text-sm text-gray-500">{user.company.name}</p>
      <Badge label={user.address.city} color="blue" />
      <UserCardFooter theme={theme} />
    </div>
  );
}

export default UserCard;
