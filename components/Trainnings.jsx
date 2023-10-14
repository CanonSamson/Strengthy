import Image from "next/image";

const trainingsData = [
  {
    imageSrc: "/images/homepage/workout-image-1.png",
    title: "Pilates Training",
    description: "containing Lorem Ipsum passagesand more recently with",
  },
  {
    imageSrc: "/images/homepage/workout-image-2.png",
    title: "Aerobic",
    description: "containing Lorem Ipsum passagesand more recently with",
  },
  {
    imageSrc: "/images/homepage/workout-image-3.png",
    title: "CrossFit",
    description: "containing Lorem Ipsum passagesand more recently with",
  },
  {
    imageSrc: "/images/classes/trainning-3.png",
    title: "Yoga As Therapy",
    description: "containing Lorem Ipsum passagesand more recently with",
  },
  {
    imageSrc: "/images/classes/trainning-4.png",
    title: "Boxingy",
    description: "containing Lorem Ipsum passagesand more recently with ",
  },
  {
    imageSrc: "/images/classes/trainning-5.png",
    title: "Energy Dance",
    description: "containing Lorem Ipsum passagesand more recently with",
  },
  // Add more training data here
];

const Trainnings = ({ number }) => {
  const trainingsDat = trainingsData.slice(0, number);
  return (
    <div className=" grid gap-5 text-sm  md:grid-cols-3 mt-10">
      {trainingsDat.map((training, index) => (
        <div key={index}>
          <Image
            src={training.imageSrc}
            width={500}
            height={300}
            className="h-[300px] bg-customGray2 object-cover object-top w-full"
          />
          <div className="mt-5">
            <h5 className="font-semibold text-xl">{training.title}</h5>
            <p>{training.description}</p>
            <span className="text-customBlue">Read More</span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Trainnings;
