import BenifitCard from "@/components/BenifitCard";
import BlogCard from "@/components/BlogCard";
import Button from "@/components/Button";
import Icon from "@/components/Icon";
import OurTrainers from "@/components/OurTrainers";
import ReviewCard from "@/components/ReviewCard";
import Trainnings from "@/components/Trainnings";
import WorkingSchedule from "@/components/WorkingSchedule";
import Image from "next/image";

export default function Home() {
  return (
    <main className="">
      <header className=" overflow-hidden text-customWhite   bg-[#1C2128] h-[400px] md:mx-5 relative md:mb-10 flex items-center justify-center flex-col ">
        <div className=" relative z-20 mx-4 md:mx-0">
          <h1 className=" absolute  top-1 animate-pulse text-customGray3 z-1 text-4xl md:text-5xl max-w-[400px] text-center stroke md:pb-5 font-extrabold">
            Keep Your Body Fit & Strong
          </h1>
          <h1 className="  relative z-1 text-4xl md:text-5xl max-w-[400px] text-center stroke pb-5 font-extrabold">
            Keep Your Body Fit & Strong
          </h1>
        </div>
        <div className=" relative z-20 flex items-center gap-4">
          <Button
            text="Start Today"
            style="  bg-customGreen text-customGray3 "
          />
          <Button
            text="About Me"
            style=" border border-customWhite "
            link="/about"
          />
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
              <h2 className=" text-xl md:text-2xl font-medium">Upcoming Classes</h2>
            </div>
            <Button text="More Class" style=" text-white bg-customGray3 " />
          </div>
          <Trainnings number={3} />
        </div>
        <div className=" bg-customGray3 w-full mt-[100px] overflow-hidden px-5 tracking-[5px] md:tracking-[15px]  h-[80px] text-4xl font-bold text-customWhite flex items-center">
          <span className=" min-w-[2000px]">
            FOCUS ON YOUR <span className=" text-customGreen">FITNESS</span> NOT
            YOUR LOSS
          </span>
        </div>
      </section>

      <section className=" relative mt-[100px]">
        <Image
          src="/images/homepage/About-Pattern.svg"
          width={696.42}
          height={224.15}
          className=" absolute right-0 -top-20 opacity-70  bottom-0  "
        />
        <div className=" px-2 md:px-0 grid md:flex items-start gap-5 text-sm  pb-[100px] max-w-[1100px] mx-auto">
          <div>
            <div className=" max-w-[80%]">
              <span className=" text-customBlue text-xs">
                OUR FITNESS TRAINING
              </span>
              <h3 className=" mt-2 text-2xl font-semibold leading-none pr-[10%]">
                Respect Your Body, It’s the Only One You Get{" "}
              </h3>
              <p className=" py-5">
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.
                point of using Lorem Ipsum is
              </p>
            </div>
            <div className=" grid gap-4">
              <div className="flex items-start gap-4  bg-customWhite p-5">
                <div>
                  <h5 className=" text-xl font-semibold">Motivation</h5>
                  <p className=" text-customGray2">
                    It is a long established fact that a reader will be
                    distracted
                  </p>
                </div>
                <Image
                  width={300}
                  height={300}
                  src="/images/homepage/motivation-Image.png"
                  className=" h-[130px] w-[240px] object-cover"
                />
              </div>
              <div className="flex items-start gap-4  bg-customWhite p-5">
                <Image
                  width={300}
                  height={300}
                  src="/images/homepage/inspire-image.png"
                  className=" h-[130px] w-[240px] object-cover"
                />
                <div>
                  <h5 className=" text-xl font-semibold">Inspire</h5>
                  <p className=" text-customGray2">
                    will be distracted by readable content using Lorem Ipsum{" "}
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className=" relative">
            <Image
              src="/images/homepage/get-Started-Image.png"
              width={700}
              height={700}
              className=" "
            />
            <div className=" absolute flex  left-24 bottom-10">
              <Button text="Get Started" style="bg-customWhite " />
            </div>
          </div>
        </div>

        <div>
          <div className=" grid  grid-cols-2 px-2 gap-4 md:grid-cols-4 border-y mb-[100px] md:justify-center md:items-center py-4 max-w-[1100px] text-sm md:mx-auto ">
            <div className="flex gap-4 md:justify-center items-center ">
              <span className=" text-customWhite bg-customGray3 p-2">01</span>
              <span>Fitnes Taining</span>
            </div>
            <div className="flex gap-4 md:justify-center items-center ">
              <span className=" text-customWhite bg-customGray3 p-2">02</span>
              <span>Regular Routine</span>
            </div>
            <div className="flex gap-4 md:justify-center items-center ">
              <span className=" text-customWhite bg-customGray3 p-2">03</span>
              <span>Deit Maintenance</span>
            </div>
            <div className="flex gap-4 md:justify-center items-center ">
              <Image
                src="/images/homepage/google-logo.svg"
                width={50}
                height={50}
              />
              <div>
                <span>Review on Google</span>
                <Image
                  src="/images/homepage/Star.svg"
                  width={100}
                  height={24}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <WorkingSchedule />

      <div className=" py-[50px]  md:pb-[100px] relative overflow-hidden">
        <div className=" overflow-x-auto px-2  relative z-10 flex items-center gap-5 ">
          <ReviewCard
            image="/images/homepage/user-2-image.png"
            name="Nattasha"
            specialisations="Athletics /Trainer"
            review="There are many variations of passages of Lorem Ipsum available, but
          the majority have suffered alteration in some form, by injected
          humour"
          />
          <ReviewCard
            image="/images/homepage/user-1-image.png"
            name="Nattasha"
            specialisations="Athletics /Trainer"
            review="There are many variations of passages of Lorem Ipsum available, but
          the majority have suffered alteration in some form, by injected
          humour"
          />
          <ReviewCard
            image="/images/homepage/user-2-image.png"
            name="Nattasha"
            specialisations="Athletics /Trainer"
            review="There are many variations of passages of Lorem Ipsum available, but
          the majority have suffered alteration in some form, by injected
          humour"
          />
        </div>
        <div>
          <div className=" relative z-10 max-w-[400px] flex items-center justify-around mt-10 mx-auto ">
            <button className="  bg-customGray3 text-customWhite w-[40px] h-[40px] flex items-center justify-center rounded-full">
              <Icon name="left" size={24} />
            </button>
            <button className=" bg-customBlue text-customWhite w-[40px] h-[40px] flex items-center justify-center rounded-full">
              <Icon name="right" size={24} />
            </button>
          </div>
        </div>

        <Image
          src="/images/homepage/clients-say-about-me.svg"
          width={1200.42}
          height={324.15}
          className=" absolute left-0 bottom-20 z-0 opacity-20"
        />
      </div>
      <OurTrainers  number={3} />
      <section className=" text-sm relative bg-customBlue text-white ">
        <div className="md:px-0 px-2 md:grid md:grid-cols-7  py-[100px] gap-20 items-start relative z-0  max-w-[1100px] mx-auto mb-[50px] md:mb-[100px]">
          <div className="md:col-span-3 ">
            <span className=" uppercase  font-semibold "> Gym AMENITIES</span>
            <h5 className=" text-2xl font-semibold">The Unique Standard</h5>
            <p className=" my-5">
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. point
              of using Lorem Ipsum is.
            </p>

            <Image
              src="/images/homepage/Video.png"
              width={500}
              height={692}
              alt=""
              className=" object-cover object-center h-[400px]"
            />
          </div>
          <div className=" md:col-span-4 border-t">
            <BenifitCard
              heading="LOCKERS"
              text="Secure lockers that work by you choosing a four digit code."
            />
            <BenifitCard
              heading="CHANGING ROOMS"
              text="a, protein-packed gourmet shakes that come in chocolate, fruit, vanilla and more. Water and snacks too."
            />
            <BenifitCard
              heading="FUEL BAR"
              text="Mini towels for class and lovely big towels for showers after class. *Amenities may not be available at all studios              "
            />
            <BenifitCard
              heading="COMPLIMENTARY TOWELS"
              text="Secure lockers that work by you choosing a four digit code. "
            />
            <BenifitCard
              heading="WIFI & RESTROOMS"
              text="Secure lockers that work by you choosing a four digit code. "
            />
            <BenifitCard
              heading="HOT SHOWERS   & HAIR CARE"
              text="what your body craves in the morning, you're not alone. The majority of people crank the handle all the way up. "
            />
          </div>
        </div>

        <Image
          src="/images/homepage/Benifit.svg"
          width={500.42}
          height={224.15}
          className=" absolute h-[124.15px] w-[200.42px] md:h-[224.15px] md:w-[500.42px]  md:pb-[100px] left-0 z-10 bottom-0 opacity-70   "
        />
      </section>

      <section className=" relative text-sm  ">
        <div className=" pt-[100px] gap-20 items-start relative z-0  max-w-[1100px] mx-auto  md:mb-[50px]">
          <div className=" text-center">
            <span className=" uppercase  font-medium tracking-[5px] text-customBlue">
              Our Plan
            </span>
            <h4 className=" text-2xl font-semibold ">Choose the Program</h4>
          </div>
          <div className=" grid md:grid-cols-3 md:px-0 px-2 gap-5 items-start mt-[40px] md:mt-[70px]">
            <div className=" bg-customWhite p-4 text-center pb-10 ">
              <div className=" py-5 border-b border-[#D3D3D3] flex items-center gap-2">
                <Image
                  src="/images/homepage/basic.svg"
                  alt="basic"
                  width={24}
                  height={24}
                />
                <span className=" text-xl font-semibold">Basic</span>
              </div>
              <div className=" border-b border-[#D3D3D3] grid py-4">
                <span>$25 / month</span>
                <span className=" bg-white font-medium w-[160px] py-1 mt-2 mx-auto">
                  30% Off for Beginners
                </span>
              </div>
              <div className=" my-5">
                <h6 className=" text-customBlue font-medium ">
                  1 Day Free Trial
                </h6>
                <ul className=" grid gap-4 mt-5">
                  <li>20 minutes of heart-pumping spin</li>
                  <li>20 minutes of strength training</li>
                  <li>20 minutes of invigorating yoga</li>
                  <li>50 Class Times Available</li>
                </ul>
              </div>

              <Button
                text="Get Started"
                style=" bg-customGray text-customWhite"
              />
            </div>
            <div className=" bg-customWhite p-4 text-center pb-10 ">
              <div className=" py-5 border-b border-[#D3D3D3] flex items-center gap-2">
                <Image
                  src="/images/homepage/standard.svg"
                  alt="basic"
                  width={24}
                  height={24}
                />
                <span className=" text-xl font-semibold">Standard</span>
              </div>
              <div className=" border-b border-[#D3D3D3] grid py-4">
                <span>$35 / month</span>
                <span className=" bg-customGreen font-medium w-[110px] py-1 mt-2 mx-auto">
                  Most popular
                </span>
              </div>
              <div className=" my-5">
                <h6 className=" text-customBlue font-medium ">
                  2 Week Free Trial
                </h6>
                <ul className=" grid gap-4 mt-5">
                  <li>30 minutes of heart-pumping spin</li>
                  <li>30 minutes of strength training</li>
                  <li>50 Class Times Available</li>
                  <li>20 minutes of invigorating yoga</li>
                  <li>Unlimited CrossFit Classes</li>
                  <li>One Full Month Free</li>
                  <li>First 25 New Members Only</li>
                </ul>
              </div>

              <Button
                text="Get Started"
                style="border border-customGray  text-customGray"
              />
            </div>
            <div className=" bg-customWhite p-4 text-center pb-10 ">
              <div className=" py-5 border-b border-[#D3D3D3] flex items-center gap-2">
                <Image
                  src="/images/homepage/premium.svg"
                  alt="basic"
                  width={24}
                  height={24}
                />
                <span className=" text-xl font-semibold">Premium</span>
              </div>
              <div className=" border-b border-[#D3D3D3] grid py-4">
                <span>$50 / month</span>
                <span className=" bg-white font-medium w-[170px] py-1 mt-2 mx-auto">
                  10% Off for Yoga Class
                </span>
              </div>
              <div className=" my-5">
                <h6 className=" text-customBlue font-medium ">
                  2 Week Free Trial
                </h6>
                <ul className=" grid gap-4 mt-5">
                  <li>50 minutes of heart-pumping spin</li>
                  <li>50 minutes of strength training</li>
                  <li>60 Class Times Available</li>
                  <li>50 minutes of invigorating yoga</li>
                </ul>
              </div>

              <Button
                text="Get Started"
                style=" bg-customGray text-customWhite"
              />
            </div>
          </div>
        </div>

        <Image
          src="/images/homepage/Plan.svg"
          width={500.42}
          height={224.15}
          className=" absolute right-0 z-10 top-0 opacity-70   "
        />
      </section>
      <section className=" relative text-sm  ">
        <div className=" md:px-0 px-2 py-[100px] gap-20 items-start relative z-0  max-w-[1100px] mx-auto mb-[100px]">
          <h6 className=" text-2xl font-semibold ">Articles & News</h6>
          <div className=" mt-[50px] grid gap-4 max-w-[800px] mx-auto">
            <BlogCard
              date="March 23, 2022"
              tag="Fitness"
              heading="The 10 best exercises to do in your park"
              text="There are many variations of passages of Lorem Ipsum available, but the majority have alterationLorem ipsum dolor sit amet, consectetur adipiscing elit. Habitasse ."
            />
            <BlogCard
              date="March 23, 2022"
              tag="Health"
              heading="The 10 best exercises to do in your park"
              text="There are many variations of passages of Lorem Ipsum available, but the majority have alterationLorem ipsum dolor sit amet, consectetur adipiscing elit. Habitasse ."
            />
            <BlogCard
              date="March 23, 2022"
              tag="Health"
              heading="The 10 best exercises to do in your park"
              text="There are many variations of passages of Lorem Ipsum available, but the majority have alterationLorem ipsum dolor sit amet, consectetur adipiscing elit. Habitasse ."
              image="/images/homepage/blogbg.png"
            />
          </div>
        </div>

        <Image
          src="/images/homepage/Blog.svg"
          width={500.42}
          height={224.15}
          className=" absolute right-0 z-10 top-0 opacity-70   "
        />
      </section>
    </main>
  );
}
