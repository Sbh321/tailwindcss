import React, { useState } from "react";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isFullNameOpen, setIsFullNameOpen] = useState(false);
  const [isAdminOpen, setIsAdminOpen] = useState(false);

  const onToggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleFullNameDropdown = () => {
    setIsFullNameOpen(!isFullNameOpen);
  };

  const toggleAdminDropdown = () => {
    setIsAdminOpen(!isAdminOpen);
  };

  return (
    <header className="bg-white">
      <nav className="h-16 flex justify-between items-center w-[94%] m-auto">
        <div>
          <p className="text-2xl">Krishipal</p>
        </div>
        <div
          className={`nv-links md:static absolute bg-white md:min-h-fit min-h-[60vh] left-0 md:w-auto w-full flex items-center px-5 ${
            isMenuOpen ? "top-[9%]" : "top-[-100%]"
          }`}
        >
          <ul className="flex md:flex-row flex-col md:items-center md:gap-[4vw] gap-8">
            <div className="flex md:flex-row flex-col md:items-center md:gap-[4vw] gap-8">
              <li>
                <a className="hover:text-gray-500" href="">
                  About
                </a>
              </li>
              <li>
                <a className="hover:text-gray-500" href="">
                  Advice
                </a>
              </li>
              <li>
                <a className="hover:text-gray-500" href="">
                  Blogs
                </a>
              </li>
              <li>
                <a className="hover:text-gray-500" href="">
                  Contact
                </a>
              </li>
            </div>

            <div className="flex md:flex-row flex-col md:items-center md:gap-[4vw] gap-8">
              <li className="relative group">
                <p
                  className="hover:text-gray-500 select-none"
                  onClick={toggleFullNameDropdown}
                >
                  Full Name
                </p>
                {/* Dropdown menu for Full Name */}
                {isFullNameOpen && (
                  <ul className="absolute rounded bg-white shadow-md py-2 md:px-4 px-20">
                    <li>
                      <a className="hover:text-gray-500" href="">
                        Profile
                      </a>
                    </li>
                    <li>
                      <a className="hover:text-gray-500" href="">
                        Log out
                      </a>
                    </li>
                  </ul>
                )}
              </li>
              <li className="relative group">
                <p
                  className="hover:text-gray-500 select-none"
                  onClick={toggleAdminDropdown}
                >
                  Admin
                </p>
                {/* Dropdown menu for Admin */}
                {isAdminOpen && (
                  <ul className="absolute rounded bg-white shadow-md py-2 md:px-4 px-20">
                    <li>
                      <a className="hover:text-gray-500" href="">
                        Users
                      </a>
                    </li>
                    <li>
                      <a className="hover:text-gray-500" href="">
                        Dashboard
                      </a>
                    </li>
                  </ul>
                )}
              </li>
            </div>
          </ul>
        </div>
        <div className="flex items-center gap-6">
          <button className="bg-green-600 text-white px-5 py-2 rounded hover:bg-green-500">
            Sign in
          </button>
          <span
            onClick={onToggleMenu}
            className="text-3xl cursor-pointer md:hidden"
          >
            {isMenuOpen ? "X" : "M"}
          </span>
        </div>
      </nav>
    </header>
  );
};

export default Navigation;
