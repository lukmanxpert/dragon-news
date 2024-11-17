import { createBrowserRouter, Navigate } from "react-router-dom";
import MainPages from "../pages/MainPages";
import Home from "../pages/Home";
import About from "../../About";
import Career from "../pages/Career";
import ErrorElement from "../components/ErrorElement";
import CategoryNews from "../components/CategoryNews";
import LoginPage from "../pages/LoginPage";
import Register from "../pages/Register";

const router = createBrowserRouter([
    {
        path: '/',
        element: <MainPages></MainPages>,
        children: [
            {
                path: '/',
                element: <Navigate to='home/category/01'></Navigate>
            },
            {
                path: '/home',
                element: <Home></Home>,
                children: [
                    {
                        path: 'category/:id',
                        element: <CategoryNews></CategoryNews>
                    }
                ]
            },
            {
                path: '/about',
                element: <About></About>
            },
            {
                path: '/career',
                element: <Career></Career>
            }
        ]
    },
    {
        path: '/login',
        element: <LoginPage></LoginPage>
    },
    {
        path: 'register',
        element: <Register></Register>
    },
    {
        path: '*',
        element: <ErrorElement></ErrorElement>
    }
])
export default router;