import {createBrowserRouter} from "react-router-dom";
import Home from "../pages/Home.tsx";
import Layout from "../pages/Layout/Layout.tsx";
import About from "../pages/About.tsx";
//import Meet from "../pages/Meet.tsx";
import Portfolio from "../pages/Portfolio.tsx";
//import HorrorMakeup from "../pages/HorrorMakeup.tsx";
//import ClassicMakeup from "../pages/ClassicMakeup.tsx";
//import ScarMakeup from "../pages/ScarMakeup.tsx";

export const Router = createBrowserRouter([
    {
        path: "/",
        element: <Layout/>,
        children: [
            {
                path: "/",
                element: <Home/>,
            },
            {
                path: "/About",
                element: <About/>,
            },
            /*{
                path: "/Contact",
                element: <Meet/>,
            },*/
            {
                path: "/Portfolio",
                element: <Portfolio/>,
            },
            /*{
                path: "/Horror",
                element: <HorrorMakeup/>,
            },
            {
                path: "/Classic",
                element: <ClassicMakeup/>,
            },
            {
                path: "/Scar",
                element: <ScarMakeup/>,
            }*/
        ]
    }
]);

export default Router;