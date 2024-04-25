import { useNavigate } from "react-router";
import { useState } from "react";

function Navbar() {
  const [activeItem, setActiveItem] = useState(null);
  const navigate = useNavigate();

  // Function to handle click events and set active item
  const handleClick = (name) => {
    setActiveItem(name);

    if (name === "Home") {
      navigate("/");
    } else {
      navigate(`/${name}`);
    }

    // Reset animation by removing active item after a short delay
    setTimeout(() => {
      setActiveItem(null);
    }, 200); // Duration should match the CSS transition
  };

  return (
    <div className="flex justify-around items-center bg-gradient-to-r from-purple-600 via-purple-700 to-purple-800  text-gray-100 shadow-lg z-10 w-full h-20 px-4 select-none ">
      {["Home", "About", "Projects", "Experience", "Contact"].map((item) => (
        <span
          key={item}
          onClick={() => handleClick(item)}
          className={`text-2xl font-bold hover:text-white hover:bg-purple-900  transition-all duration-200 p-2 rounded-md cursor-pointer ${
            activeItem === item ? "bg-purple-700 scale-95" : ""
          }`}
        >
          {item}
        </span>
      ))}
    </div>
  );
}

export default Navbar;
