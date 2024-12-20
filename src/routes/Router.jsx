import { createBrowserRouter } from "react-router-dom";
import RootLayout from "../Layouts/RootLayout";
import HomePage from "../pages/HomePage";
import ErrorPage from "../pages/ErrorPage";
import Login from "../pages/LoginPage";
import Register from "../pages/ResgisterPage";
import JobDetails from "../pages/JobDetails";
import PrivateRoute from "../Layouts/PrivateRoute";
import JobApply from "../pages/JobApply";
import MyApplications from "../pages/MyApplications";
import AddJob from "../pages/AddJob";
import MyPostedJobs from "../pages/MyPostedJobs";
import ViewApplications from "../pages/ViewApplications";

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
                path: "jobs/:id",
                element: <PrivateRoute><JobDetails/></PrivateRoute>,
                loader: ({params}) => fetch(`http://localhost:5000/jobs/${params.id}`)
            },
            {
                path: '/jobApply/:id',
                element: <PrivateRoute><JobApply></JobApply></PrivateRoute>
                  
            },
            {
                path: '/myApplications',
                element: <PrivateRoute><MyApplications/></PrivateRoute>
                
            },
            {
                path: 'addJob',
                element: <PrivateRoute><AddJob/></PrivateRoute>
            },
            {
                path: 'myPostedJobs',
                element: <PrivateRoute><MyPostedJobs/></PrivateRoute>
            },
            {
                path: 'viewApplications/:job_id',
                element: <PrivateRoute><ViewApplications/></PrivateRoute>,
                loader: ({ params }) => fetch(`http://localhost:5000/job-applications/jobs/${params.job_id}`)
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