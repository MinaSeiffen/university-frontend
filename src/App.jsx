import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";

import { Toaster } from "react-hot-toast";

import Home from "./Pages/Home/Home";
import Universities from "./Pages/Universties/Universities";
import HowToApply from "./Pages/HowToApply/HowToApply";
import ContactUs from "./Pages/ContactUs/ContactUs";
import Header from "./components/Navbar/index";
import SignUp from "./Pages/SignUp/SignUp";

import Navbar from "./components/Navbar/index";
import Footer from "./components/footer";
import Apply from "./Pages/Apply/Apply";
import Login from "./Pages/Login/Login";

import FindUniversity from "./Pages/Search/FindUniversity";

import LearnMore from "./Pages/Learn More/LearnMore";
import Profile from "./Pages/Profile/Profile";
import useAuthUser from "./Hooks/useAuthUser";
import { useEffect } from "react";


function App() {
  const {getUser , authUser} = useAuthUser()
  useEffect(() => {
    getUser();
  }, []);
  return (
    <>
      <BrowserRouter>
        <Header authUser={authUser} />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
          <Route path="/apply/:id" element={<Apply />} />
          <Route path="/profile" element={<Profile authUser={authUser} />} />
          <Route path='/universities' element={< Universities />} />
          <Route path='/howToApply' element={<HowToApply />} />
          <Route path='/contact_us' element={<ContactUs />} />
          <Route path='/search' element={<FindUniversity/>} />
          <Route path='/learnMore/:id' element={<LearnMore />} />
        </Routes>
        <Footer />
        <Toaster />
      </BrowserRouter>
    </>
  );
}

export default App;
