import Image from "next/image";

const Schedule = () => {
  return (
    <div>
      <header className=" overflow-hidden text-customWhite   bg-[#1C2128] h-[400px] mx-5 relative mb-10 flex items-center justify-center flex-col ">
        <div className=" relative">
          <h1 className=" absolute  top-1 right-[10px] animate-pulse text-customGray3 z-1 text-5xl max-w-[400px] text-center stroke pb-5 font-extrabold">
            Schedule
          </h1>
          <h1 className="  relative z-1 text-5xl max-w-[400px] text-center stroke pb-5 font-extrabold">
            Schedule
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
    </div>
  );
};

export default Schedule;
