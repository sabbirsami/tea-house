import { useState } from "react";
// import tea from "../../assets/blog1.png";
import { HiOutlineArrowUpTray } from "react-icons/hi2";

const AddProduct = () => {
    const [file, setFile] = useState();
    function handleChange(e) {
        console.log(e.target.files);
        setFile(URL.createObjectURL(e.target.files[0]));
    }
    return (
        <div>
            <form className="">
                <div className="grid grid-cols-3 gap-6">
                    <div className="">
                        <div className="border p-2 rounded-lg items-center h-96  w-full">
                            <img
                                className="object-cover rounded-lg w-full h-full mx-auto my-auto mb-0"
                                src={file}
                                alt=""
                            />
                        </div>
                        <div className="mt-6">
                            <label
                                htmlFor="files"
                                className="block cursor-pointer border w-full rounded-lg py-3 text-center font-semibold"
                            >
                                Upload Photo{" "}
                                <HiOutlineArrowUpTray className="inline text-lg ms-2" />
                            </label>
                            <input
                                type="file"
                                name="file"
                                onChange={handleChange}
                                id="files"
                                className="border hidden w-full rounded-lg py-3 text-center font-semibold"
                            />
                        </div>

                        <label
                            htmlFor="photoUrl"
                            className="block md:w-96 w-full pb-2 pt-8 font-semibold"
                        >
                            Photo URL
                        </label>
                        <input
                            type="text"
                            name="photoUrl"
                            required
                            className="border rounded-md w-full py-3  px-4 bg-slate-100"
                            placeholder="Enter photo URL"
                        />
                    </div>
                    <div className=" col-span-2">
                        <div className=" border rounded-lg md:px-10 p-6">
                            <label
                                htmlFor="name"
                                className="block md:w-96 w-full pb-2 font-semibold"
                            >
                                Product Name
                            </label>
                            <input
                                type="text"
                                name="name"
                                required
                                className="border rounded-md w-full py-3  px-4 bg-slate-100"
                                placeholder="Enter product name"
                            />
                            <label
                                htmlFor="price"
                                className="block w-full pb-2  pt-8 font-semibold"
                            >
                                Price
                            </label>
                            <input
                                type="price"
                                name="price"
                                required
                                className="border rounded-md w-full py-3 px-4 bg-slate-100"
                                placeholder="Enter your email address"
                            />
                            <div className="grid grid-cols-2 gap-5 ">
                                <div>
                                    <label
                                        htmlFor="chef"
                                        className="block w-full pb-2  pt-8 font-semibold"
                                    >
                                        Chef
                                    </label>
                                    <input
                                        type="chef"
                                        name="chef"
                                        required
                                        className="border rounded-md w-full py-3 px-4 bg-slate-100"
                                        placeholder="Enter tea chef"
                                    />
                                </div>
                                <div>
                                    <label
                                        htmlFor="supplier"
                                        className="block w-full pb-2  pt-8 font-semibold"
                                    >
                                        Supplier
                                    </label>
                                    <input
                                        type="supplier"
                                        name="supplier"
                                        required
                                        className="border rounded-md w-full py-3 px-4 bg-slate-100"
                                        placeholder="Enter tea supplier"
                                    />
                                </div>
                            </div>
                            <label
                                htmlFor="category"
                                className="block w-full pb-2  pt-8 font-semibold"
                            >
                                Category
                            </label>
                            <input
                                type="category"
                                name="category"
                                required
                                className="border rounded-md w-full py-3 px-4 bg-slate-100"
                                placeholder="Enter tea category"
                            />
                            <label
                                htmlFor="name"
                                className="block md:w-96 w-full pb-2 pt-8 font-semibold"
                            >
                                Product details
                            </label>
                            <textarea
                                name="description"
                                cols="30"
                                rows="8"
                                required
                                className="border rounded-md w-full py-3  px-4 bg-slate-100"
                                placeholder="Product details....."
                            />
                            <button
                                type="submit"
                                className="w-full mt-8 py-3 bg-gradient-to-r from-[#ff8938] to-[#ff0000] text-white rounded-md"
                            >
                                Add Product
                            </button>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default AddProduct;
