import { RouterProvider, createBrowserRouter } from "react-router-dom";
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

  return (
    <>
     <RouterProvider router={routes} />
    </>
  )
}

export default App
