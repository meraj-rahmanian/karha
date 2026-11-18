import { useState } from "react";
import { NavLink } from "react-router-dom";

export default function Header() {
  const navItems = [
    { text: "خانه", path: "/" },
    { text: "خدمات", path: "/services" },
    { text: "نمونه کارها", path: "/works" },
    { text: "در باره ما", path: "/about" },
    { text: "تماس", path: "/contact" },
  ];
  const [isOpen, setIsopen] = useState(false);
  const opener = () => {
    isOpen ? setIsopen(false) : setIsopen(true);
  };

  return (
    <div>
      <header className="w-full h-18 border fixed z-50 border-[#23201D] items-center justify-between p-3 hidden bg-white sm:flex">
        <span className="text-[48px] font-extrabold text-black flex gap-2 items-center cursor-default">
          کارها
          <span className="w-2 h-2 rounded-full bg-[#B3352B] flex items-center justify-center"></span>
        </span>
        <nav className="text-[#23201D] flex gap-2">
          {navItems.map((item, index) => {
            return (
              <span key={item.path} className="flex gap-2 items-center">
                <NavLink
                  to={item.path}
                  end={item.path === "/"}
                  className={({ isActive }) =>
                    `nav-item ${isActive ? "active" : ""}`
                  }
                >
                  {item.text}
                </NavLink>
                {index < navItems.length - 1 && <span>|</span>}
              </span>
            );
          })}
        </nav>
        <button className="main-btn">شروع پروژه</button>
      </header>

      <header
        className="w-full h-14 border fixed z-50 border-[#23201D] flex items-center justify-between p-3 sm:hidden bg-white"
        onClick={opener}
      >
        <span className="text-[32px] font-extrabold text-black flex gap-2 items-center cursor-default">
          کارها
          <span className="w-1.5 h-1.5 rounded-full bg-[#B3352B] flex items-center justify-center"></span>
        </span>
        {isOpen ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="2.5"
            stroke="currentColor"
            class="size-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M6 18 18 6M6 6l12 12"
            />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="2.5"
            stroke="black"
            className="size-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
        )}
      </header>

      <div
        className={`fixed top-14 inset-x-0 z-40 sm:hidden ${isOpen ? "" : "hidden"}`}
      >
        {navItems.map((el) => {
          return (
            <NavLink
              key={el.path}
              to={el.path}
              end={el.path === "/"}
              onClick={() => setIsopen(false)}
              className={({ isActive }) =>
                `res_items ${isActive ? "active" : ""}`
              }
            >
              {el.text}
            </NavLink>
          );
        })}
      </div>
    </div>
  );
}