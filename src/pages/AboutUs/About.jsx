import React from "react";
import banner from "../../assets/images/slide2.jpeg";
import aboutUs from "../../assets/images/aboutus.jpeg";
import missionLogo from "../../assets/icons/mission.svg";
import visionLogo from "../../assets/icons/eye.svg";
import teamholder from "../../assets/icons/teamholder.svg";
import builderLogo from "../../assets/icons/builder.svg";

function About() {
  return (
    <section>
      <div className="relative">
        <img loading="lazy" src={banner} alt="Banner description" className="w-full opacity-60" />
        <div className=" animate__animated animate__lightSpeedInLeft absolute md:top-20 top-0 h-full flex flex-col md:pl-20 md:w-[800px] justify-center  left-0 p-8">
          <div className="flex gap-2 items-center">
            <hr className="bg-blue-800 h-[5px] w-[100px]" />
            <h1 className="text-blue-800 text-ls">About us</h1>
          </div>
          <h1 className="text-blue-800 md:text-[48px] leading-tight  font-bold">
            Caring About Your Cleaning Needs
          </h1>
          {/* <p className="text-white">
            Hire us! We are a professional cleaning company offering all type of
            cleaning and maintenance services.
          </p> */}
        </div>
      </div>

      <div className="flex md:px-12 p-5 flex-col md:flex-row justify-between py-7 space-y-5 md:space-y-0">
        <div>
          <div className="flex  gap-2 items-center">
            <hr className="bg-black h-[5px] w-[100px]" />
            <h1 className="text-black">About us</h1>
          </div>
          <h1 className="font-bold md:w-[400px] md:text-4xl pt-6">
            Why Will You Choose Our Services?
          </h1>
          <p className="md:w-[500px] pt-2 text-justify">
            Modello Services is a building maintenance company that was birthed
            in 2018 which pays royalties to Modello and Gem Limited, considered
            one of the leading fabric and PVC vinyl faux leather wholesale
            providers in Ghana, West Africa. The core value of this company is
            to bring convenience to customers and clients while ensuring they
            get value for services. Out of this company, sub-departments were
            formed to properly map out and tackle each societal assistance with
            great professionalism and skills..
          </p>
        </div>
        <img className="md:h-1/2 md:w-1/2" src={aboutUs} alt="" />
      </div>
      <div className="flex items-center justify-center">
        <div className="bg-white item-center w-[1100px]  p-8 rounded-lg shadow-md">
          <div className="flex justify-center item-center">
            {" "}
            <img src={missionLogo} alt="" />
          </div>
          <h2 className="text-2xl flex justify-center item-center font-bold text-blue-900 mb-4">
            MISSION STATEMENT
          </h2>
          <p className="text-gray-700">
            At Modello Services, our mission is to redefine sanitation and
            service standards, elevating the quality of life for individuals,
            families, and businesses across Ghana and West Africa.
          </p>
          <p className="text-gray-700 mt-4">
            We are committed to delivering excellence in every aspect of our
            work, from pristine cleaning services to meticulous property
            maintenance, from creating beautiful, sustainable landscapes to
            providing pest-free environments. Our mission is to create spaces
            that radiate cleanliness, safety, and harmony.
          </p>
          <p className="text-gray-700 mt-4">
            With unwavering dedication to quality, sustainability, and customer
            satisfaction, we aim to be the trusted partner you rely on for a
            cleaner, well-maintained life. We're driven by a vision of a Ghana
            and West Africa where every space, from homes to industrial
            facilities, reflects our commitment to excellence.
          </p>
          <p className="text-gray-700 mt-4">
            Join us in this mission towards a cleaner, safer, and more vibrant
            future across Ghana and West Africa. Choose Modello Services, and
            together, let's make cleanliness and well maintained spaces the
            norm, not the exception.
          </p>
        </div>
      </div>

      <div className="flex items-center justify-center pt-6">
        <div className="bg-white item-center w-[1100px]  p-8 rounded-lg shadow-md">
          <div className="flex justify-center item-center">
            {" "}
            <img src={visionLogo} alt="" />
          </div>
          <h2 className="text-2xl flex justify-center item-center font-bold text-blue-900 mb-4">
            VISION STATEMENT
          </h2>
          <p className="text-gray-700">
            Modello Services is dedicated to redefining the standard of living
            across Ghana and West Africa through its commitment to cleanliness,
            sustainability, and well-maintained spaces. The company envisions a
            future where every home, office, garden, and industrial facility
            reflects its dedication to excellence and environmental
            responsibility. 
          </p>
          <p className="text-gray-700 mt-4">
          This vision is grounded in the belief that the
            beauty and functionality of spaces can greatly enhance the quality
            of life, making them a source of pride, comfort, and inspiration.
            Aspiring to be the industry leader in sanitation and property
            maintenance services, Modello Services is focused on setting new
            benchmarks in service excellence. 
          </p>
          <p className="text-gray-700 mt-4">
          The company aims to transform
            environments into pristine havens, thereby creating a cleaner,
            safer, and more organized world. Through its efforts, Modello
            Services seeks to establish a legacy of enhanced living spaces for
            current and future generations, inviting everyone to join in its
            mission towards a cleaner and more vibrant future in Ghana and West
            Africa.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;

{
  /* <div className="bg-gray-100 py-20 w-full flex items-center justify-center">
<div className="px-10">
  <div className="flex justify-center gap-2 items-center">
    <hr className="bg-black h-[5px] w-[100px]" />
    <h1 className="text-black text-ls">Our Team</h1>
    <hr className="bg-black h-[5px] w-[100px]" />
  </div>

  <div className="flex flex-col justify-center items-center">
    <h1 className="pt-6 justify-center item-center w-29 text-[32px]">
      Meet People behind our company
    </h1>

    <div className="pt-20 flex space-x-12">
      <div className="flex flex-col items-center justify-center">
        <img src={teamholder} alt="" />
        <h1>Kwame Boakye</h1>
        <h1>Kwame Boakye</h1>
      </div>

      <div className="flex flex-col items-center justify-center">
        <img src={teamholder} alt="" />
        <h1>Kwame Boakye</h1>
        <h1>Kwame Boakye</h1>
      </div>

      <div className="flex flex-col items-center justify-center">
        <img src={teamholder} alt="" />
        <h1>Kwame Boakye</h1>
        <h1>Kwame Boakye</h1>
      </div>

      <div className="flex flex-col items-center justify-center">
        <img src={teamholder} alt="" />
        <h1>Kwame Boakye</h1>
        <h1>Kwame Boakye</h1>
      </div>
    </div>
    <div className="pt-20 flex space-x-12">
      <div className="flex flex-col items-center justify-center">
        <img src={teamholder} alt="" />
        <h1>Kwame Boakye</h1>
        <h1>Kwame Boakye</h1>
      </div>

      <div className="flex flex-col items-center justify-center">
        <img src={teamholder} alt="" />
        <h1>Kwame Boakye</h1>
        <h1>Kwame Boakye</h1>
      </div>

      <div className="flex flex-col items-center justify-center">
        <img src={teamholder} alt="" />
        <h1>Kwame Boakye</h1>
        <h1>Kwame Boakye</h1>
      </div>

      <div className="flex flex-col items-center justify-center">
        <img src={teamholder} alt="" />
        <h1>Kwame Boakye</h1>
        <h1>Kwame Boakye</h1>
      </div>
    </div>
  </div>
  <div className="flex gap-2 mt-10 items-center">
    <hr className="bg-black h-[5px] w-[100px]" />
    <h1 className="text-back text-ls">Feautured Services</h1>
  </div>
  <h1 className="text-back text-ls">The Best Service We <br/> Have Provided</h1>
  <h1 className="text-back text-[32] font-bold">
    The Best Service We{" "}
  </h1>
  <h1 className="text-back text-[32] font-bold"> Have Provided</h1>

  <div className="flex space-x-4 px-11 py-11">
    <div className="bg-white relative p-10 w-1/2">
      <div className="flex flex-col">
        <div className="absolute top-[-50px] left-[40%]"><img className="" src={builderLogo} alt="" /></div>
        <h1>Painting</h1>
        <p>
          There creepeth darkness him wherein a the signs face unto best
          seasons female were they're dominion.Brought gathered whales
          was.face unto best seasons female were they're
        </p>
      </div>
    </div>
    <div className="bg-white relative p-10 w-1/2">
      <div className="flex flex-col">
      <div className="absolute top-[-50px] left-[40%]"><img className="" src={builderLogo} alt="" /></div>
        <h1>Painting</h1>
        <p>
          There creepeth darkness him wherein a the signs face unto best
          seasons female were they're dominion.Brought gathered whales
          was.face unto best seasons female were they're
        </p>
      </div>
    </div>
    <div className="bg-white relative p-10 w-1/2">
      <div className="flex flex-col">
      <div className="absolute top-[-50px] left-[40%]"><img className="" src={builderLogo} alt="" /></div>
        <h1>Painting</h1>
        <p>
          There creepeth darkness him wherein a the signs face unto best
          seasons female were they're dominion.Brought gathered whales
          was.face unto best seasons female were they're
        </p>
      </div>
    </div>
  </div>
</div>
</div> */
}
