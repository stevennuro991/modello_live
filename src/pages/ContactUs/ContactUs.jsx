import React from "react";
import banner from "../../assets/images/banner.png";
import aboutUs from "../../assets/images/about_us1.png";
import missionLogo from "../../assets/icons/mission.svg";
import visionLogo from "../../assets/icons/eye.svg";
import teamholder from "../../assets/icons/teamholder.svg";
import builderLogo from "../../assets/icons/builder.svg";
import { IoCheckmarkCircle } from "react-icons/io5";
import { FaRegCircleCheck } from "react-icons/fa6";

function Contact() {
  const planCards = [
    {
      name: "Small business",
      price: "C 300 ",
    },
    {
      name: "Large business",
      price: "C 500 ",
    },
  ];
  const contactCards = [
    {
      name: "Help Center",
      description:
        "If you have a great idea, or something to discuss - we are ready to help.",
    },
    {
      name: "Business  Inquiries",
      description:
        "If you have a great idea, or something to discuss - we are ready to help.",
    },
    {
      name: "Legal Inquiries",
      description:
        "If you have a great idea, or something to discuss - we are ready to help.",
    },
  ];
  return (
    <section>
      <div className="relative">
        <img src={banner} alt="Banner description" className="w-full" />
        <div className="absolute top-10 h-full flex flex-col pl-20 w-[800px] justify-center left-0 p-8 space-y-5">
          <div className="flex gap-2 items-center">
            <hr className="bg-white h-[5px] w-[100px]" />
            <h1 className="text-white text-ls">Contact</h1>
          </div>
          <h1 className="text-white text-[48px] leading-tight  font-bold w-[80%]">
            Get in touch
          </h1>
          <p className="text-white w-[60%]">
            If you have any questions or queries, feel free to write to us on
            visit us anytime.
          </p>
        </div>
      </div>

      <div className="bg-white py-20 w-full flex items-center justify-center px-80 space-x-10">
        <div className="w-[50%]">
          <div className="flex justify-start gap-2 items-center">
            <hr className="bg-black h-[5px] w-[100px]" />
            <h1 className="text-black text-ls uppercase">offices</h1>
          </div>

          <div className="flex flex-col space-y-10">
            <div className="border-b pb-7">
              <h1 className="pt-6 text-[32px] font-semibold">
                You’re always welcome
              </h1>
              <p>
                Shall under In yielding saying given dominion don't of two god
                which said. Creature dominion was the good creepeth to give
                bring doesn't first shall two signs.
              </p>
            </div>
            <div className="flex justify-between items-center">
              <div className="">
                <p className="font-semibold">Ejisu-Kumasi road,</p>
                <p>Adako Jachie</p>
                <p>Near Prefos Limited</p>
                <p>+233 547 986 097</p>
              </div>
              <div className="">
                <p className="font-semibold">Ahinsan,</p>
                <p>GCB Lane</p>
                <p>Kumasi</p>
                <p>+233 547 986 097</p>
              </div>
            </div>
            <div>
              <div className="">
                <p className="font-semibold">
                  Ashaley Botwe, University Avenue
                </p>
                <p>Lakeside Estate</p>
                <p>Accra</p>
                <p>+233 547 986 097</p>
              </div>
            </div>
          </div>
        </div>
        <div className="w-[50%] h-fit flex justify-center items-center relative -mt-40">
          <div className="w-full h-full flex items-center justify-center">
            <div className="h-fit w-full bg-white rounded-xl shadow-md flex flex-col items-center space-y-10 p-10">
              <p className="text-xl"> Send your Queries</p>
              <div className="w-full flex flex-col space-y-10">
                <label htmlFor="" className="flex flex-col space-y-1">
                  <p>Your name</p>
                  <input
                    type="text"
                    className="border p-2 w-full bg-gray-100 rounded"
                  />
                </label>
                <label htmlFor="" className="flex flex-col space-y-1">
                  <p> Phone number</p>
                  <input
                    type="text"
                    className="border p-2 w-full bg-gray-100 rounded"
                  />
                </label>
                <label htmlFor="" className="flex flex-col space-y-1">
                  <p> ZIP code</p>
                  <input
                    type="text"
                    className="border p-2 w-full bg-gray-100 rounded"
                  />
                </label>
                <label htmlFor="" className="flex flex-col space-y-1">
                  <p> Choose a service</p>
                  <input
                    type="text"
                    className="border p-2 w-full bg-gray-100 rounded"
                  />
                </label>
                <label htmlFor="" className="flex flex-col space-y-1">
                  <p>Your message</p>
                  <textarea
                    name="message"
                    id=""
                    cols="30"
                    rows="5"
                    className="border p-2 w-full bg-gray-100 rounded"
                  />
                </label>
                <div className="w-full">
                  <button className="uppercase w-[100%] bg-blue-500 text-white p-2 flex items-center justify-center rounded-md">
                    <p>Submit Details</p>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-3 w-full place-items-center pb-40 px-40 gap-10">
        {contactCards.map((item, index) => {
          return (
            <div
              key={index}
              className="md:w-[400px] h-72 hover:scale-[1.02] duration-150"
            >
              <div className="flex w-full h-full border relative hover:cursor-pointer p-5 flex-col justify-center items-center shadow-md bg-cover object-contain  bg-gradient-to-r from-[#090071] to-[#6480DF] space-y-5 rounded-md">
                <p className="text-white text-2xl font-bold">{item?.name}</p>
                <p className="text-white text-center text-[22px] font-extralight">
                  {item?.description}
                </p>
                <div className="w-[50%]">
                  <button className="uppercase w-[100%] bg-[#EEB000] text-white p-2 flex items-center justify-center rounded-md">
                    <p className="uppercase">Call Us</p>
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <div className="w-full h-[700px] bg-black text-white p-20">Map area</div>
    </section>
  );
}

export default Contact;
