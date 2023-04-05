import { Route, Routes } from "react-router";
import "./App.css";
import Footer from "./components/Footer/Footer";
import Gol_page from "./components/Gol_Page/Gol_page";
import Home from "./components/Home/Home";

import Navbar from "./components/Navbar/Navbar";
import Packages_page from "./components/Packages_Page/Packages_page";

function App() {
  return (
    <>
      <div className="w-full px-1 md:px-10 overflow-hidden h-auto ">
        <Navbar />
      </div>

      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/find_reservations_page" element={<Home />} />
        <Route exact path="/gol_page" element={<Gol_page />} />
        <Route exact path="/packages_page" element={<Packages_page />} />
      </Routes>

      <div className="w-full relative">
        <Footer />
      </div>
    </>
  );
}

export default App;
