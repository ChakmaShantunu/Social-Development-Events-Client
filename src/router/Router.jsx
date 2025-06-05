import { createBrowserRouter } from "react-router";
import RootLayout from "../layouts/RootLayout";
import Home from "../Pages/Home/Home";
import Register from "../Pages/Register/Register";
import SignIn from "../Pages/SignIn/SignIn";
import UpcomingEvents from "../Pages/Home/UpcomingEvents";
import EventDetails from "../Pages/EventDetails/EventDetails";

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
                Component: EventDetails
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