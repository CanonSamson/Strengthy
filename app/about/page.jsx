import Button from "@/components/Button";
import OurTrainers from "@/components/OurTrainers";
import ValuesCard from "@/components/ValuesCard";
import Image from "next/image";

export default function About() {
  return (
    <main className="">
      <header className=" overflow-hidden text-customWhite   bg-[#1C2128] h-[400px] p-21 md:mx-5 relative mb-10 flex items-center pt-[100px] flex-col ">
        <div className=" relative">
          <h1 className="absolute w-full top-1  text-4xl md:text-5xl opacity-30 animate-pulse z-0  stroke max-w-[700px] text-center text-customGray3  pb-5 font-extrabold">
            Start with us the body and mind cleansing
          </h1>

          <h1 className=" w-full  relative z-1 text-4xl md:text-5xl max-w-[700px] text-center stroke pb-5 font-extrabold">
            Start with us the body and mind cleansing
          </h1>
        </div>

        <Image
          src="/images/homepage/hero-3.png"
          width={500}
          height={500}
          className=" absolute right-0  w-auto opacity-70 -top-[50px]  h-[150px] md:h-[350px]  "
        />
        <Image
          src="/images/homepage/hero-5.png"
          width={500}
          height={500}
          className=" absolute -left-[20%] -bottom-20  w-auto opacity-20   h-[150px] md:h-[350px]  "
        />
        <Image
          src="/images/homepage/hero-image-6.png"
          width={500}
          height={500}
          className=" absolute left-0 opacity-70  w-auto bottom-0  h-[150px] md:h-[350px]  "
        />
      </header>
      <section className=" relative">
        <div className=" shadow-lg grid grid-cols-3 mx-2 max-w-[800px] bg-white p-7 gap-7 md:mx-auto relative -mt-[203px]">
          <Image
            src="/images/aboutpage/1.png"
            width={500}
            height={500}
            className="  h-[150px] md:h-[350px]  w-full object-cover"
          />
          <Image
            src="/images/aboutpage/2.png"
            width={500}
            height={500}
            className=" h-[150px] md:h-[350px]  w-full object-cover col-span-2"
          />
        </div>
        <Image
          src="/images/aboutpage/Story.svg"
          width={600.42}
          height={224.15}
          className=" absolute  pb-[100px] right-0 z-10 bottom-[-250px] opacity-70   "
        />
      </section>
      <section>
        <div className=" grid md:px-0 px-2 md:grid-cols-2 gap-5 md:gap-10 text-sm   max-w-[1100px] mx-auto py-[100px]">
          <div>
            <span className="tracking-[4px] text-customGreen uppercase font-medium">
              Welcome
            </span>
            <h2 className=" text-2xl md:text-4xl font-semibold w-[300px]">
              The Story Behind Our Gym
            </h2>
            <p className=" my-2 pb-5 md:my-5">
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. point
              of using Lorem Ipsum is
            </p>

            <div className=" bg-customWhite p-5 md:p-10">
              <h4 className=" text-xl font-bold">Story</h4>
              <p className=" my-5">
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its
                layout.point of using Lorem Ipsum.
              </p>
              <Image
                src="/images/aboutpage/story-photo.png"
                width={500}
                height={500}
                className=" h-[180px] object-cover w-full"
              />
            </div>
          </div>
          <div>
            <div className=" gap-5 md:gap-10 grid col-span-1 h-full row-span-3 relative z-10">
              <div className="row-span-2  relative overflow-hidden flex flex-col justify-end text-customWhite p-10">
                <div className=" relative z-10">
                  <h4 className=" text-xl font-bold">Our Mission</h4>
                  <p>
                    It is a long established fact that a reader will be
                    distracted by the readable content of a page when looking at
                    its layout.point of using Lorem Ipsum.
                  </p>
                </div>
                <Image
                  src="/images/aboutpage/mission.png"
                  width={600}
                  height={600}
                  alt="mission"
                  className="w-full top-0 right-0 h-full object-cover absolute"
                />
              </div>
              <div className=" bg-customGreen flex  flex-col justify-center p-10">
                <h4 className=" text-xl font-bold">Our Value</h4>
                <p>
                  It is a long established fact that a reader will be distracted
                  by the readable content of a page when looking at its
                  layout.point of using Lorem Ipsum.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className=" bg-customGray4 text-customWhite">
        <div className=" bg-cover  bg-about-image w-full h-[350px] flex relative ">
          <Image
            src="/images/aboutpage/about-svg.svg"
            width={1300.42}
            height={224.15}
            className="  right-0 z-10   "
          />
        </div>
        <div className=" px-2 gap-10 text-sm   max-w-[1100px] mx-auto py-[100px]">
          <div>
            <div className=" relative z-1 flex items-center justify-between ">
              <div>
                <p className=" text-customBlue text-xs  uppercase tracking-[4px]">
                  Values
                </p>
                <h2 className=" text-xl md:text-2xl font-medium">My core work values</h2>
              </div>
              <Button
                text="Book a Class"
                style=" text-customGray bg-customGreen md:px-[30px]"
              />
            </div>
            <div className=" mt-[20px] grid md:grid-cols-3 gap-5 md:gap-10">
              <ValuesCard
                heading="Certified trainer"
                text="Bring to the table win survival
                strategies ensure proactive
                new domination."
                image="/images/aboutpage/icon-1.svg"
              />
              <ValuesCard
                heading="Nutrition & diet"
                text="Bring to the table win survival
                strategies ensure proactive
                new domination."
                image="/images/aboutpage/icon-2.svg"
              />
              <ValuesCard
                heading="Years of experience"
                text="Bring to the table win survival
                strategies ensure proactive
                new domination."
                image="/images/aboutpage/icon-3.svg"
              />
            </div>
          </div>
        </div>
      </section>
      <div className=" gap-10    max-w-[1100px] mx-auto  text-sm">
        <div className=" grid grid-cols-4 border-b border-l">
          <div className=" flex items-center py-5 px-21 md:py-10 flex-col border-r">
            <span className=" text-xl md:text-6xl font-black">10+</span>
            <span className=" text-[10px] md:text-sm text-center">Year of Experience</span>
          </div>
          <div className=" flex items-center py-5 px-21 md:py-10 flex-col border-r">
            <span className=" text-xl md:text-6xl font-black">500+</span>
            <span className=" text-[10px] md:text-sm text-center">Happy Clients</span>
          </div>
          <div className=" flex items-center py-5 px-21 md:py-10 flex-col border-r">
            <span className=" text-xl md:text-6xl font-black">50+</span>
            <span className=" text-[10px] md:text-sm text-center">Expert Trainers</span>
          </div>
          <div className=" flex items-center py-5 px-21 md:py-10 flex-col border-r">
            <span className=" text-xl md:text-6xl font-black">15+</span>
            <span className=" text-[10px] md:text-sm text-center">Instagram followers</span>
          </div>
        </div>
      </div>

      <OurTrainers />
    </main>
  );
}
