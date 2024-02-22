import { useState } from "react";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Routes from "./components/Routes";
import { BrowserRouter } from "react-router-dom";

const App = () => {
  const [darkTheme, setDarkTheme] = useState(false);
  return (
    <BrowserRouter>
      <main className={darkTheme ? "dark" : ""}>
        <div className="bg-gray-200 dark:bg-gray-900 dark:text-gray-200 min-h-screen">
          <Navbar darkTheme={darkTheme} setDarkTheme={setDarkTheme} />
          <Routes />
          <Footer />
        </div>
      </main>
    </BrowserRouter>
  );
};

export default App;
