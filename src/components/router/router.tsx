import { createBrowserRouter } from "react-router";
import AppLayout from "../layout/AppLayout";
import HomePage from "../pages/home/home";

export const router = createBrowserRouter([
    {
        path: '/',
        Component: AppLayout,
        children: [
            {
                index: true,
                Component: HomePage,
            }
        ]
    },
]);