import { createBrowserRouter } from "react-router-dom";
import Root from "../Root/Root";
import Home from "../Components/Home/Home";
import Dashboard from "../Components/Dashboard/Dashboard";
import AddProduct from "../Components/Dashboard/AddProduct";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        children: [
            {
                path: "/",
                element: <Home />,
            },
            {
                path: "/dashboard",
                element: <Dashboard />,
                children: [
                    {
                        path: "add-product",
                        element: <AddProduct />,
                    },
                ],
            },
        ],
    },
]);

export default router;
