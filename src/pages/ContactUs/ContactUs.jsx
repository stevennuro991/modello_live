import React from "react";
import banner from "../../assets/images/banner.png";
import aboutUs from "../../assets/images/aboutus.png";
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
        <div className="absolute md:top-10 top-0 h-full flex flex-col pl-20 md:w-[800px] justify-center left-0 p-8 space-y-5">
          <div className="flex gap-2 items-center">
            <hr className="bg-white h-[5px] w-[100px]" />
            <h1 className="text-white text-ls">Contact</h1>
          </div>
          <h1 className="text-white md:text-[48px] leading-tight  font-bold w-[80%]">
            Get in touch
          </h1>
          <p className="text-white w-[60%] hidden md:block">
            If you have any questions or queries, feel free to write to us on
            visit us anytime.
          </p>
        </div>
      </div>

      <div className="bg-white md:py-20 py-10 w-full flex flex-col md:flex-row items-center justify-center md:px-80 md:space-x-10 p-5">
        <div className="md:w-[50%]">
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
                We're here to help! If you have any questions, need more
                information, or just want to share your feedback with us, don't
                hesitate to reach out. Our team is dedicated to providing you
                with the support you need in a timely and friendly manner.
              </p>
            </div>
            <div className="w-full flex flex-col md:flex-row md:justify-between md:items-center space-y-5 md:space-y-0">
              <div className="w-full">
                <p className="font-semibold">Ejisu-Kumasi road,</p>
                <p>Adako Jachie</p>
                <p>Near Prefos Limited</p>
                <p>Customer care +233547986097</p>
              </div>
              <div className="">
                <p className="font-semibold">Ahinsan,</p>
                <p>GCB Lane</p>
                <p>Kumasi</p>
                <p>Customer care +233547986097</p>
              </div>
            </div>
            <div>
              <div className="">
                <p className="font-semibold">
                  Ashaley Botwe, University Avenue
                </p>
                <p>Lakeside Estate</p>
                <p>Accra</p>
                <p>Customer care +233547986097</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
