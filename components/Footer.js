import Link from "next/link";
import Button from "./Button";
import Image from "next/image";
import Icon from "./Icon";

const Footer = () => {
    return (
        <footer className=" bg-customGray text-customWhite text-sm ">
            <div className=" flex text-center text-2xl md:text-4xl font-bold items-center bg-footer-image h-[220px] justify-center w-full">
                <span>Follow me on <strong className=" underline">Instagram</strong></span>
            </div>
            <div className="  max-w-[1100px]  mx-auto">

                <div className="md:px-0 px-2 grid md:grid-cols-3 max-w-[1200px] py-[100px] mx-auto gap-10">
                    <div>
                        <Link href="/">
                            <Image src="/images/logo-v2.svg" alt="Logo" width={100} height={50} />
                        </Link>
                        <p className=" mt-4">It is a long established fact that a reader will be distracted by the readable.</p>
                        <div className=" mt-10 w-full border   p-5 grid gap-4 border-[#485059] bg-[#242A32]">
                            <div >
                                <span className=" text-customGreen">Call:</span>
                                <ul>
                                    <li>01234 987654</li>
                                    <li>098765 34621</li>
                                </ul>
                            </div>
                            <div className=" grid">
                                <span className=" text-customGreen">Mail:</span>
                                <span>contact@fitnessfit.com</span>
                            </div>
                        </div>
                    </div>
                    <div>
                        <span className=" text-base font-medium">Utility Pages</span>
                        <ul className=" grid gap-3 mt-10">
                            <li>
                                <Link href="/style-guide">
                                    Style Guide
                                </Link>
                            </li>
                            <li>
                                <Link href="/changelog">
                                    Changelog
                                </Link>
                            </li>
                            <li>
                                <Link href="/404">
                                    404 Page
                                </Link>
                            </li>
                            <li>
                                <Link href="/password-protected">
                                    Password Protected
                                </Link>
                            </li>
                            <li>
                                <Link href="/licenses">
                                    Licenses
                                </Link>
                            </li>
                            <li>
                                <Link href="/contact">
                                    Contact
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <span className=" text-base font-medium">Utility Pages</span>
                        <form className="  mt-10 pb-5  grid gap-4">
                            <input className=" w-full border  h-[45px] px-4 border-[#485059] bg-[#242A32]  " placeholder="Enter your email" />
                            <Button text="Subscribe" style="bg-customGreen text-customGray " />
                        </form>
                        <ul className=" flex gap-2">
                            <li>
                                <Link href="">
                                    <Icon name="facebook" />
                                </Link>
                            </li>
                            <li>
                                <Link href="">
                                    <Icon name="twitter" />
                                </Link>
                            </li>
                            <li>
                                <Link href="">
                                    <Icon name="github" />
                                </Link>
                            </li>
                        </ul>
                        <div className=" flex mt-10 items-center gap-4">
                            <span className=" flex-1 flex relative bg-[#485059] h-[1px] w-full"></span>
                            <button className=" h-[40px] w-[40px] border border-[#485059] rounded-full flex items-center justify-center">
                                <Icon name="up" size={24} className="text-customWhite" />
                            </button>
                        </div>
                    </div>
                </div>

            </div>
            <div className=" flex justify-center items-center h-[60px] bg-customWhite text-customGray3">
                <span>Copyright © <Link href="" className="  text-customBlue"> FitnessFit</Link> | Designed byVictorFlow Templates - Powered by Webflow </span>
            </div>
        </footer>
    );
}

export default Footer;