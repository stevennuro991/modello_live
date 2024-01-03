import React, { Fragment, useEffect, useState } from "react";
import banner from "../../assets/images/banner.png";
import aboutUs from "../../assets/images/aboutus.png";
import missionLogo from "../../assets/icons/mission.svg";
import visionLogo from "../../assets/icons/eye.svg";
import teamholder from "../../assets/icons/teamholder.svg";
import builderLogo from "../../assets/icons/builder.svg";
import { IoCheckmarkCircle } from "react-icons/io5";
import {
  FaArrowRight,
  FaRegCircleCheck,
  FaStudiovinari,
  FaThumbsUp,
} from "react-icons/fa6";
import { Link } from "react-router-dom";
import serviceBg from "../../assets/images/disinfection-worker-spraying-subway-staircase-due-covid19-pandemic.jpg";
import { GrUserSettings } from "react-icons/gr";
import { GiDelicatePerfume } from "react-icons/gi";
import service1 from "../../assets/images/Building-Maintenance-Technician_resized.jpg";
import service2 from "../../assets/images/Commercial-Carpet-Cleaning-Mistakes.jpg";
import service3 from "../../assets/images/Furniture-Cleaning-Banner.jpg";
import service5 from "../../assets/images/AdobeStock-RqF2ztT0gI.jpg";
import service6 from "../../assets/images/disinfection-worker-spraying-subway-staircase-due-covid19-pandemic.jpg";
import service8 from "../../assets/images/30978327be125ef27a4acdea5899e0552088923e.png";
import service7 from "../../assets/images/hedge-trimming.jpg";
import slide1 from "../../assets/images/slide1.jpeg";
import slide2 from "../../assets/images/slide5.jpeg";
import slide3 from "../../assets/images/slide4.jpeg";
import BookingForm from "../../components/booking_form";

function Home() {
  const [slideIndex, setSlideIndex] = useState(0);
  const [carType, setCarType] = useState();
  const [detailType, setDetailType] = useState();
  const serviceicons = [
    {
      icon: <GrUserSettings className="text-white text-xl" />,
      name: "Pick a suitable Plan",
      description:
        "We offer tailored services for personal, commercial, and industrial spaces, ensuring quality solutions for every need.",
    },
    {
      icon: <GiDelicatePerfume className="text-white text-xl" />,
      name: "Set your schedule",
      description:
        "Our intuitive scheduling tool adapts to your lifestyle, enabling easy planning and efficient time management for exceptional customer service.",
    },
    {
      icon: <FaStudiovinari className="text-white text-xl" />,
      name: "Get things done",
      description:
        "Our platform boosts focus and organization, enabling easy progress tracking and task completion. Simply book with us and relax as we efficiently handle everything.",
    },
  ];
  const serviceCards = [
    // {
    //   image: service1,
    //   name: "Home Cleaning",
    //   pricing: "Starting from 20cedis",
    //   link: "/cleaning-services",
    // },
    {
      image: service8,
      name: "Industrial Cleaning",
      pricing: "Request a quote",
      link: "/industrial-cleaning",
    },
    {
      image: service2,
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
  const surroundingCards = [
    {
      image: service1,
      name: "Residential, services",
      pricing: "Things to know choosing a cleaning service",
      link: "/cleaning-services",
    },
    {
      image: service1,
      name: "Residential, services",
      pricing: "Things to know choosing a cleaning service",
      link: "/cleaning-services",
    },
    {
      image: service1,
      name: "Residential, services",
      pricing: "Things to know choosing a cleaning service",
      link: "/cleaning-services",
    },
  ];
  const serviceIcons = [
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

  const textSlides = [
    {
      image: slide1,
    },
    {
      image: slide2,
    },
    {
      image: slide3,
    },
  ];

  useEffect(() => {
    const slideInterval = setInterval(() => {
      setSlideIndex((index) => {
        return index > textSlides.length - 2 ? 0 : index + 1;
      });
    }, 6000);

    return () => clearInterval(slideInterval);
  }, [slideIndex, textSlides.length]);

  return (
    <section className="">
      <div className="md:relative">
        <div className="">
          {textSlides?.map((_, index) => {
            return (
              <Fragment key={index}>
                <div
                  className={`${
                    index === slideIndex
                      ? "block animate-fadeIn absolute w-full md:items-center md:justify-center object-contain h-full overflow-hidden"
                      : "hidden"
                  }`}
                >
                  <div className="flex items-center md:h-[640px] h-[400px] justify-center">
                    <img
                      loading="lazy"
                      src={textSlides[index]?.image}
                      alt="Banner description"
                      className="w-full h-full z-0 opacity-90 object-cover"
                    />
                  </div>
                </div>
              </Fragment>
            );
          })}
          <div className="md:abosulte">
            <img src={banner} alt="Banner description" className="w-full" />
            <div className="animate__animated animate__lightSpeedInLeft absolute top-40 h-1/2 flex flex-col md:pl-40 md:w-[800px] justify-center md:left-0 p-5 space-y-5">
              <div className="flex gap-2 items-center">
                <hr className="bg-white h-[5px] w-[100px]" />
                <h1 className="text-white text-ls ">INTRODUCING MODELLO</h1>
              </div>
              <h1 className="text-white md:text-[30px] leading-tight  font-bold md:w-[90%]">
                Worried about maintaining your buildings?
              </h1>
              <p className="text-white text-xl font-bold md:w-[60%]">
                Hire us! We are a professional building maintenance company
                offering all types of cleaning and building maintenance needs.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white md:py-20 p-5 pt-72 w-full flex flex-col md:flex-row items-center justify-center md:px-40 md:space-x-10">
        <div className="md:w-[50%] h-full">
          <div className="flex justify-start gap-2 items-center">
            <hr className="bg-black h-[5px] w-[100px]" />
            <h1 className="text-black text-ls uppercase">About Company</h1>
          </div>

          <div className="flex flex-col space-y-5">
            <h1 className="pt-6 md:text-[32px] font-semibold">
              Why Choose Us?
            </h1>
            <p>
              At Modello, we believe that the value of your building is not just
              in its structure, but in how well it's cared for. Our
              comprehensive range of services - from general cleaning to
              building renovation - are designed to ensure that every aspect of
              your property is:
            </p>
            <ul >
              <li>
                <p>
                  Impeccably maintained, preserved, and enhanced: Regular
                  maintenance with Modello isn’t just about upkeep; it’s about
                  enhancing your property’s value and appeal. Our expert team
                  employs the latest techniques in:
                </p>
                <ul className="list-disc pl-10">
                  <li>Cleaning</li>
                  <li>Pest Control & Fumigation Services</li>
                  <li>
                  Gardening, Beautification & Landscaping Services
                  </li>
                  <li>
                  Building Maintenance (Renovation Services)
                  </li>
                </ul>
              </li>
              <li>
                <p className="mt-10">
                  Tailored to your needs: We understand that every property is
                  unique. That’s why we offer customized solutions tailored to
                  the specific needs of your building, ensuring optimal care and
                  maintenance.
                </p>
              </li>
              <li>
              <p className="mt-10">
                  Sustainable and Efficient: Our commitment to sustainability
                  means we use eco-friendly methods and materials, ensuring a
                  better environment for you and future generations.
                </p>
              </li>
            </ul>

            <p>
              Join our community of satisfied clients who trust us to keep their
              buildings not just functioning, but thriving. Contact us today to
              learn more about how we can help enhance the value of your
              property.
            </p>
            <Link
              to="about"
              className="text-blue-500 text-sm underline pb-10 cursor-pointer z-50"
            >
              Learn more about the company
            </Link>
          </div>
        </div>
        <div className="md:w-[50%] z-50">
          <BookingForm />
        </div>
      </div>
      <div className="bg-contain h-[1000px] md:h-[600px] w-[100%] relative md:object-scale-down property-img ">
        <img
          src={serviceBg}
          alt="..."
          className="h-full w-full object-cover absolute"
          // onError={() => setImageError(true)}
        />
        <div className="bg-blue-900 w-full h-full text-white absolute opacity-70 z-10"></div>
        <div className="absolute flex w-full h-full justify-center z-20 gap-2 items-center md:-mt-60 -mt-[400px]">
          <hr className="bg-white h-[5px] w-[100px]" />
          <h1 className="text-white uppercase">how it works</h1>
          <hr className="bg-white h-[5px] w-[100px]" />
        </div>
        <div className="absolute flex w-full h-full justify-center items-center z-20 gap-2 md:-mt-40 -mt-80">
          <h1 className="pt-6 justify-center item-center w-29 text-[32px] md:px-[480px] text-center font-semibold text-white">
            Get amazing building maintenance in 3 simple steps{" "}
          </h1>
        </div>
        <div className="grid md:grid-cols-3 w-full md:place-items-center md:gap-10 z-30 relative h-full md:px-60 pt-[250px] p-5 md:p-0">
          {serviceicons.map((item, index) => {
            return (
              <div key={index} className="w-full">
                <div className="flex flex-row items-center justify-center w-full py-5 space-x-5">
                  <div className="w-[20%] ">
                    <div className="w-20 h-20 rounded-full bg-[#F19C4F] flex items-center justify-center">
                      {" "}
                      {item?.icon}
                    </div>
                  </div>
                  <div className="w-[90%] flex flex-col text-white">
                    <p className="font-bold">{item?.name}</p>
                    <p className="text-xs">{item?.description}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className="flex flex-col md:flex-row md:px-60 items-center md:justify-between py-7 space-y-5 p-5">
        <div className="flex flex-col space-y-5 md:w-[40%] ">
          <div className="flex gap-2 items-center w-full justify-start">
            <hr className="bg-black h-[5px] w-[100px]" />
            <h1 className="text-black uppercase">Services</h1>
            <hr className="bg-black h-[5px] w-[100px]" />
          </div>
          <h1 className="flex justify-start items-center md:text-2xl font-semibold md:pr-32">
            Offering best building maintenance services{" "}
          </h1>
        </div>
        <div className="md:w-[40%] ">
          <p>
            We provide all kinds of building maintenance solutions to small and
            big businesses, organizations and homes.
          </p>
        </div>
        <div>
          <div className="w-full">
            <Link
              to="/service"
              className="uppercase w-[100%] bg-blue-500 text-white p-2 flex items-center justify-center rounded-md"
            >
              <p>More Services</p>
            </Link>
          </div>
        </div>
      </div>
      <div className="grid md:grid-cols-3 w-full gap-y-10 place-items-center pb-40 p-10 md:px-60 md:gap-x-20">
        {serviceCards.map((item, index) => {
          return (
            <Link
              key={index}
              to={item?.link}
              className="md:w-80 h-80 hover:scale-[1.02] rounded-lg duration-150"
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
      <div className="flex md:flex-row flex-col md:px-32 md:space-x-20 py-7 p-5">
        <div className="">
          <div className="flex gap-2 items-center">
            <hr className="bg-black h-[5px] w-[100px]" />
            <h1 className="text-black">WHY CHOOSE US</h1>
          </div>
          <h1 className="font-bold md:w-[400px] text-4xl pt-6">
            Amazing benefits with us
          </h1>

          <div className="grid md:grid-cols-2 w-full md:place-items-center md:gap-10">
            {serviceIcons.map((item, index) => {
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
        <img className="h-1/2 md:w-1/2" src={aboutUs} alt="" />
      </div>
      {/* <div className="relative h-[400px] md:h-full">
        <img src={banner} alt="Banner description" className="w-full h-full" />
        <div className="absolute top-10 h-full flex flex-col md:pl-20  w-full md:w-[800px] justify-center md:right-0 md:p-8 p-5 space-y-5 ">
          <div className="flex gap-2 items-center">
            <hr className="bg-white h-[5px] w-[100px]" />
            <h1 className="text-white text-ls">Founders Message</h1>
          </div>
          <p className="text-white md:w-[60%]">
            “Es un hecho establecido hace demasiado tiempo que un lector se
            distraerá con el contenido del texto de un sitio mientras que mira
            su diseño. El punto de usar Lorem Ipsum es que tiene una
            distribución más o menos normal de las letras, al contrario de usar
            textos como por ejemplo "Contenido aquí,"
          </p>
          <p className="text-white md:w-[60%]">Kwame Boakye Founder, Moppers</p>
        </div>
      </div> */}

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
      </div>
      <div className="w-full h-full flex items-center justify-center bg-transparent md:-mt-40 z-50 relative">
        <div className="bg-white md:w-[80%] h-fit border rounded md:p-10">
          <div className="w-full h-full grid md:grid-cols-3 md:gap-40 place-items-center p-5 gap-y-10 md:gap-y-0">
            <div className="w-full flex flex-col space-y-10">
              <label htmlFor="" className="flex flex-col space-y-1">
                <p>Choose a servive</p>
                <input
                  type="text"
                  className="border p-2 w-full bg-gray-100 rounded"
                />
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
                <input
                  type="text"
                  className="border p-2 w-full bg-gray-100 rounded"
                />
              </label>
            
            </div>
            <div className="w-full flex flex-col space-y-10">
              <label htmlFor="" className="flex flex-col space-y-1">
                <p> Total floor area</p>
                <input
                  type="text"
                  className="border p-2 w-full bg-gray-100 rounded"
                />
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
          <div className="w-full h-full grid md:grid-cols-3  gap-10 md:gap-40 place-items-center py-10 p-5 md:p-0">
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
      {/* <div className="flex flex-col md:flex-row md:px-60 items-center md:justify-between py-7 space-y-5 p-5">
        <div className="flex flex-col space-y-5 md:w-[40%] ">
          <div className="flex gap-2 items-center w-full justify-start">
            <hr className="bg-black h-[5px] w-[100px]" />
            <h1 className="text-black uppercase">Blog</h1>
            <hr className="bg-black h-[5px] w-[100px]" />
          </div>
          <h1 className="flex justify-start items-center md:text-3xl font-semibold md:pr-32">
            Offering Best Cleaning Services{" "}
          </h1>
        </div>
        <div className="md:w-[40%] ">
          <p> Tips to keep the surroundings clean</p>
        </div>
        <div>
          <div className="w-full">
            <Link
              to="/service"
              className="uppercase w-[100%] bg-blue-500 text-white p-2 flex items-center justify-center rounded-md"
            >
              <p>More Services</p>
            </Link>
          </div>
        </div>
      </div> */}
      {/* <div className="grid md:grid-cols-3 w-full place-items-center gap-10 md:px-40 pb-20 p-5 md:p-0">
        {surroundingCards.map((item, index) => {
          return (
            <Link
              key={index}
              to={item?.link}
              className="md:w-80 h-80   hover:scale-[1.02] rounded-lg duration-150"
            >
              <div className="flex w-full h-full relative rounded-lg hover:cursor-pointer flex-col justify-between  bg-cover object-contain bg-transparent">
                <div className="rounded-lg bg-contain h-[75%] w-full object-scale-down bg-black property-img ">
                  <img
                    src={item?.image}
                    alt="..."
                    className=" h-full object-fill rounded-lg relative shadow-md"
                  />
                </div>
                <div className="p-3 flex rounded-lg abolute w-full space-y-1 items-center justify-center">
                  <div className="flex w-full -mt-40 z-50 bg-white shadow-md py-2 items-center justify-center mx-auto rounded-lg">
                    <div className="flex flex-col w-[80%] ">
                      <h3>{item?.name}</h3>
                      <h6 className="font-extralight text-sm">
                        {item?.pricing}
                      </h6>
                    </div>
                    <div className="h-10 w-10 border rounded-full flex items-center justify-center">
                      <FaArrowRight className="text-blue-500" />
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          );
        })}
      </div> */}
    </section>
  );
}

export default Home;
