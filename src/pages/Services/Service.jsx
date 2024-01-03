import React, { useState } from "react";
import banner from "../../assets/images/ac.jpg";
import aboutUs from "../../assets/images/aboutus.png";
import missionLogo from "../../assets/icons/mission.svg";
import visionLogo from "../../assets/icons/eye.svg";
import teamholder from "../../assets/icons/teamholder.svg";
import builderLogo from "../../assets/icons/builder.svg";
import { FaArrowRight } from "react-icons/fa6";
import { Link } from "react-router-dom";
import service1 from "../../assets/images/apartmentBanner.jpeg";
import service2 from "../../assets/images/Commercial-Carpet-Cleaning-Mistakes.jpg";
import service3 from "../../assets/images/Furniture-Cleaning-Banner.jpg";
import service4 from "../../assets/images/services.jpeg";
import service5 from "../../assets/images/AdobeStock-RqF2ztT0gI.jpg";
import service6 from "../../assets/images/disinfection-worker-spraying-subway-staircase-due-covid19-pandemic.jpg";
import service8 from "../../assets/images/30978327be125ef27a4acdea5899e0552088923e.png";
import service7 from "../../assets/images/hedge-trimming.jpg";
import serviceBg from "../../assets/images/disinfection-worker-spraying-subway-staircase-due-covid19-pandemic.jpg";

function Service() {
  const serviceCards = [
    {
      image: service8,
      name: "Industrial Cleaning",
      pricing: "Request a quote",
      link: "/industrial-cleaning",
    },
    {
      image: service4,
      name: "Domestic Cleaning / Commercial Cleaning",
      pricing: "Starting from 700cedis",
      link: "/domestic-and-commercial-cleaning",
    },
    {
      image: service2,
      name: "Carpet Cleaning",
      pricing: "Starting from 120cedis",
      link: "/carpet-cleaning",
    },
    {
      image: service1,
      name: "Apartment Cleaning",
      pricing: "Starting from 700cedis",
      link: "/apartment-cleaning",
    },
    {
      image: service3,
      name: "Sofa Cleaning",
      pricing: "Starting from 80cedis",
      link: "/sofa-cleaning",
    },
    {
      image: service5,
      name: "Mattress Cleaning",
      pricing: "Starting from 180cedis",
      link: "/mattress-cleaning",
    },
    
    {
      image: service6,
      name: "Pest Control & Fumigation Service", 
      pricing: "Starting from 550cedis",
      link: "/pest-control",
    },
    {
      image: service7,
      name: "Gardening, Beautification & Landscaping Services",
      pricing: "Starting from 550cedis",
      link: "/gardening-and-landscaping",
    },
   
  ];

  const textCards = [
    {
      text: "",
    },
    {
      text: "",
    },
  ];

  return (
    <section>
      <div className="relative">
        <img src={banner} alt="Banner description" className="w-full opacity-75" />
        <div className="animate__animated animate__lightSpeedInLeft absolute md:top-20 top-0 h-full flex flex-col md:pl-20 md:w-[800px] justify-center  md:left-0 md:p-8 p-5 ">
          <div className="flex gap-2 items-center">
          <hr className="bg-blue-800 h-[5px] w-[100px]" />
            <h1 className="text-blue-800 text-ls">Our Services</h1>
          </div>
          <h1 className="text-blue-800 md:text-[48px] leading-tight  md:font-bold">
          Professional building maintenance services for your facilities.
          </h1>
          <p className="text-blue-800 hidden md:block md:w-[60%]">
          We are a professional building maintenance company founded in 2018 and providing
            leading commercial and residential building maintenance solutions in Ghana, West Africa.
          </p>
        </div>
      </div>

      <div className="flex flex-col px-12 justify-between py-7 space-y-5">
        <div className="flex gap-2 items-center w-full justify-center">
          <hr className="bg-black h-[5px] w-[80px]" />
          <h1 className="text-black uppercase">our services</h1>
          <hr className="bg-black h-[5px] w-[80px]" />
        </div>
        <h1 className="flex justify-center items-center  text-3xl font-semibold  text-center">
        We provide all kinds of building maintenance needs
        </h1>
      </div>
      <div className="grid md:grid-cols-3 w-full  gap-y-10 place-items-center pb-40 p-10 md:px-60">
        {serviceCards.map((item, index) => {
          return (
            <Link
              key={index}
              to={item?.link}
              className="md:w-80 h-80   hover:scale-[1.02] rounded-lg duration-150"
            >
              <div className="flex w-full h-full border relative rounded-lg hover:cursor-pointer flex-col justify-between shadow-md bg-cover object-contain bg-white">
                <div className="rounded-lg bg-contain h-[75%] w-full object-scale-down bg-black property-img ">
                  <img
                    src={item?.image}
                    alt="..."
                    className=" h-full object-fill rounded-t-lg"
                  />
                </div>
                <div className="p-3 flex rounded-lg w-full space-y-1 items-center justify-center">
                  <div className="flex flex-col w-[80%]">
                    <h3>{item?.name}</h3>
                    <h6 className="font-extralight">{item?.pricing}</h6>
                  </div>
                  <div className="h-10 w-10 border rounded-full flex items-center justify-center">
                    <FaArrowRight className="text-blue-500" />
                  </div>
                </div>
              </div>
            </Link>
          );
        })}
      </div>

      {/* <div className="bg-gray-100 py-20 w-full flex items-center justify-center">
        <div className="md:px-10">
          <div className="flex justify-center gap-2 items-center">
            <hr className="bg-black h-[5px] w-[100px]" />
            <h1 className="text-black text-ls uppercase">testimonials</h1>
            <hr className="bg-black h-[5px] w-[100px]" />
          </div>

          <div className="flex flex-col justify-center items-center space-y-10">
            <h1 className="pt-6 justify-center item-center w-29 text-[32px] md:px-[400px] text-center font-semibold">
              Trusted by thousand of people & companies.{" "}
            </h1>
            <div className="md:grid md:grid-cols-2 w-full place-items-center pb-40 md:px-40">
              {textCards.map((item, index) => {
                return (
                  <div
                    key={index}
                    className="md:w-[450px] h-72 hover:scale-[1.02] duration-150 p-5 md:p-0"
                  >
                    <div className="flex w-full h-full border relative hover:cursor-pointer flex-col justify-between shadow-md bg-cover object-contain bg-white"></div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div> */}

      {/* <div className="bg-contain h-96 w-[100%] relative object-scale-down bg-black property-img ">
        <img
          src={serviceBg}
          alt="..."
          className="h-full w-full object-cover absolute"
          // onError={() => setImageError(true)}
        />
        <div className="bg-blue-900 w-full h-full text-white absolute opacity-70 z-10"></div>
        <div className="absolute flex w-full h-full justify-center z-20 gap-2 items-center -mt-28">
          <hr className="bg-white h-[5px] w-[100px]" />
          <h1 className="text-white uppercase">cost calculator</h1>
          <hr className="bg-white h-[5px] w-[100px]" />
        </div>
        <div className="absolute flex w-full h-full justify-center items-center z-20 gap-2 -mt-16">
          <h1 className="pt-6 justify-center item-center w-29 text-[32px] md:px-[400px] text-center font-semibold text-white">
            Be a part of hundreds of happy families
          </h1>
        </div>
      </div> */}
      {/* <div className="w-full h-full flex items-center justify-center bg-transparent md:-mt-40 z-50 relative pb-10">
        <div className="bg-white md:w-[80%] h-fit border rounded md:p-10">
          <div className="w-full h-full grid md:grid-cols-3 md:gap-40 place-items-center p-5 gap-y-10 md:gap-y-0">
            <div className="w-full flex flex-col space-y-10">
              <label htmlFor="" className="flex flex-col space-y-1">
                <p> Choose a service</p>
                <select
                  className="border p-2 w-full bg-gray-100 rounded"
                  onChange={(e) => {
                    setBookingType(e.target.value);
                  }}
                >
                  <option value="">Select Service</option>

                  <option value="Apartment Cleaning">Apartment Cleaning</option>
                  <option value="Sofa Cleaning">Sofa Cleaning</option>
                  <option value="Mattress Cleaning">Mattress Cleaning</option>
                  <option value="Gardening, Beautification & Landscaping services">
                    Gardening, Beautification & Landscaping services
                  </option>
                  <option value="Pest Control & Fumigation Service Service">
                    Pest Control & Fumigation Service Service
                  </option>
                  <option value="Car Washing and Detailing">
                    Car Washing and Detailing
                  </option>
                  <option value="Industrial Cleaning">
                    Industrial Cleaning
                  </option>
                </select>
              </label>
              <label htmlFor="" className="flex flex-col space-y-1">
                <p> Your name</p>
                <input
                  type="text"
                  className="border p-2 w-full bg-gray-100 rounded"
                />
              </label>
            </div>
            <div className="w-full flex flex-col space-y-10">
              <label htmlFor="" className="flex flex-col space-y-1">
                <p> Type of cleaning</p>
                {bookingType === "Apartment Cleaning" &&
                  apartmentPricingSelector}
                {bookingType === "Sofa Cleaning" && sofaPricingSelector}
                {bookingType === "Mattress Cleaning" &&
                  matteressPricingSelector}
                {bookingType === "Car Washing and Detailing" && carTypeselector}
              </label>
           
            </div>
            <div className="w-full flex flex-col space-y-10">
              <label htmlFor="" className="flex flex-col space-y-1">
                <p> Total floor area</p>
                {carType === "Sedan/Saloon" && saloonDetailsTypeselector}
                {carType === "Mini SUV's" && miniSuvDetailsTypeselector}
                {carType === "SUV's" && suvDetailsTypeselector}
                {detailType === "Trucks" && truckDetailsTypeselector}
              </label>
              <label htmlFor="" className="flex flex-col space-y-1">
                <p> Email address</p>
                <input
                  type="text"
                  className="border p-2 w-full bg-gray-100 rounded"
                />
              </label>
            </div>
          </div>
          <div className="w-full h-full grid md:grid-cols-3  gap-10 md:gap-40 place-items-center py-10 p-5 md:p-5">
            <div className="w-full">
              <button className="uppercase w-[100%] bg-blue-500 text-white p-2 flex items-center justify-center rounded-md">
                <p>Submit</p>
              </button>
            </div>
            <div>
              <p className="font-extralight text-sm">
                Submit this information and we will send you the cost for the
                service.
              </p>
            </div>
            <div></div>
          </div>
        </div>
      </div> */}
      {/* <div className="w-full h-96 py-10">
        <div></div>
      </div> */}
    </section>
  );
}

export default Service;
