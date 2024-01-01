import React, { useState } from "react";
import banner from "../../assets/images/services.jpeg";
import aboutUs from "../../assets/images/aboutus.png";
import missionLogo from "../../assets/icons/mission.svg";
import visionLogo from "../../assets/icons/eye.svg";
import teamholder from "../../assets/icons/teamholder.svg";
import builderLogo from "../../assets/icons/builder.svg";
import { FaArrowRight } from "react-icons/fa6";
import { Link } from "react-router-dom";
import service1 from "../../assets/images/Building-Maintenance-Technician_resized.jpg";
import service2 from "../../assets/images/Commercial-Carpet-Cleaning-Mistakes.jpg";
import service3 from "../../assets/images/Furniture-Cleaning-Banner.jpg";
import service4 from "../../assets/images/Locate-a-Car-Detailing-Near-You.jpg";
import service5 from "../../assets/images/AdobeStock-RqF2ztT0gI.jpg";
import service6 from "../../assets/images/ixtR4JdzySzNOZbBcECKfrWdwnzoKLET1622049616.webp";
import service8 from "../../assets/images/30978327be125ef27a4acdea5899e0552088923e.png";
import service7 from "../../assets/images/hedge-trimming.jpg";
import serviceBg from "../../assets/images/disinfection-worker-spraying-subway-staircase-due-covid19-pandemic.jpg";

function Service() {
  const [bookingType, setBookingType] = useState();
  const [carType, setCarType] = useState();
  const [detailType, setDetailType] = useState();

  const apartmentPricingSelector = (
    <>
      <select className="border p-2 w-full bg-gray-100 rounded">
        <option value="700-800">Select Apartment Type</option>
        <option value="700-800">1 Bedroom Apartment (GH₵ 700-800)</option>
        <option value="850-950">2 Bedroom Apartment (GH₵ 850-950)</option>
        <option value="980-1065">3 Bedroom Apartment (GH₵ 980-1065)</option>
        <option value="1200-1380">4 Bedroom Apartment (GH₵ 1200-1380)</option>
      </select>
    </>
  );

  const sofaPricingSelector = (
    <>
      <select className="border p-2 w-full bg-gray-100 rounded">
        <option value="450-550">Select sofa type</option>
        <option value="450-550">Sofa set 3,2,1,1 (GH₵ 450-550)</option>
        <option value="150-200">2 in 1 sofa (GH₵ 150-200)</option>
        <option value="980-1065">3 in 1 (GH₵ 250 - 300)</option>
        <option value="100-150">Sofa 1ps (GH₵ 100-150)</option>
      </select>
    </>
  );

  const matteressPricingSelector = (
    <>
      <select className="border p-2 w-full bg-gray-100 rounded">
        <option value="700-800">Select Mattress Type</option>
        <option value="450-550">King Size(GH₵ 500)</option>
        <option value="150-200">Queen Size(GH₵ 450)</option>
        <option value="980-1065">Standard Size(GH₵ 300)</option>
        <option value="100-150">Student Matress(GH₵ 180)</option>
      </select>
    </>
  );
  const carTypeselector = (
    <>
      <select
        className="border p-2 w-full bg-gray-100 rounded"
        onChange={(e) => {
          setCarType(e.target.value);
        }}
      >
        <option value="Select Car Type">Select Car Type</option>
        <option value="Sedan/Saloon">Sedan/Saloon</option>
        <option value="Mini SUV's">Mini SUV's</option>
        <option value="SUV's">SUV's</option>
        <option value="Trucks">Trucks</option>
      </select>
    </>
  );
  const saloonDetailsTypeselector = (
    <>
      <select
        className="border p-2 w-full bg-gray-100 rounded"
        onChange={(e) => {
          setDetailType(e.target.value);
        }}
      >
        <option value="Select Details Type">Select Detailing Type</option>
        <option value="Interior Detailing and Cleaning">
          Interior Detailing and Cleaning (GH₵ 265)
        </option>
        <option value="Interior and Exterior(Standard)">
          Interior and Exterior(Standard) (GH₵ 435)
        </option>
        <option value="Interior and Exterior(Duluxe)">
          Interior and Exterior(Duluxe) (GH₵ 510)
        </option>
        <option value="Interior and Exterior(Platinum)">
          Interior and Exterior(Platinum) (GH₵ 625)
        </option>
        <option value="Complete Interior and Exterior(Exclusive)">
          Complete Interior and Exterior(Exclusive) (GH₵ 1030)
        </option>
        <option value="Glass Restoration">Glass Restoration (GH₵ 400)</option>
        <option value="TailLight/HeadLight Restoration">
          TailLight/HeadLight Restoration (GH₵ 350)
        </option>
      </select>
    </>
  );
  const miniSuvDetailsTypeselector = (
    <>
      <select
        className="border p-2 w-full bg-gray-100 rounded"
        onChange={(e) => {
          setDetailType(e.target.value);
        }}
      >
        <option value="Select Details Type">Select Detailing Type</option>
        <option value="Interior Detailing and Cleaning">
          Interior Detailing and Cleaning (GH₵ 320)
        </option>
        <option value="Interior and Exterior(Standard)">
          Interior and Exterior(Standard) (GH₵ 465)
        </option>
        <option value="Interior and Exterior(Duluxe)">
          Interior and Exterior(Duluxe) (GH₵ 540)
        </option>
        <option value="Interior and Exterior(Platinum)">
          Interior and Exterior(Platinum) (GH₵ 655)
        </option>
        <option value="Complete Interior and Exterior(Exclusive)">
          Complete Interior and Exterior(Exclusive) (GH₵ 1050)
        </option>
        <option value="Glass Restoration">Glass Restoration (GH₵ 500)</option>
        <option value="TailLight/HeadLight Restoration">
          TailLight/HeadLight Restoration (GH₵ 450)
        </option>
      </select>
    </>
  );
 
 
  const serviceCards = [
    // {
    //   image: service1,
    //   name: "Home Cleaning",
    //   pricing: "Starting from 20cedis",
    //   link: "/cleaning-services",
    // },
    {
      image: service2,
      name: "Apartment cleaning",
      pricing: "Starting from 700cedis",
      link: "/apartment-cleaning",
    },
    {
      image: service3,
      name: "Sofa Cleaning",
      pricing: "Starting from 450cedis",
      link: "/sofa-cleaning",
    },
    {
      image: service5,
      name: "Mattress Cleaning",
      pricing: "Starting from 180cedis",
      link: "/mattress-cleaning",
    },
    {
      image: service4,
      name: "Domestic cleaning/Commercial Cleaning",
      pricing: "Starting from 265cedis",
      link: "/domestic-and-commercial-cleaning",
    },
    {
      image: service6,
      name: "Pest Control",
      pricing: "Starting from 20cedis",
      link: "/pest-control",
    },
    {
      image: service7,
      name: "Gardening Maintenance and Landscaping",
      pricing: "Starting from 550cedis",
      link: "/gardening-and-landscaping",
    },
    {
      image: service8,
      name: "Industrial cleaning",
      pricing: "Request a quote",
      link: "/industrial-cleaning",
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
        <img src={banner} alt="Banner description" className="w-full" />
        <div className="animate__animated animate__lightSpeedInLeft absolute md:top-20 top-0 h-full flex flex-col md:pl-20 md:w-[800px] justify-center  md:left-0 md:p-8 p-5 ">
          <div className="flex gap-2 items-center">
            <hr className="bg-white h-[5px] w-[100px]" />
            <h1 className="text-white text-ls">Our Services</h1>
          </div>
          <h1 className="text-white md:text-[48px] leading-tight  md:font-bold">
            Professional cleaning services for your homes and offices
          </h1>
          <p className="text-white hidden md:block md:w-[60%]">
            We are a professional cleaning company founded in 1997 and providing
            leading commercial and residential cleaning solutions in the United
            States.
          </p>
        </div>
      </div>

      <div className="flex flex-col px-12 justify-between py-7 space-y-5">
        <div className="flex gap-2 items-center w-full justify-center">
          <hr className="bg-black h-[5px] w-[80px]" />
          <h1 className="text-black uppercase">our sevices</h1>
          <hr className="bg-black h-[5px] w-[80px]" />
        </div>
        <h1 className="flex justify-center items-center  text-3xl font-semibold  text-center">
          We are providing all kind of cleaning services
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
                  <option value="Gardening Maintenance and Landscaping">
                    Gardening Maintenance and Landscaping
                  </option>
                  <option value="Pest Control Service">
                    Pest Control Service
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
