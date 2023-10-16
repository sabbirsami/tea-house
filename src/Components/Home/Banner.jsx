import bannerImage from "../../assets/banner.png";
import { HiOutlineArrowRight } from "react-icons/hi";
import { GoStarFill } from "react-icons/go";
const Banner = () => {
    return (
        <div className="container mx-auto py-32">
            <div className="grid grid-cols-2 items-end justify-between py-10">
                <div className="">
                    <h2 className="text-8xl font-semibold ">
                        It&#39;s good <br /> tea time at The Tea House
                    </h2>
                    <p className=" py-6 w-3/4 text-lg text-gray-600">
                        People all over the world have been drinking tea for
                        thousands of centuries, and for good reason. Numerous
                        studies have shown that a variety of teas may boost your
                        immune system, fight off inflammation, and even ward off
                        cancer and heart disease.
                    </p>
                    <button className="py-3 px-8 bg-gradient-to-r from-[#ff8938] to-[#ff0000] rounded-lg text-white text-lg flex items-center gap-3">
                        Buy Now <HiOutlineArrowRight />
                    </button>
                </div>
                <div className=" text-end items-end ms-auto relative">
                    <img src={bannerImage} alt="" />
                    <div className="inline-block rounded-md shadow-md absolute bottom-0 left-16 bg-white">
                        <div className="flex text-start gap-4 p-5">
                            <div className="bg-[#ff8938]/10 inline-block rounded-full text-[#ff8938]">
                                <GoStarFill className="text-4xl m-3" />
                            </div>
                            <div className="">
                                <h4 className="text-2xl font-bold">5.00</h4>
                                <p className="text-lg text-gray-600">
                                    Trust Pilot Ratings
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;
