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
                path: '/eventDetails/:id',
                Component: EventDetails,
                loader: ({ params }) => fetch(`http://localhost:3000/eventDetails/${params.id}`),
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
                loader: ({ params }) => fetch(`http://localhost:3000/created-events/${params.id}`),
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
    }
])