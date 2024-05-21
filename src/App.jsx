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

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sign-up" element={<SignUp />} />
        </Routes>
        <Toaster />
      </BrowserRouter>
    </>
  );
}

export default App;
