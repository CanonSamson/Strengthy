import Image from "next/image";
import OurTrainersCard from "./OurTrainersCard";
import { trainersData } from "@/data/trainersData";


const OurTrainers = ({ number }) => {
  const trainersDat = trainersData.slice(0, number);
  return (
    <section className=" relative ">
      <div className=" relative px-2 md:px-0 z-10 text-center  max-w-[1100px] mx-auto py-[100px] mb-[100px]">
        <div className=" pb-5">
          <span className=" uppercase   font-medium tracking-[5px] text-customBlue">
            Our Trainers
          </span>
          <h4 className=" text-2xl font-semibold ">We Trained You to Gain</h4>
        </div>
        <div className="grid md:grid-cols-3 gap-5">
          {trainersDat.map((trainer, index) => (
            <OurTrainersCard key={index} {...trainer} />
          ))}
        </div>
      </div>
      <Image
        src="/images/homepage/Team.svg"
        width={696.42}
        height={224.15}
        className=" absolute right-0 bottom-4 opacity-70   "
      />
    </section>
  );
};

export default OurTrainers;
