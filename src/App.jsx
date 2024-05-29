import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import AppLayout from "./AppLayout";
import { Toaster } from "react-hot-toast";

import Home from "./Pages/Home/Home";
import Universities from "./Pages/Universties/Universities";
import HowToApply from "./Pages/HowToApply/HowToApply";
import ContactUs from "./Pages/ContactUs/ContactUs";
import SignUp from "./Pages/SignUp/SignUp";

import Apply from "./Pages/Apply/Apply";
import Login from "./Pages/Login/Login";

import FindUniversity from "./Pages/Search/FindUniversity";

import LearnMore from "./Pages/Learn More/LearnMore";
import Profile from "./Pages/Profile/Profile";
import useAuthUser from "./Hooks/useAuthUser";
import { useEffect } from "react";

function App() {
  const { getUser, authUser } = useAuthUser();
  useEffect(() => {
    getUser();
  }, []);
  const routes = createBrowserRouter([
    {
      path: "/",
      element: <AppLayout />,
      children: [
        { path: "", element: <Home /> },
        { path: "/apply/:id", element: <Apply /> },
        { path: "/profile", element: <Profile authUser={authUser} /> },
        { path: "/universities", element: <Universities /> },
        { path: "/howToApply", element: <HowToApply /> },

        { path: "/contact_us", element: <ContactUs /> },

        { path: "/search", element: <FindUniversity /> },
        { path: "/learnMore/:id", element: <LearnMore /> },
      ],
    },
    { path: "/login", element: <Login /> },
    { path: "/sign-up", element: <SignUp /> },
  ]);

  return (
    <>
      <RouterProvider router={routes} />
      <Toaster />
    </>
  );
}

export default App;
