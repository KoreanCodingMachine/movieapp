import {createBrowserRouter,RouterProvider} from "react-router-dom";
import {Detail, Main} from "./pages";


export const router = createBrowserRouter([
    {
        path:'/',
        element: <Main />
    },
    {
        path:'/:movie_id',
        element: <Detail />
    }
])