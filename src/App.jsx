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

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sign-up" element={<SignUp />} />
        </Routes>
        <Footer/>
        <Toaster />
      </BrowserRouter>
    </>
  );
}

export default App;
