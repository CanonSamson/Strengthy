import Image from "next/image";
import OurTrainersCard from "./OurTrainersCard";

const trainersData = [
  {
    star: "5",
    name: "Amanda",
    image: "/images/homepage/our-trainers-1-image.png",
    specialisations: "Crossfit Expoort, Nutrition & Rehab",
    socialMedia: ["twitter"],
  },
  {
    star: "5",
    name: "Madison Froning",
    image: "/images/homepage/our-trainers-2-image.png",
    specialisations: "Crossfit Expoort, Nutrition & Rehab",
    socialMedia: ["facebook"],
  },
  {
    star: "5",
    name: "Joshua Frankilin",
    image: "/images/homepage/our-trainers-3-image.png",
    specialisations: "Crossfit Expoort, Nutrition & Rehab",
    socialMedia: ["facebook", "twitter"],
  },
  {
    star: "5",
    name: "Jhon Willson ",
    image: "/images/trainers/trainer-04.png",
    specialisations: "Crossfit Expoort, Nutrition & Rehab",
    socialMedia: ["twitter"],
  },
  {
    star: "5",
    name: "Steve Smith",
    image: "/images/trainers/trainer-4.png",
    specialisations: "Crossfit Expoort, Nutrition & Rehab",
    socialMedia: ["facebook"],
  },
  {
    star: "5",
    name: "Kane Lucy",
    image: "/images/trainers/trainer-6.png",
    specialisations: "Crossfit Expoort, Nutrition & Rehab",
    socialMedia: ["facebook", "twitter"],
  },
];

const OurTrainers = ({ number }) => {
  const trainersDat = trainersData.slice(0, number);
  return (
    <section className=" relative ">
      <div className=" relative z-10 text-center  max-w-[1100px] mx-auto py-[100px] mb-[100px]">
        <div className=" pb-5">
          <span className=" uppercase   font-medium tracking-[5px] text-customBlue">
            Our Trainers
          </span>
          <h4 className=" text-2xl font-semibold ">We Trained You to Gain</h4>
        </div>
        <div className="grid grid-cols-3 gap-5">
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
