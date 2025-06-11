import { createBrowserRouter } from "react-router";
import RootLayout from "../layouts/RootLayout";
import Home from "../Pages/Home/Home";
import Register from "../Pages/Register/Register";
import SignIn from "../Pages/SignIn/SignIn";
import UpcomingEvents from "../Pages/Home/UpcomingEvents";
import EventDetails from "../Pages/EventDetails/EventDetails";
import JoinEvent from "../Pages/JoinEvent/JoinEvent";
import PrivateRoute from "../route/PrivateRoute";
import JoinedEvents from "../Pages/JoinedEvents/JoinedEvents";
import AddEvent from "../Pages/AddEvent/AddEvent";
import ManageEvents from "../Pages/ManageEvents/ManageEvents";
import Loading from "../components/Loader/Loading";
import UpdateEvent from "../Pages/ManageEvents/UpdateEvent";
import NotFound from "../Pages/NotFound/NotFound";
import About from "../Pages/About/About";

export const router = createBrowserRouter([
    {
        path: '/',
        Component: RootLayout,
        children: [
            {
                index: true,
                Component: Home
            },
            {
                path: '/upcomingEvents',
                Component: UpcomingEvents
            },
            {
                path: '/about',
                Component: About
            },
            {
                path: '/eventDetails/:id',
                element: <PrivateRoute><EventDetails></EventDetails></PrivateRoute>,
                loader: ({ params }) => fetch(`${import.meta.env.VITE_API_URL}/eventDetails/${params.id}`, {
                    credentials: 'include'
                }),
                hydrateFallbackElement: <Loading></Loading>
            },
            {
                path: '/joinEvent/:id',
                element: <PrivateRoute><JoinEvent></JoinEvent></PrivateRoute>
            },
            {
                path: '/joinedEvents',
                element: <PrivateRoute><JoinedEvents></JoinedEvents></PrivateRoute>
            },
            {
                path: '/addEvent',
                element: <PrivateRoute><AddEvent></AddEvent></PrivateRoute>
            },
            {
                path: '/manageEvents',
                element: <PrivateRoute><ManageEvents></ManageEvents></PrivateRoute>
            },
            {
                path: '/updateEvent/:id',
                element: <PrivateRoute><UpdateEvent></UpdateEvent></PrivateRoute>,
                loader: ({ params }) => fetch(`${import.meta.env.VITE_API_URL}/created-events/${params.id}`, {
                    credentials: 'include'
                }),
            },
            {
                path: 'register',
                Component: Register
            },
            {
                path: '/signin',
                Component: SignIn
            }
        ]
    },
    {
        path: '*',
        Component: NotFound
    }
])