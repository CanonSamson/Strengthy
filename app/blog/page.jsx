import { blogs } from "@/data/blog";
import Image from "next/image";

const Blog = () => {
  return (
    <div>
      <header className=" overflow-hidden text-customWhite   bg-[#1C2128] h-[400px] md:mx-5 relative mb-10 flex items-center justify-center flex-col ">
        <div className=" relative">
          <h1 className=" absolute  top-1  text-4xl md:text-5xl animate-pulse text-customGray3 z-1 max-w-[400px] text-center stroke pb-5 font-extrabold">
            Our Blog
          </h1>

          <h1 className="  relative z-1 text-4xl md:text-5xl max-w-[400px] text-center stroke pb-5 font-extrabold">
            Our Blog
          </h1>
        </div>

        <Image
          src="/images/classes/hero-2.png"
          width={500}
          height={500}
          className=" absolute left-[50px]  opacity-70 w-auto top-0 h-[150px] md:h-[350px] "
        />
        <Image
          src="/images/homepage/hero-4.png"
          width={500}
          height={500}
          className=" absolute right-0  w-auto opacity-70 top-0  h-[150px] md:h-[350px]"
        />
        <Image
          src="/images/homepage/hero-3.png"
          width={500}
          height={500}
          className=" absolute right-[20%]  w-auto opacity-70 -bottom-[100px]  h-[150px] md:h-[350px]"
        />

        <Image
          src="/images/homepage/hero-image-6.png"
          width={500}
          height={500}
          className=" absolute left-[20px] opacity-70  w-auto bottom-[-100px] h-[250px] "
        />
      </header>
      <section className=" pb-[200px] relative">
        <Image
          src="/images/blog/Blog-Pattern.svg"
          width={496.42}
          height={224.15}
          className=" h-[224.15px] w-[496.42px] absolute right-0 top-4 opacity-70  bottom-0  "
        />
        <div className=" px-2 md:px-0 max-w-[1100px] pt-14 mx-auto">
          <div className=" relative z-1 flex items-center justify-between ">
            <div>
              <p className=" text-customBlue text-xs">BLOG</p>
              <h2 className=" text-2xl font-medium">Articles & News</h2>
            </div>
          </div>

          <div className=" grid md:grid-cols-3 mt-[20px]">
            {blogs.map((blog, index) => (
              <Ablog key={index} {...blog} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;

const Ablog = ({ image, heading, date, categories, author, authorImage }) => {
  return (
    <div className=" text-sm leading-none  border relative z-10 bg-white border-[#D2D2D2] p-5">
      <Image
        src={image}
        alt={heading}
        width={500}
        height={500}
        className=" h-[220px] w-full object-cover object-top "
      />
      <div className=" flex gap-2 items-center mt-4">
        <span className=" text-customBlue">{date}</span>
        {categories &&
          categories.map((item, index) => (
            <span key={index} className=" bg-costomWhite px-2">
              {item}
            </span>
          ))}
      </div>
      <h4 className=" text-2xl font-semibold  mt-4">{heading}</h4>
      <div className=" flex mt-5 items-center gap-2">
        <Image
          src={authorImage}
          alt={author}
          width={24}
          height={24}
          className=" object-cover rounded-full"
        />
        <span>{author}</span>
      </div>
    </div>
  );
};
