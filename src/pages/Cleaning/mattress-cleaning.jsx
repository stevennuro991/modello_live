import React, { useState } from "react";
import banner from "../../assets/images/sofa 2.jpg";
import hover from "../../assets/images/bed.jpeg";
import cleaninservice from "../../assets/images/sofa 3.jpg";
import visionLogo from "../../assets/icons/eye.svg";
import teamholder from "../../assets/icons/teamholder.svg";
import builderLogo from "../../assets/icons/builder.svg";
import { FaChevronRight } from "react-icons/fa";
import { IoCheckmarkCircle } from "react-icons/io5";
import { GrUserSettings } from "react-icons/gr";
import { GiDelicatePerfume } from "react-icons/gi";
import { FaStudiovinari } from "react-icons/fa6";
import { FaThumbsUp } from "react-icons/fa";
import serviceBg from "../../assets/images/disinfection-worker-spraying-subway-staircase-due-covid19-pandemic.jpg";
import { Link } from "react-router-dom";
import { TiChevronRight } from "react-icons/ti";
import BookingForm from "../../components/booking_form";

function MattressCleaning() {
  const serviceicons = [
    {
      icon: <GrUserSettings className="text-white text-xl" />,
      name: "Experienced Staff",
      description: "Skilled, Knowledgeable, Professional, Efficient, Reliable",
    },
    {
      icon: <GiDelicatePerfume className="text-white text-xl" />,
      name: "Fast Service ",
      description: "Quick, Efficient, Prompt, Expedient, Timely",
    },
    {
      icon: <FaStudiovinari className="text-white text-xl" />,
      name: "Natural products ",
      description: "Eco-friendly, Safe, Organic, Non-toxic, Sustainable",
    },
    {
      icon: <FaThumbsUp className="text-white text-xl" />,
      name: "Best Equipment",
      description:
        "Advanced, High-quality, Innovative, Reliable, State-of-the-art",
    },
  ];
  return (
    <section>
      <div className="relative">
        <img src={banner} alt="Banner description" className="w-full" />
        <div className="absolute md:top-20 top-0 h-full flex flex-col md:pl-20 md:w-[800px] justify-center md:left-0 p-8">
          <h1 className="text-white md:text-[48px] leading-tight  font-bold">
            MATTRESS cleaning
          </h1>
          <div className="flex space-x-3 items-center text-gray-50 font-extralight">
            <p className="text-blue-800 text-ls font-bold">Home</p>
            <FaChevronRight color="blue" />
            <p className="text-blue-800 text-ls font-bold">Services</p>
            <FaChevronRight color="blue" />
            <p className="text-blue-800 text-ls font-bold" >Mattress Cleaning</p>
          </div>
        </div>
      </div>
      <div className="flex flex-col md:flex-row md:p-20 md:space-x-20">
        <div className="flex flex-col  md:ml-20 justify-between py-7 md:w-[40%] w-[100%] p-5 md:p-0">
          <div className="w-full md:border-2 rounded-xl h-fit p-5">
            <div className="flex gap-2 items-center">
              <hr className="bg-black h-[5px] w-[100px]" />
              <h1 className="text-black uppercase">our services</h1>
            </div>
            <div className="py-5 flex items-center justify-between hover:shadow-sm cursor-pointer">
              <Link to="/industrial-cleaning">Industrial Cleaning</Link>
              <TiChevronRight />
            </div>
                 <div className="py-5 border-b flex items-center justify-between hover:shadow-sm cursor-pointer">
              <Link to="/domestic-and-commercial-cleaning">Domestic/Commercial Cleaning</Link>
              <TiChevronRight />
            </div>
            <div className="py-5 border-b flex items-center justify-between hover:shadow-sm cursor-pointer">
              <Link to="/apartment-cleaning">Apartment Cleaning</Link>
              <TiChevronRight />
            </div>
            <div className="py-5 border-b flex items-center justify-between hover:shadow-sm cursor-pointer">
              <Link to="/sofa-cleaning">Sofa Cleaning</Link>
              <TiChevronRight />
            </div>
            <div className="py-5 border-b flex items-center justify-between hover:shadow-sm cursor-pointer">
              <Link to="/mattress-cleaning">Mattress Cleaning</Link>
              <TiChevronRight />
            </div>
            <div className="py-5 border-b flex items-center justify-between hover:shadow-sm cursor-pointer">
              <Link to="/carpet-cleaning">Carpet Cleaning</Link>
              <TiChevronRight />
            </div>
            <div className="py-5 border-b flex items-center justify-between hover:shadow-sm cursor-pointer">
              <Link to="/pest-control">Pest Control & Fumigation Service</Link>
              <TiChevronRight />
            </div>
            <div className="py-5 border-b flex items-center justify-between hover:shadow-sm cursor-pointer">
              <Link to="/gardening-and-landscaping">
                Gardening, Beautification & Landscaping Services
              </Link>
              <TiChevronRight />
            </div>
          
          </div>
        
          <BookingForm />
        </div>
        <div className="md:w-[60%] md:mr-40 space-y-10 p-5 me:p-0">
          <img
            className="md:h-[500px] md:w-[90%]"
            src={cleaninservice}
            alt=""
          />
          <h1 className="md:text-2xl font-bold">Mattress Cleaning</h1>
          <p className="md:pr-44">
            Our expert team provides a comprehensive cleaning solution for your
            mattress, employing advanced techniques and hypoallergenic products.
            We specialize in deep cleaning, stain removal, and allergen
            reduction, ensuring a healthier, fresher, and rejuvenating sleep
            environment.
          </p>
          <div className="w-full flex flex-col md:flex-row border h-fit md:py-5 justify-between">
            <div className="md:w-[60%] md:h-[600px]">
              <img src={hover} alt="" className="h-full object-cover" />
            </div>
            <div className="md:w-[40%]">
              <div className="h-full w-full flex flex-col space-y-5 p-5">
                <h1 className="font bold text-2xl">
                Our team prefers doing  it with perfection.
                </h1>
                <div className="flex flex-col space-y-5">
                  <div className="flex space-x-2 items-center ">
                    <IoCheckmarkCircle />
                    <p>Vacuuming</p>
                  </div>
                  <div className="flex space-x-2 items-center ">
                    <IoCheckmarkCircle />
                    <p>Spot Cleaning Stainsg</p>
                  </div>
                  <div className="flex space-x-2 items-center ">
                    <IoCheckmarkCircle />
                    <p>Deodorizing</p>
                  </div>
                  <div className="flex space-x-2 items-center ">
                    <IoCheckmarkCircle />
                    <p>Vacuum Again</p>
                  </div>
                  <div className="flex space-x-2 items-center ">
                    <IoCheckmarkCircle />
                    <p>Steam Cleaning (Optional)</p>
                  </div>
                  <div className="flex space-x-2 items-center ">
                    <IoCheckmarkCircle />
                    <p>Drying</p>
                  </div>
                  <div className="flex space-x-2 items-center ">
                    <IoCheckmarkCircle />
                    <p>Mattress Protector</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="md:pr-44">
            <p>
              Remember, regular maintenance is key to keeping your apartment
              consistently clean and manageable. Adopting a cleaning schedule
              can help keep tasks from becoming overwhelming.
            </p>
          </div>
          <div className="grid md:grid-cols-2 w-full place-items-center md:gap-10 gap-2">
            {serviceicons.map((item, index) => {
              return (
                <div key={index} className="w-full">
                  <div className="flex flex-row items-center justify-center w-full py-5 space-x-5">
                    <div className="w-[10%] ">
                      <div className="w-10 h-10 rounded-full bg-[#F19C4F] flex items-center justify-center">
                        {" "}
                        {item?.icon}
                      </div>
                    </div>
                    <div className="w-[90%] flex flex-col">
                      <p className="font-bold">{item?.name}</p>
                      <p className="text-xs">{item?.description}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

export default MattressCleaning;
