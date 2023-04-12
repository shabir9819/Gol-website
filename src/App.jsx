import { Route, Routes } from "react-router";
import "./App.css";
import Footer from "./components/Footer/Footer";
import Gol_page from "./components/Gol_Page/Gol_page";
import Home from "./components/Home/Home";

import Navbar from "./components/Navbar/Navbar";
import Packages_page from "./components/Packages_Page/Packages_page";
import Reservation_Page from "./components/Reservation_Page/Reservation_Page";
import About_Lakshadweep_Page from "./components/About_Lakshadweep_Page/About_Lakshadweep_Page";

function App() {
  return (
    <>
      <div className="w-full overflow-hidden h-auto ">
        <Navbar />
      </div>

      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/find_reservations_page" element={<Reservation_Page />} />
        <Route exact path="/about_lakshadweep_page" element={<About_Lakshadweep_Page />} />
        <Route exact path="/about_us_page" element={<Gol_page />} />
        <Route exact path="/packages_page" element={<Packages_page />} />
      </Routes>

      <div className="w-full relative">
        <Footer />
      </div>
    </>
  );
}

export default App;
