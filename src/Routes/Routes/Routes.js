import { createBrowserRouter } from "react-router-dom"
import Main from "../../Layouts/Main"
import Home from "../../Pages/Home/Home/Home"
import Media from "../../Pages/Media/Media";
import Login from "../../Pages/Shares/Login/Login";
import Signup from "../../Pages/Shares/Signup/Signup";


const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/signup',
                element: <Signup></Signup>
            },
            {
                path: '/media',
                element: <Media></Media>
            }
        ]
    }
])
export default router;