import { useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="flex items-center justify-between px-6 py-4">
      <h2 className="text-xl font-bold">MySite</h2>
      <div className=" hidden md:flex gap-6">
        <Link to="/">Home</Link>
        <Link to="/projects">Projects</Link>
        <Link to="/contact">Contact</Link>
      </div>
      {isOpen && (
        <div className=" flex gap-6">
          <Link to="/">Home</Link>
          <Link to="/projects">Projects</Link>
          <Link to="/contact">Contact</Link>
        </div>
      )}
      <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
        Hide
      </button>
    </div>
  );
}
