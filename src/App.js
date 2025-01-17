import './App.css';
import {
  createBrowserRouter,
  // createRoutesFromElements,
  // Route,
  RouterProvider,
} from "react-router-dom";
import { CustomProductContext } from './productContext';
import Items from "./pages/Items";
import CartModal from "./pages/CartModal";
import Signin from './pages/userSignin';
import Signup from './pages/userSignup';
import Navbar from "./components/navbar";
import Footer from './components/footer';

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: [<Navbar />,<Footer />],
      children: [
        { index: true, element: <Items /> },
        { path: "/cart", element: <CartModal /> },
        { path: "/signin", element: <Signin /> },
        { path: "/signup", element: <Signup /> },
      ],
    },
  ]);
  return (
    <>
      <CustomProductContext>
        <RouterProvider router={router} />
      </CustomProductContext>
    </>
  );
}

export default App;
