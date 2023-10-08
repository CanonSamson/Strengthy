import Image from "next/image";

const ReviewCard = ({image, name, specialisations, review}) => {
  return (
    <div className=" gap-4 p-4 text-sm flex items-center relative min-w-[550px] h-[220px] bg-customWhite">
      <div className=" relative">
        <div className=" absolute bg-customBlue text-customWhite text-[40px] flex items-start justify-center h-[40px] w-[40px] rounded-full">
          <div>“</div>
        </div>
        <Image
          src={image}
          width={192}
          height={192}
          alt=""
          className=" rounded-full min-w-[120px] h-[120px] object-cover"
        />
      </div>
      <div className=" flex items-center">
        <div className="grid">
          <span className=" font-semibold">{name}</span>
          <span> {specialisations}</span>
          <Image
            src="/images/homepage/Rating.svg"
            width={139}
            height={28.3}
            alt=""
          />
          <span>
            {review}
          </span>
        </div>
      </div>
    </div>
  );
};

export default ReviewCard;
