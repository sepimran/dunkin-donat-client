import { createBrowserRouter } from 'react-router-dom';
import Main from '../../Layout/Main';
import Home from '../Home/Home';
import About from '../About/About';
import Foods from '../Foods/Foods';
import Login from '../Login/Login';
import Registration from '../Login/Registration';
import Error from '../Error/Error';
import AddItem from '../Dashboard/AddItem';
import UpdateItem from '../Dashboard/UpdateItem';

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
                    element: <Foods></Foods>
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
                    path: '*',
                    element: <Error></Error>
                },
            ]
        },
        {
            path: '/dashboard/additem',
            element: <AddItem></AddItem>
        },
        {
            path: '/update/:id',
            element: <UpdateItem></UpdateItem>,
            loader: ({params}) => fetch(`http://localhost:5000/food/${params.id}`)
        }

    ]);





export default router;