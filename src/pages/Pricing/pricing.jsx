import React from "react";
import banner from "../../assets/images/banner.png";
import aboutUs from "../../assets/images/about_us1.png";
import missionLogo from "../../assets/icons/mission.svg";
import visionLogo from "../../assets/icons/eye.svg";
import teamholder from "../../assets/icons/teamholder.svg";
import builderLogo from "../../assets/icons/builder.svg";
import { IoCheckmarkCircle } from "react-icons/io5";
import { FaRegCircleCheck } from "react-icons/fa6";

function Pricing() {
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
  return (
    <section>
      <div className="relative">
        <img src={banner} alt="Banner description" className="w-full" />
        <div className="absolute top-0 h-full flex flex-col w-[100%] justify-center items-center p-8">
          <div className="flex gap-2 items-center">
            <hr className="bg-white h-[5px] w-[100px]" />
            <h1 className="text-white text-ls uppercase">pricing</h1>
            <hr className="bg-white h-[5px] w-[100px]" />
          </div>
          <h1 className="text-white text-[48px] leading-tight  font-bold">
            Our Pricing is simple
          </h1>
          <p className="text-white px-[580px] text-center">
            We offer a simple and flexible pricing for all type of cleaning
            whether it is residential or industrial cleaning.
          </p>
        </div>
      </div>

      <div className="w-full h-fit flex justify-center items-center -mt-48 relative">
        <div className="w-full h-full flex items-center justify-center">
          <div className="h-[500px] w-[30%] bg-white rounded-xl shadow-md flex flex-col items-center justify-center space-y-10">
            <h1 className="text-5xl font-bold">C100</h1>
            <div>
              <p className="text-xl text-center">Basic Home Plan</p>
              <p className="text-xl text-center">per clean / billed weekly</p>
            </div>
            <div className="w-[50%]">
              <button className="uppercase w-[100%] bg-blue-500 text-white p-2 flex items-center justify-center rounded-md">
                <p>Get this plan</p>
              </button>
            </div>
          </div>
          <div className="h-[300px] w-[17%] bg-[#33C5BC] rounded-r-md shadow-md flex flex-col items-center justify-center space-y-5">
            <h1 className="font bold text-white px-14">
              Get 30% discount on your first month
            </h1>
            <div>
              <div className="flex space-x-2 items-center text-white">
                <IoCheckmarkCircle />
                <p>Custom schedules every day.</p>
              </div>
              <div className="flex space-x-2 items-center text-white">
                <IoCheckmarkCircle />
                <p>Custom schedules every day.</p>
              </div>
              <div className="flex space-x-2 items-center text-white">
                <IoCheckmarkCircle />
                <p>Custom schedules every day.</p>
              </div>
              <div className="flex space-x-2 items-center text-white">
                <IoCheckmarkCircle />
                <p>Custom schedules every day.</p>
              </div>
              <div className="flex space-x-2 items-center text-white">
                <IoCheckmarkCircle />
                <p>Custom schedules every day.</p>
              </div>
              <div className="flex space-x-2 items-center text-white">
                <IoCheckmarkCircle />
                <p>Custom schedules every day.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white py-20 w-full flex items-center justify-center">
        <div className="px-10">
          <div className="flex justify-center gap-2 items-center">
            <hr className="bg-black h-[5px] w-[100px]" />
            <h1 className="text-black text-ls uppercase">plans</h1>
            <hr className="bg-black h-[5px] w-[100px]" />
          </div>

          <div className="flex flex-col justify-center items-center space-y-10">
            <h1 className="pt-6 justify-center item-center w-29 text-[32px] px-[600px] text-center font-semibold">
              Simple and affordable plans for everyone
            </h1>
            <div className="grid grid-cols-2 w-full place-items-center pb-40 px-80">
              {planCards.map((item, index) => {
                return (
                  <div
                    key={index}
                    className="md:w-[450px] h-fit p-5 hover:scale-[1.02] duration-150 bg-gray-100 space-y-5"
                  >
                    <p>{item?.name}</p>
                    <p className="font-extralight">
                      <span className="font-bold text-3xl">{item?.price}</span>{" "}
                      per clean / billed weekly
                    </p>
                    <p className="font-extralight text-sm">
                      This plan is suitable for small businesses and offices.
                      Simply send us the size of your company and we will get
                      back to you with the plan
                    </p>
                    <div className="flex space-x-2 items-center text-black font-extralight">
                      <FaRegCircleCheck className="text-blue-500" />
                      <p>Custom schedules every day.</p>
                    </div>
                    <div className="flex space-x-2 items-center text-black font-extralight">
                      <FaRegCircleCheck className="text-blue-500" />
                      <p>Custom schedules every day.</p>
                    </div>
                    <div className="flex space-x-2 items-center text-black font-extralight">
                      <FaRegCircleCheck className="text-blue-500" />
                      <p>Custom schedules every day.</p>
                    </div>
                    <div className="flex space-x-2 items-center text-black font-extralight">
                      <FaRegCircleCheck className="text-blue-500" />
                      <p>Custom schedules every day.</p>
                    </div>
                    <div className="flex space-x-2 items-center text-black font-extralight">
                      <FaRegCircleCheck className="text-blue-500" />
                      <p>Custom schedules every day.</p>
                    </div>
                    <div className="w-[100%] items-center justify-center flex py-5">
                      <button className="uppercase w-[50%] bg-[#3E89FF] text-white p-2 flex items-center justify-center rounded-md">
                        <p>Get this plan</p>
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Pricing;
