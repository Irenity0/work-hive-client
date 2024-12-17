import { createBrowserRouter } from "react-router-dom";
import RootLayout from "../Layouts/RootLayout";
import HomePage from "../pages/HomePage";
import ErrorPage from "../pages/ErrorPage";
import Login from "../pages/LoginPage";
import Register from "../pages/ResgisterPage";

const router = createBrowserRouter([
    {
        path: "/",
        element: <RootLayout/>,
        children: [
            {
                path: "/",
                element: <HomePage/>
            },
            {
                path: "/login",
                element: <Login/>
            },
            {
                path: "/register",
                element: <Register/>
            }
        ]
    },
    {
        path: "*",
        element: <ErrorPage/>
    }
]);

export default router;