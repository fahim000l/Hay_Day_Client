import { createBrowserRouter } from "react-router-dom";
import AllServices from "../components/AllServices/AllServices";
import Home from "../components/Home/Home";
import Main from "../LayOuts/Main/Main";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/services',
                element: <AllServices></AllServices>
            }
        ]
    }
]);