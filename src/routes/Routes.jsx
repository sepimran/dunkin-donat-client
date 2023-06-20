import { createBrowserRouter } from 'react-router-dom';
import React from 'react';
import Main from '../Layout/Main';
import Home from '../pages/Home/Home';
import About from '../pages/About/About';
import Foods from '../pages/Foods/Foods';
import Login from '../pages/Login/Login';
import Registration from '../pages/Login/Registration';
import SingleFoodDetails from '../pages/SingleFoodDetails/SingleFoodDetails';
import Error from '../pages/Error/Error';
import AddItem from '../pages/Dashboard/AddItem';
import UpdateItem from '../pages/Dashboard/UpdateItem';
import PrivateRoute from './PrivateRoute';


const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: () => fetch('http://localhost:5000/foods')
            },
            {
                path: '/about',
                element: <About></About>
            },
            {
                path: '/contact',
                element: <p>Contact</p>
            },
            {
                path: '/foods',
                element: <Foods></Foods>,
                loader: () => fetch('http://localhost:5000/foods')
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/registration',
                element: <Registration></Registration>
            },
            {
                path: '/food/:id',
                element: <PrivateRoute><SingleFoodDetails></SingleFoodDetails></PrivateRoute>,
                loader: ({params}) => fetch(`http://localhost:5000/food/${params.id}`)
            },
            {
                path: '*',
                element: <Error></Error>
            },
        ]
    },
    {
        path: '/dashboard/additem',
        element: <PrivateRoute><AddItem></AddItem></PrivateRoute>
    },
    {
        path: '/update/:id',
        element: <PrivateRoute><UpdateItem></UpdateItem></PrivateRoute>,
        loader: ({params}) => fetch(`http://localhost:5000/food/${params.id}`)
    }
    

]);





export default router;