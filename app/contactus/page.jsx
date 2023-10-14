"use client";
import Button from "@/components/Button";
import Icon from "@/components/Icon";
import Input from "@/components/Input";
import { faqData } from "@/data/fag";
import Image from "next/image";
import { useState } from "react";

const Contact = () => {
  const [selectedFaq, setSelectedFaq] = useState(null);
  return (
    <div>
      <header className=" overflow-hidden text-customWhite   bg-[#1C2128] h-[400px] md:mx-5 relative p-5 md:mb-10 flex items-center justify-center flex-col ">
        <div className=" relative">
          <h1 className=" absolute  top-1 text-4xl md:text-5xl animate-pulse text-customGray3 z-1 max-w-[400px] text-center stroke pb-5 font-extrabold">
            Contact Us
          </h1>
 
          <h1 className="  relative z-1 text-4xl md:text-5xl max-w-[400px] text-center stroke pb-5 font-extrabold">
            Contact Us
          </h1>
        </div>

        <Image
          src="/images/classes/hero-2.png"
          width={500}
          height={500}
          className=" absolute left-[50px]  opacity-70 w-auto top-0  h-[150px] md:h-[350px] "
        />
        <Image
          src="/images/classes/hero-1.png"
          width={500}
          height={500}
          className=" absolute right-0  w-auto opacity-70 top-0  h-[150px] md:h-[350px] "
        />
        <Image
          src="/images/homepage/hero-3.png"
          width={500}
          height={500}
          className=" absolute right-[20%]  w-auto opacity-70 -bottom-[100px]  h-[150px] md:h-[350px] "
        />

        <Image
          src="/images/homepage/hero-image-6.png"
          width={500}
          height={500}
          className=" absolute left-[20px] opacity-70  w-auto bottom-[-100px] h-[250px] "
        />
      </header>
      <section>
        <div className=" mx-2 flex flex-col md:grid-cols-7 text-customGray3 items-center  md:grid gap-10  max-w-[1100px] pt-14 md:mx-auto pb-[100px] text-sm">
          <div className="w-full col-span-4 md:w-[80%]">
            <div>
              <span className=" text-customBlue tracking-[5px] font-medium uppercase">
                WELCOME TO STRENGTHY
              </span>
              <h1 className=" text-2xl md:text-3xl font-semibold">Get In Touch With Us</h1>
              <p className=" my-4">
                If you have any feedback or questions about our clubs, our
                website or our services in general, please contact us by filling
                out the form.
              </p>
            </div>
            <div className="">
              <span className=" text-2xl font-semibold border-b w-[200px] pb-5 mb-5 relative flex  ">
                Open Hours
              </span>
              <ul className="grid gap-2 text-">
                <li>
                  <span className=" font-semibold">Mon – Fri :</span> 08.00 aM
                  to 09.00 pM
                </li>
                <li>
                  <span className=" font-semibold">Sat :</span> 09.00 AM To
                  06.00 PM
                </li>
                <li>
                  <span className=" font-semibold">sunday : </span>09.00 AM To
                  02.00 PM
                </li>
              </ul>
            </div>
          </div>
          <div className=" col-span-3 w-full bg-customWhite p-5 md:p-10">
            <h2 className="text-2xl md:text-3xl font-semibold">Send Us a Message</h2>
            <p className=" text-customBlue">
              Your email address will not be published *
            </p>
            <form action="" className=" grid gap-4 mt-10">
              <Input type="text" placeholder="your full name" />
              <Input type="text" placeholder="e-mail address" />
              <Input type="text" placeholder="subject" />
              <Input type="text" placeholder="message" />
              <Button
                text="Send Now"
                style=" bg-customGray text-customWhite px-10"
              />
            </form>
          </div>
        </div>
        <Image
          src="/images/contact/Contact-Pattern.svg"
          width={500.42}
          height={324.15}
          className=" absolute left-0 bottom-0 z-0 "
        />
      </section>
      <section className="p-5 min-h-[500px] relative bg-contact-bg mb-[100px] flex items-center justify-center">
        <div className=" md:grid-cols-3 text-customGray3 bg-customGreen items-center  grid  max-w-[1100px] mx-auto p-10 text-sm">
          <ContactCard
            icon="phone"
            heading="Phone"
            contact="(+01) 123 456 7890"
            text="Capitalized on hanging frut to identify with additional"
          />
          <ContactCard
            icon="mail"
            heading="Mail"
            contact="fitnessfit@gmail.com"
            text="Capitalized on hanging frut to identify with additional"
            style=" border-y md:border-x border-customGray"
          />
          <ContactCard
            icon="location"
            heading="Location"
            contact="123 King Dr.Oswego, NY 13126"
            text="Capitalized on hanging frut to identify with additional"
          />
        </div>
      </section>
      <section className=" relative ">
        <div className=" relative z-10 text-center  max-w-[1100px] mx-auto py-[50px] md:py-[100px] mb-[100px]">
          <div className=" pb-5">
            <span className=" uppercase  font-medium tracking-[5px] text-customBlue">
              FAG
            </span>
            <h4 className="text-xl text-center md:text-2xl font-semibold ">
              Frequently Asked Questions
            </h4>
          </div>
          <div className=" max-w-[500px] mx-auto text-sm">
            {faqData.map((faq, index) => (
              <div className=" w-full" key={index}>
                <button
                  onClick={() => {
                    if (index !== selectedFaq) {
                      setSelectedFaq(index);
                    } else {
                      setSelectedFaq(null);
                    }
                  }}
                  className="text-start w-full flex p-3 justify-between items-center border-b border-"
                >
                  {faq.question}
                  <Icon name="down" size={16} className={` ${index === selectedFaq  ? " rotate-180" :" rotate-0"} duration-200 `} />
                </button>
                {index === selectedFaq && (
                  <p className="  pb-5 px-2 text-[12px] mt-2 ">
                    {faq.answer}
                  </p>
                )}
              </div>
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
    </div>
  );
};

export default Contact;

const ContactCard = ({ heading, icon, text, contact, style }) => {
  return (
    <div
      className={`flex flex-col text-center   items-center justify-center p-5 ${style}`}
    >
      <div className="  bg-customGray3   text-customWhite w-[40px] h-[40px] rounded-full flex items-center justify-center">
        <Icon name={icon} />
      </div>
      <h4 className=" text-xl font-semibold border-b-2  border-customGray pb-2 mb-4">
        {heading}
      </h4>
      <p>{text}</p>
      <p>{contact}</p>
    </div>
  );
};
