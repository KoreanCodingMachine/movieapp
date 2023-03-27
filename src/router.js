import {createBrowserRouter,RouterProvider} from "react-router-dom";
import {Detail, Main , Main2} from "./pages";



export const router = createBrowserRouter([
    {
        path:'/',
        element: <Main />
    },
    {
        path:'/:movie_id',
        element: <Detail />
    },
    {
        path:'/2',
        element: <Main2 />
    }
])