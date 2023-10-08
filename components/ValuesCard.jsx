import Image from "next/image";

const ValuesCard = ({ image, heading, text }) => {
  return (
    <div className=" bg-customGray3 border border-[#485059] p-10 text-sm">
      <Image src={image} alt={heading} className=" " width={50} height={50} />
      <div className=" pt-5">
        <h5 className=" mb-2 text-xl font-semibold">{heading}</h5>
        <p>{text}</p>
      </div>
    </div>
  );
};

export default ValuesCard;
