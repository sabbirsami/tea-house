import { NavLink } from "react-router-dom";
import logo from "../../assets/navLogo.png";

const Navbar = () => {
    return (
        // <div className="bg-gradient-to-r from-[#ff8938]/10 to-[#ff0000]/10 ">
        <div className="container mx-auto py-5 mb-6">
            <div className="flex items-center justify-between">
                <img src={logo} alt="" />
                <nav>
                    <ul className="flex items-center  gap-2">
                        <li>
                            <NavLink className={"p-4 text-lg"} to={"/"}>
                                {" "}
                                Home
                            </NavLink>
                        </li>
                        <li>
                            <NavLink className={"p-4 text-lg"} to={"/order"}>
                                {" "}
                                Order
                            </NavLink>
                        </li>
                        <li>
                            <NavLink className={"p-4 text-lg"} to={"/contact"}>
                                {" "}
                                Contact Us
                            </NavLink>
                        </li>
                        <li>
                            <NavLink className={"p-4 text-lg"} to={"/about"}>
                                About Us
                            </NavLink>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
        // </div>
    );
};

export default Navbar;
