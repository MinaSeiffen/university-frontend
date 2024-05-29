import React, { useEffect } from "react";
import { Outlet } from "react-router-dom";
import Footer from "./components/footer";
import Navbar from "./components/Navbar";
import useAuthUser from "./Hooks/useAuthUser";

export default function AppLayout() {
  const { getUser, authUser } = useAuthUser();
  useEffect(() => {
    getUser();
  }, [getUser]);
  return (
    <>
      <Navbar authUser={authUser} />
      <Outlet />
      <Footer />
    </>
  );
}
