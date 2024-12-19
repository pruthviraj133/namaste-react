
import React, { useMemo, lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
// import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import RestrauntMenu from "./components/RestaurantMenu";
// import Grocery from "./components/Grocery";

import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";

// this object declared can be proivded as input to card as style
// const styleCard = {
//     backgroundColor: "#f0f0f0",
// }

// Chunking
// code splitting
// dynamic loading
// lazy loading
// on-demand loading
// dynamic loading

const Grocery = lazy(() => import("./components/Grocery"));
const About = lazy(() => import("./components/About"))

const AppLayout = () => {
  
    return (
        <div className="app">
            <Header />
            <Outlet />
        </div>
    );
};

const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <AppLayout />,
        children: [
            {
                path: "/",
                element: <Body />,
            },
            {
                path: "/about",
                element: (
                <Suspense fallback={<h1>Loading...</h1>}>
                    <About />
                </Suspense>
                ),
            },
            {
                path: "/contact",
                element: <Contact />,
            },
            {
                path: "/grocery",
                element: (
                <Suspense fallback={<h1>Loading...</h1>}>
                    <Grocery />
                    </Suspense>
                ),
            },
            {
                path: "/city/bengaluru/:resId",
                element: <RestrauntMenu />,
            }
        ],
        errorElement: <Error />,
    },
    
])

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);

