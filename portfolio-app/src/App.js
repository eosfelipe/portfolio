import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./App.css";
import About from "./components/About/AboutComponent";
import Contact from "./components/Contact/ContactComponent";
import Home from "./components/Home/HomeComponent";
import Services from "./components/Services/ServicesComponent";
import Sidebar from "./components/Sidebar/SidebarComponent";
import Work from "./components/Work/WorkComponent";

function App() {
  const [isOpen, setIsOpen] = useState(false);
  useEffect(() => {
    AOS.init({
      duration: 2000,
    });
    AOS.refresh();
  }, []);;
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
      <About
        title="About Us"
        subtitle="Lorem ipsum, dolor sit amet consectetur adipisicing elit. In, sint?"
        description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex neque voluptatem odit sed laudantium reiciendis et fugit natus quae itaque veniam numquam quam modi harum laborum officia nihil corporis, recusandae sit explicabo quisquam voluptas quibusdam. Nam, neque dolorum eligendi, ea quibusdam hic mollitia, cumque adipisci dolor soluta nobis unde! Veritatis? Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex neque voluptatem odit sed laudantium reiciendis et fugit natus quae itaque veniam numquam quam modi harum laborum officia nihil corporis, recusandae sit explicabo quisquam voluptas quibusdam. Nam, neque dolorum eligendi, ea quibusdam hic mollitia, cumque adipisci dolor soluta nobis unde! Veritatis?"
      />
      <Services />
      <Work />
      <Contact />
      <div className="copyright">
        <p>
          Copyright &copy; {new Date().getFullYear()}{" "}
          <a href="#" target="_blank">
            @eosfelipe
          </a>
          . All Right Reserved.
        </p>
      </div>
      <Sidebar isOpen={isOpen} handleMenu={handleMenu} />
    </>
  );
}

export default App;
