"use client";
import Button from "@/components/Button";
import Input from "@/components/Input";
import Trainnings from "@/components/Trainnings";
import { trainersData } from "@/data/trainersData";
import Image from "next/image";
import { useEffect, useState } from "react";

const Trainer = ({ params }) => {
  const [trainer, setTrainer] = useState({});
  useEffect(() => {
    const trainerDB = trainersData.find((t) => t.id == params.id);
    setTrainer(trainerDB);
  }, []);
  return (
    <div>
      <header className=" overflow-hidden text-customWhite   bg-[#1C2128] h-[400px] md:mx-5 relative md:mb-10 flex items-center justify-center flex-col ">
        <div className=" relative z-20 mx-4 md:mx-0">
          <h1 className=" absolute  top-1 animate-pulse text-customGray3 z-1 text-4xl md:text-5xl max-w-[400px] text-center stroke md:pb-5 font-extrabold">
            {trainer.name}
          </h1>
          <h1 className="  relative z-1 text-4xl md:text-5xl max-w-[400px] text-center stroke pb-5 font-extrabold">
            {trainer.name}
          </h1>
        </div>

        <Image
          src="/images/homepage/hero-2.png"
          width={500}
          height={500}
          className=" w-auto  md:h-[350px] absolute left-[50px]  opacity-70 top-0 h-[100px] "
        />
        <Image
          src="/images/homepage/hero-4.png"
          width={500}
          height={500}
          className="md:h-[350px]  absolute right-0  w-auto opacity-70 top-0 h-[100px] "
        />
        <Image
          src="/images/homepage/hero-3.png"
          width={500}
          height={500}
          className="md:h-[350px] absolute right-0  w-auto opacity-70 -top-[50px] h-[100px] "
        />
        <Image
          src="/images/homepage/hero-5.png"
          width={500}
          height={500}
          className=" md:h-[350px]  absolute right-0 opacity-70  w-auto bottom-0 h-[100px] "
        />
        <Image
          src="/images/homepage/hero-1.png"
          width={500}
          height={500}
          className="md:h-[250px]  absolute left-0 opacity-70  w-auto bottom-0 h-[100px] "
        />
      </header>
      <section>
        <div className="max-w-[1100px] text-sm pt-14 mx-auto gap-10 px-2 md:px-0 md:grid md:grid-cols-3">
          <div className="">
            <Image
              src={trainer.image}
              width={400}
              height={400}
              alt={trainer.name}
              className=" h-[320px] object-cover object-top w-full"
              placeholder="blur"
              loading="lazy"
              blurDataURL={`data:${trainer.image}`}
            />
            <div>
              <h4 className=" text-xl font-semibold mt-4">{trainer.name}</h4>
              <p>{trainer.specialisations}</p>
            </div>
            <ul className=" grid gap-4 mt-10">
              <li>
                <strong>Phone: </strong> {trainer.phone}
              </li>
              <li>
                <strong>Email: </strong> {trainer.email}
              </li>
              <li>
                <strong>Location:</strong> {trainer.location}
              </li>
            </ul>
          </div>
          <div className=" col-span-2 gap-2 grid pb-[200px]">
            <h2 className=" text-2xl font-semibold">Personal Details</h2>
            <p>{trainer.personalDetails}</p>
            <h3 className=" text-xl font-semibold">
              The Healthy Life Style For All
            </h3>
            <p>{trainer.theHealthyLife?.text}</p>
            <ul className=" grid list-disc gap-2 py-5">
              {trainer.theHealthyLife?.list.map((item, index) => (
                <li key={index}> {item}</li>
              ))}
            </ul>
            <h3 className=" text-xl font-semibold">
              Make real time a health improvements
            </h3>
            <p>{trainer.Makerealtimeahealthimprovements?.text}</p>
            <ul className=" grid list-disc gap-2 py-5">
              {trainer.Makerealtimeahealthimprovements?.list.map(
                (item, index) => (
                  <li key={index} className=" ">
                    {item}
                  </li>
                )
              )}
            </ul>
            <p>{trainer.conclusion}</p>
          </div>
        </div>
      </section>

      <section className=" bg-min-bg bg-cover pb-[100px]">
        <div className="max-w-[1100px] justify-between text-customWhite flex md:flex-row flex-col px-2 md:px-0 items-center  text-sm pt-14 mx-auto gap-20">
          <div className=" max-w-[400px]">
            <h3 className=" text-3xl font-semibold">
              Contact us And Join The Team
            </h3>
            <p className=" pb-10 mt-2">
              It is a long established fact of that a reader will be distracted
              by the readable content of a page when looking at its layout.
              point of using Lorem Ipsum is
            </p>
            <ul>
              <li>251 Purple Sunset Avenue Brooklyn, BXY 92101</li>
              <li>fitnessfit@example.com</li>
            </ul>
          </div>
          <form action="" className=" grid gap-4 flex-1 mt-10">
            <div className=" grid grid-cols-2 gap-4">
              <Input type="text" placeholder="your full name" />
              <Input type="text" placeholder="e-mail address" />
            </div>
            <Input type="text" placeholder="subject" />
            <Input type="text" placeholder="message" />
            <Button
              text="Start Now"
              style=" bg-customGreen text-customGray3 px-10"
            />
          </form>
        </div>
      </section>
      <section className=" pb-[100px] relative">
        <Image
          src="/images/homepage/classic-pattern.svg"
          width={696.42}
          height={224.15}
          className=" absolute right-0 top-4 opacity-70  bottom-0  "
        />
        <div className=" px-2 md:px-0  max-w-[1100px] pt-14 mx-auto">
          <div className=" relative z-1 flex items-center justify-between ">
            <div>
              <p className=" text-customBlue text-xs">OUR FITNESS TRAINING</p>
              <h2 className=" text-xl md:text-2xl font-medium">
                Upcoming Classes
              </h2>
            </div>
            <Button text="More Class" style=" text-white bg-customGray3 " />
          </div>
          <Trainnings number={3} />
        </div>
      </section>
    </div>
  );
};

export default Trainer;
