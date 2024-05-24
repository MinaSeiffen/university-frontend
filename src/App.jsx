import {
  BrowserRouter,
  Route,
  Routes,
} from "react-router-dom";
import "./App.css";

import {Toaster} from 'react-hot-toast'

import Home from "./Pages/Home/Home";
import SignUp from "./Pages/SignUp/SignUp"

import Navbar from "./components/Navbar/index"
import Footer from "./components/footer";
import Apply from "./Pages/Apply/Apply";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/apply" element={<Apply />} />
        </Routes>
        {/* <Footer/> */}
        <Toaster />
      </BrowserRouter>
    </>
  );
}

export default App;
