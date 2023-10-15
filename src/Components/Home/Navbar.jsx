import { NavLink } from "react-router-dom";
import logo from "../../assets/navLogo.png";

const Navbar = () => {
    return (
        <div className="py-5 ">
            {/* bg-gradient-to-r from-[#ff0000] to-[#ff8938] */}
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
    );
};

export default Navbar;
