import Button from "@/components/Button";
import OurTrainers from "@/components/OurTrainers";
import Image from "next/image";

const Trainers = () => {
    return (
        <div>
            <header className=" overflow-hidden text-customWhite   bg-[#1C2128] h-[400px] mx-5 relative mb-10 flex items-center justify-center flex-col ">
                <div className=" relative">

                    <h1 className="  absolute z-1 text-5xl top-1  animate-pulse text-customGray3 text-center stroke pb-5 font-extrabold">
                        Meet our Trainers
                    </h1>
                    <h1 className="  relative z-1 text-5xl max-w-[700px] text-center stroke pb-5 font-extrabold">
                        Meet our Trainers
                    </h1>
                </div>

                <Image
                    src="/images/classes/hero-2.png"
                    width={500}
                    height={500}
                    className=" absolute left-[50px]  opacity-70 w-auto top-0 h-[350px] "
                />
                <Image
                    src="/images/classes/hero-1.png"
                    width={500}
                    height={500}
                    className=" absolute right-0  w-auto opacity-70 top-0 h-[350px] "
                />
                <Image
                    src="/images/homepage/hero-3.png"
                    width={500}
                    height={500}
                    className=" absolute right-[20%]  w-auto opacity-70 -bottom-[100px] h-[350px] "
                />

                <Image
                    src="/images/homepage/hero-image-6.png"
                    width={500}
                    height={500}
                    className=" absolute left-[20px] opacity-70  w-auto bottom-[-100px] h-[250px] "
                />
            </header>
            <OurTrainers number={6} />
            <section className=" bg-customGray4 mt-[200px] pb-[150px]  mb-[200px] ">
                <div className="max-w-[1100px] flex flex-col justify-center items-center gap-10  mx-auto">
                    <Image
                        src="/images/trainers/Video.png"
                        width={500}
                        height={500}
                        className=" h-[450px] object-cover mt-[-100px] w-full "
                    />
                    <div className=" relative z-1 flex items-center gap-4">
                        <Button
                            text="Book a Class"
                            style="  bg-customGreen text-customGray3 "
                        />
                        <Button
                            text="More Class"
                            style=" border border-customWhite text-customWhite "
                            link="/about"
                        />
                    </div>
                </div>

                <div>

                </div>
            </section>
        </div>
    );
}

export default Trainers;