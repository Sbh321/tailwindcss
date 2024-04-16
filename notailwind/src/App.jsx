import React, { useState } from "react";

const App = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav>
      <div>
        <div>
          <div>
            <div>
              <span>Logo</span>
            </div>
          </div>
          <div>
            <div>
              <a href="#">Home</a>
              <a href="#">About</a>
              <a href="#">Services</a>
              <a href="#">Contact</a>
            </div>
          </div>
          <div>
            <button>HAHA</button>
          </div>
        </div>
      </div>

      <div>
        <div>
          <a>Home</a>
          <a>About</a>
          <a>Services</a>
          <a>Contact</a>
        </div>
      </div>

      <button>HAHA</button>
    </nav>
  );
};

export default App;
