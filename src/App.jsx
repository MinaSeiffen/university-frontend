import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { useState } from 'react'
import './App.css'
import AppLayout from "../AppLayout";
import Home from './Pages/Home/Home'


const routes = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      { path: "", index: true, element: <Home /> },
    
    ],
  },
]);
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <RouterProvider router={routes} />
    </>
  )
}

export default App
