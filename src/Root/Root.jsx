import { Outlet } from "react-router-dom";
import Navbar from "../Components/Home/Navbar";

const Root = () => {
    return (
        <>
            <Navbar />
            <Outlet />
        </>
    );
};

export default Root;
