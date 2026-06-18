export default function Profile({name,age,city}) {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 flex gap-4">
        <img
          src="/assets/hero.png"
          className="w-16 h-16 rounded-full bg-blue-400"
        />
      <div className="flex flex-col">
        <h1 className="font-bold text-xl">{name}</h1>
        <p className="text-gray-500 text-sm">
          {age}
        </p>
        <p className="text-gray-500 text-sm">
          {city}
        </p>
        <div className="flex gap-2">
          <button>1</button>
          <button>2</button>
        </div>
      </div>
    </div>
  );
}
