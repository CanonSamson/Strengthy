import Image from "next/image";
import Button from "./Button";

const BlogCard = ({ date, tag, heading, text, image }) => {
  const hasImage = !!image; // Check if an image is provided

  return (
    <div
      className={`relative overflow-hidden ${
        hasImage
          ? "bg-customWhite text-customWhite"
          : "bg-customWhite text-customGray"
      } text-sm p-10`}
    >
      {hasImage && (
        <Image
          src={image}
          width={600}
          height={600}
          alt="bg"
          className="w-full top-0 right-0 h-full object-cover absolute"
        />
      )}
      <div className="relative z-10">
        <div className="flex gap-4">
          <span className={!hasImage ? "text-customBlue" : ""}>{date}</span>
          <span
            className={` ${hasImage ? "text-customGray" : ""} px-2 bg-white`}
          >
            {tag}
          </span>
        </div>
        <div className={hasImage ? "text-customWhite" : ""}>
          <h5 className="text-xl font-medium mt-5">{heading}</h5>
          <p className="my-2">{text}</p>
          <Button
            text="Read More"
            style={`${
              hasImage ? "text-customGray bg-customGreen" : "text-customGray"
            } border border-customGray px-10`}
          />
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
