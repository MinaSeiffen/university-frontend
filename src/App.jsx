import { useState } from 'react'
import { BrowserRouter ,Router, Route } from 'react-router-dom'
import './App.css'
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
      <BrowserRouter>
     <Home/>
      </BrowserRouter>
    </>
  );
}

export default App;
