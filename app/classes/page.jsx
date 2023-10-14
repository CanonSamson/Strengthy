import Button from "@/components/Button";
import Trainnings from "@/components/Trainnings";
import Image from "next/image";

const Classes = () => {
  return (
    <div>
      <header className=" overflow-hidden text-customWhite bg-[#1C2128] h-[400px] p-2 md:mx-5 relative mb-10 flex items-center justify-center flex-col ">
        <div className=" relative">
          <h1 className=" absolute  top-1 text-4xl md:text-5xl right-[10px] animate-pulse text-customGray3 z-1 max-w-[400px] text-center stroke pb-5 font-extrabold">
            Classes
          </h1>
          <h1 className="  relative z-1 text-4xl md:text-5xl max-w-[400px] text-center stroke pb-5 font-extrabold">
            Classes
          </h1>
        </div>

        <Image
          src="/images/classes/hero-2.png"
          width={500}
          height={500}
          className=" absolute left-[50px]  opacity-70 w-auto top-0  h-[150px] md:h-[350px] "
        />
        <Image
          src="/images/classes/hero-1.png"
          width={500}
          height={500}
          className=" absolute right-0  w-auto opacity-70 top-0  h-[150px] md:h-[350px] "
        />
        <Image
          src="/images/homepage/hero-3.png"
          width={500}
          height={500}
          className=" absolute right-[20%]  w-auto opacity-70 -bottom-[100px]  h-[150px] md:h-[350px] "
        />

        <Image
          src="/images/homepage/hero-image-6.png"
          width={500}
          height={500}
          className=" absolute left-[20px] opacity-70  w-auto bottom-[-100px] h-[250px] "
        />
      </header>
      <section className=" pb-[100px] relative">
        <Image
          src="/images/homepage/classic-pattern.svg"
          width={696.42}
          height={224.15}
          className=" absolute right-0 top-4 opacity-70  bottom-0  "
        />
        <div className="  max-w-[1100px] px-2 md:px-0 pt-14 mx-auto">
          <div className=" pb-5 text-center">
            <span className=" uppercase   font-medium tracking-[5px] text-customBlue">
              Our Trainers
            </span>
            <h4 className=" text-2xl font-semibold ">We Trained You to Gain</h4>
          </div>
          <Trainnings number={6} />
        </div>
      </section>

      <section className=" bg-classes-image bg-cover text-customWhite  h-[350px] mb-[100px] flex flex-col items-center justify-center text-center relative">
        <div className=" max-w-[450px] mx-auto grid gap-4 ">
          <h3 className=" text-2xl font-semibold">Join Our Club </h3>
          <p>
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. point of
            using Lorem Ipsum is
          </p>
          <Button text="Start Now" style=" bg-customGreen text-customGray3  px-5" />
        </div>
      </section>
    </div>
  );
};

export default Classes;
