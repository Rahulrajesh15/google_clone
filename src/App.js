import { React, useState } from "react";
import "./index.css";
import Navbar from "./components/Navbar";
import Routers from "./components/Routers";
import Footer from "./components/Footer";

const App = () => {

  const [darkTheme, setDarkTheme] = useState(false);
  return (
    <div className={darkTheme ? 'dark' : ''}>
     <div className="bg-gray-100  min-h-screen dark:bg-gray-900 dark:text-gray-200">
       <Navbar
         darkTheme = {darkTheme}
         setDarkTheme = {setDarkTheme}
       />
       <Routers />
       <Footer />
       </div>
    </div>
  )
}

export default App;