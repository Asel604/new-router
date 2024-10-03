import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Notfound from "./pages/Notfound";
import Service from "./pages/Service";
import Layout from "./components/Layout/Layout";
import ProductDetail from "./pages/ProductDetail";
import Profile from "./pages/Profile";
import Main from "./pages/Main";
import Example from "./pages/example";
import CreateProduct from "./pages/CreateProduct";

export const myRouter = createBrowserRouter([
    {path:"/",
        element:<Layout/>,
        children:[
            {path:"/",
                element: <Home />
             },
             {
                path:"about",
                element: <About/>
            },
            {
                path:"contact",
                element: <Contact/>
            },
            {
                path:"*",
                element: <Notfound/>
            },
            {
                path:"service",
                element: <Service/>
            },
            {
                path:"product/:id",
                element: <ProductDetail />
            },
            {
                path:"profile",
                element: <Profile />
            },
            {
                path:"main",
                element: <Main />
            },
            {
                path:"example",
                element: <Example />
            },
            {
                path:"createProduct",
                element: <CreateProduct />
            },
        ]
    }
])