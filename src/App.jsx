import {
  BrowserRouter,
  Route,
  Routes,
} from "react-router-dom";
import "./App.css";

import { Toaster } from 'react-hot-toast'

import Home from "./Pages/Home/Home";
import Universities from './Pages/Universties/Universities'
import HowToApply from './Pages/HowToApply/HowToApply'
import ContactUs from './Pages/ContactUs/ContactUs'
import Header from './components/Navbar/index'
import SignUp from "./Pages/SignUp/SignUp"

import Navbar from "./components/Navbar/index"
import Footer from "./components/footer";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/home' element={<Home />} />
          <Route path='/universities' element={< Universities />} />
          <Route path='/how_to_apply' element={<HowToApply />} />
          <Route path='/contact_us' element={<ContactUs />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
