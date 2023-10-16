import { Link, Outlet } from "react-router-dom";

const Dashboard = () => {
    return (
        <div className="container mx-auto">
            <div className="grid grid-cols-5 gap-10">
                <nav className="bg-[#ff8938]/10 py-2 mb-10 rounded-lg h-full flex flex-col justify-between">
                    <ul className="flex flex-col items-start ps-5 py-5  gap-2">
                        <li>
                            <Link
                                className={"p-4 text-lg"}
                                to={"/dashboard/add-product"}
                            >
                                {" "}
                                Add Product
                            </Link>
                        </li>
                        <li>
                            <Link className={"p-4 text-lg"} to={"/order"}>
                                {" "}
                                Order
                            </Link>
                        </li>
                        <li>
                            <Link className={"p-4 text-lg"} to={"/contact"}>
                                {" "}
                                Contact Us
                            </Link>
                        </li>
                        <li>
                            <Link className={"p-4 text-lg"} to={"/about"}>
                                About Us
                            </Link>
                        </li>
                        <li>
                            <Link className={"p-4 text-lg"} to={"/dashboard"}>
                                Dashboard
                            </Link>
                        </li>
                    </ul>
                    <ul className="">
                        <li className="bg-white inline-block ms-10 mb-8">
                            <button
                                className={
                                    " py-2 text-lg  rounded-lg px-8 font-semibold  bg-white text-transparent bg-clip-text bg-gradient-to-r from-[#ff8938] to-[#ff0000]"
                                }
                            >
                                Log Out
                            </button>
                        </li>
                    </ul>
                </nav>

                <div className="col-span-4">
                    <Outlet />
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
