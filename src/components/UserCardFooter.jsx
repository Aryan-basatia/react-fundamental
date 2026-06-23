function UserCardFooter({theme}) {
  const themClasses = {
    light: "mt-2 p-2 rounded text-sm bg-gray-100 text-gray-800",
    dark: " mt-2 p-2 rounded text-sm text-white bg-gray-800  ",
  };
  return <div className={themClasses[theme]}>Theme</div>
}

export default UserCardFooter;
