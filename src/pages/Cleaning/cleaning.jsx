import React, { useState } from "react";
import banner from "../../assets/images/banner.png";
import hover from "../../assets/images/Clean-The-Floors.jpg";
import cleaninservice from "../../assets/images/man-cleaning-office-window-medium-shot.jpg";
import visionLogo from "../../assets/icons/eye.svg";
import teamholder from "../../assets/icons/teamholder.svg";
import builderLogo from "../../assets/icons/builder.svg";
import { FaChevronRight } from "react-icons/fa";
import { IoCheckmarkCircle } from "react-icons/io5";
import { GrUserSettings } from "react-icons/gr";
import { GiDelicatePerfume } from "react-icons/gi";
import { FaStudiovinari } from "react-icons/fa6";
import { FaThumbsUp } from "react-icons/fa";
import serviceBg from "../../assets/images/apartmentBanner.jpeg"
import { Link } from "react-router-dom";
import { TiChevronRight } from "react-icons/ti";
import BookingForm from "../../components/booking_form"

function Cleaning() {
 
  const serviceicons = [
    {
      icon: <GrUserSettings className="text-white text-xl" />,
      name: "Experienced Staff",
      description: "Rule first third above first treeth  the replenish.",
    },
    {
      icon: <GiDelicatePerfume className="text-white text-xl" />,
      name: "Fast Service ",
      description:
        "If you have a great idea, or something to discuss - we are ready to help.",
    },
    {
      icon: <FaStudiovinari className="text-white text-xl" />,
      name: "Natural products ",
      description:
        "If you have a great idea, or something to discuss - we are ready to help.",
    },
    {
      icon: <FaThumbsUp className="text-white text-xl" />,
      name: "Best Equipment",
      description:
        "If you have a great idea, or something to discuss - we are ready to help.",
    },
  ];
  return (
    <section>
      <div className="relative">
        <img src={banner} alt="Banner description" className="w-full" />
        <div className="absolute md:top-20 top-0 h-full flex flex-col md:pl-20 md:w-[800px] justify-center md:left-0 p-8">
          <h1 className="text-white md:text-[48px] leading-tight  font-bold">
            HOME cleaning
          </h1>
          <div className="flex space-x-3 items-center text-gray-50 font-extralight">
            <p>Home</p>
            <FaChevronRight />
            <p>Services</p>
            <FaChevronRight />
            <p>Home Cleaning</p>
          </div>
        </div>
      </div>
      <div className="flex flex-col md:flex-row md:p-20 md:space-x-20 w-full">
        <div className="flex flex-col  md:ml-20 justify-between py-7 md:w-[40%] w-[100%] p-5 md:p-0">
          <div className="w-full md:border-2 rounded-xl h-fit p-5">
            <div className="flex gap-2 items-center">
              <hr className="bg-black h-[5px] w-[100px]" />
              <h1 className="text-black uppercase">our services</h1>
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
              <Link to="/gardening-and-landscaping">Gardening, Beautification & Landscaping Services</Link>
              <TiChevronRight />
            </div>
            <div className="py-5 flex items-center justify-between hover:shadow-sm cursor-pointer">
              <Link to="/industrial-cleaning">Industrial Cleaning</Link>
              <TiChevronRight />
            </div>
          </div>
          <div className="w-full border-2 border-black h-[400px] rounded-xl service-img relative">
            <div className="w-full h-full bg-indigo-900 opacity-70 rounded-xl absolute flex flex-col items-center justify-center"></div>
            <div className="w-full h-full rounded-xl absolute flex flex-col items-center justify-center p-16">
              <p className="text-white z-50 text-[36px] text-center">
                Worried about your home & office cleaning?{" "}
              </p>
              <p className="text-white z-50">
                Hire us for any professional building maintenance company offering all types of cleaning and building maintenance needs{" "}
              </p>
            </div>
          </div>
          <BookingForm/>
          {/* <div className="w-full h-fit flex justify-center items-center relative md:border-2 rounded-xl mt-10">
            <div className="w-full h-full flex items-center justify-center p-5 md:p-0">
              <div className="h-fit w-[100%] md:bg-white md:rounded-xl md:shadow-md flex flex-col items-center space-y-10 md:p-10">
                <p className="text-xl"> Book a Service</p>
                <div className="w-full flex flex-col space-y-6">
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
                    <p>Your Location</p>
                    <input
                      type="text"
                      className="border p-2 w-full bg-gray-100 rounded"
                    />
                  </label>

                  <label htmlFor="" className="flex flex-col space-y-1">
                    <p> Choose a service</p>
                    <select
                      className="border p-2 w-full bg-gray-100 rounded"
                      onChange={(e) => {
                        setBookingType(e.target.value);
                      }}
                    >
                      <option value="">Select Service</option>

                      <option value="Apartment Cleaning">
                        Apartment Cleaning
                      </option>
                      <option value="Sofa Cleaning">Sofa Cleaning</option>
                      <option value="Mattress Cleaning">
                        Mattress Cleaning
                      </option>
                      <option value="Gardening, Beautification & Landscaping services">
                        Gardening, Beautification & Landscaping services
                      </option>
                      <option value="Pest Control & Fumigation Service Service">
                        Pest Control & Fumigation Service Service
                      </option>
                    
                      <option value="Industrial Cleaning">
                        Industrial Cleaning
                      </option>
                    </select>
                    {bookingType === "Apartment Cleaning" &&
                      apartmentPricingSelector}
                    {bookingType === "Sofa Cleaning" && sofaPricingSelector}
                    {bookingType === "Mattress Cleaning" &&
                      matteressPricingSelector}
                    {bookingType === "Car Washing and Detailing" &&
                      carTypeselector}
                    {carType === "Sedan/Saloon" && saloonDetailsTypeselector}
                    {carType === "Mini SUV's" && miniSuvDetailsTypeselector}
                    {carType === "SUV's" && suvDetailsTypeselector}
                    {detailType === "Trucks" && truckDetailsTypeselector}
                  </label>

                  <label
                    htmlFor="datePicker"
                    className="flex flex-col space-y-1"
                  >
                    <p>Date</p>
                    <input
                      type="date"
                      id="datePicker"
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
          </div> */}
        </div>
        <div className="md:w-[60%] md:mr-40 space-y-10 p-5 me:p-0">
          <img
            className="md:h-[500px] md:w-[90%]"
            src={cleaninservice}
            alt=""
          />
          <h1 className="md:text-2xl font-bold">
            No matter how messy it is, we do the best.
          </h1>
          <p className="md:pr-44">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur.
          </p>
          <div className="w-full flex flex-col md:flex-row h-fit md:py-5 justify-between">
            <div className="md:w-[60%] md:h-[600px]">
              <img src={hover} alt="" className="h-full object-cover" />
            </div>
            <div className="md:w-[40%]">
              <div className="h-full w-full flex flex-col space-y-5 p-5">
                <h1 className="font bold text-2xl">
                  Our team prefer it doing with the perfection.
                </h1>
                <div className="flex flex-col space-y-5">
                  <div className="flex space-x-2 items-center ">
                    <IoCheckmarkCircle />
                    <p>Recurring Cleaning</p>
                  </div>
                  <div className="flex space-x-2 items-center ">
                    <IoCheckmarkCircle />
                    <p>Occasional Cleaning</p>
                  </div>
                  <div className="flex space-x-2 items-center ">
                    <IoCheckmarkCircle />
                    <p>Apartment Cleaning</p>
                  </div>
                  <div className="flex space-x-2 items-center ">
                    <IoCheckmarkCircle />
                    <p>Special Event Cleaning</p>
                  </div>
                  <div className="flex space-x-2 items-center ">
                    <IoCheckmarkCircle />
                    <p>Housekeeping Services</p>
                  </div>
                  <div className="flex space-x-2 items-center ">
                    <IoCheckmarkCircle />
                    <p>Move Out & Move in Cleaning</p>
                  </div>
                  <div className="flex space-x-2 items-center ">
                    <IoCheckmarkCircle />
                    <p>Refrigerator Cleaning</p>
                  </div>
                  <div className="flex space-x-2 items-center ">
                    <IoCheckmarkCircle />
                    <p>Oven Cleaning.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="md:pr-44">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur.
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

      <div className="bg-contain h-96 w-[100%] relative object-scale-down bg-black property-img ">
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
      </div>
      <div className="w-full h-full flex items-center justify-center bg-transparent md:-mt-40 z-50 relative pb-20">
        <div className="bg-white md:w-[80%] h-fit border rounded md:p-10">
          <div className="w-full h-full grid md:grid-cols-3 md:gap-40 place-items-center p-5 gap-y-10 md:gap-y-0">
            <div className="w-full flex flex-col space-y-10">
              <label htmlFor="" className="flex flex-col space-y-1">
                <p>Choose a servive</p>
                <input
                  type="text"
                  className="border p-2 w-full bg-gray-100 rounded"
                  placeholder="Home Cleaning"
                  disabled
                />
              </label>
              <label htmlFor="" className="flex flex-col space-y-1">
                <p> Your name</p>
                <input
                  type="text"
                  className="border p-2 w-full bg-gray-100 rounded"
                />
              </label>
              <label htmlFor="" className="flex flex-col space-y-1">
                <p> Email Address</p>
                <input
                  type="text"
                  className="border p-2 w-full bg-gray-100 rounded"
                />
              </label>
            </div>
            <div className="w-full flex flex-col space-y-10">
            
              <label htmlFor="" className="flex flex-col space-y-1">
                <p> Number of washrooms</p>
                <input
                  type="text"
                  className="border p-2 w-full bg-gray-100 rounded"
                />
              </label>
              <label htmlFor="" className="flex flex-col space-y-1">
                <p> Number of garages</p>
                <input
                  type="text"
                  className="border p-2 w-full bg-gray-100 rounded"
                />
              </label>
            </div>
            <div className="w-full flex flex-col space-y-10">
              <label htmlFor="" className="flex flex-col space-y-1">
                <p> Number of beds</p>
                <input
                  type="text"
                  className="border p-2 w-full bg-gray-100 rounded"
                />
              </label>
              <label htmlFor="" className="flex flex-col space-y-1">
                <p> Total floor area</p>
                <input
                  type="text"
                  className="border p-2 w-full bg-gray-100 rounded"
                />
              </label>
              <label htmlFor="" className="flex flex-col space-y-1">
                <p> Number of rooms</p>
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
      </div>
    </section>
  );
}

export default Cleaning;
