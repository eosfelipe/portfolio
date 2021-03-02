import { useState } from "react";
import "./App.css";
import Home from "./components/Home/HomeComponent";
import Sidebar from "./components/Sidebar/SidebarComponent";

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const handleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <div
        className={isOpen ? "toggle active" : "toggle"}
        onClick={handleMenu}
      ></div>
      <Home isOpen={isOpen} />
      <Sidebar isOpen={isOpen} />
    </>
  );
}

export default App;
