import React, { useState } from "react";
import banner from "../../assets/images/banner.png";
import * as Yup from "yup";
import { Formik, Field, Form } from "formik";
import emailjs from "@emailjs/browser";
import toast from "react-hot-toast";
import FormikError from "../../components/formik-error";

function Careers() {
  const [loading, setLoading] = useState(false);

  const initialValues = {
    name: "",
    surname: "",
    phone: "",
    email: "",
    gender: "",
    nationality: "",
    identification: "",
    ghCard: "",
    passport: "",
    post: "",
  };
  const careerSchema = Yup.object().shape({
    name: Yup.string().required("Please enter your first name"),
    surname: Yup.string().required("Please enter your last name"),
    phone: Yup.string().required("Please enter your phone number"),
    email: Yup.string()
      .email("Please enter a valaid email address")
      .required("Please enter your email address"),
    gender: Yup.string().required("Please select a gender"),
    nationality: Yup.string().required("Please select a nationality"),
    identification: Yup.string().required("Please select a identication"),
    ghCard: Yup.string().required("This field is required"),
    passport: Yup.string().required("This field is required"),
    post: Yup.string().required("Please enter postal code"),
  });

  const gender = ["Male", "Female", "Non-binary"];
  const nationality = [
    "Ghanaian",
    "Non-Ghanaian",
    "Permanent Resident",
    "Non-Ghanaian with work permit",
  ];
  const identification = ["Ghana Card", "Passport"];

  // const handleSubmit = (data) => {
  //   setLoading(true);
  //   emailjs
  //     .send(
  //       "service_rdpth8m",
  //       "template_8qv5lzn",
  //       {
  //         name: data.name,
  //         surname: data.surname,
  //         phone: data.phone,
  //         email: data.email,
  //         gender: data.gender,
  //         nationality: data.nationality,
  //         identification: data.identification,
  //         ghCard: data.ghCard,
  //         passport: data.passport,
  //         post: data.post,
  //       },
  //       "EsvXMNLAam5FfQTov"
  //     )
  //     .then(
  //       (result) => {
  //         if (result.text === "OK") {
  //           toast.success("Succesful");
  //         }
  //         console.log(result.text);
  //       },
  //       (error) => {
  //         console.log(error.text);
  //       }
  //     );
  //   console.log(data);
  // };

  const handleSubmit = (data) => {
    console.log(data);
    toast.success("Successful");
  };

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
            <h1 className="text-white text-ls">Careers</h1>
          </div>
          <h1 className="text-white md:text-[48px] leading-tight  font-bold w-[80%]">
            Apply Today
          </h1>
          <p className="text-white w-[60%] hidden md:block">
            Please upload your resume to our database for our review. If a
            suitable role becomes available, we will consider you for the
            position.
          </p>
        </div>
      </div>

      <div className="bg-white md:py-20 py-10 w-full flex flex-col md:flex-row items-center justify-center md:px-80 md:space-x-10 p-5">
        <div className="w-full h-fit flex justify-center items-center">
          <div className="w-full h-full flex items-center justify-center">
            <Formik
              initialValues={initialValues}
              validationSchema={careerSchema}
              // onSubmit={(values, { resetForm }) => {
              //   handleSubmit(values);
              //   resetForm();
              // }}
              onSubmit={handleSubmit}
            >
              {({ values, errors }) => {
                // console.log(errors)
                return (
                  <Form className="animate__animated animate__fadeInUp md:w-[100%] h-fit flex justify-center items-center">
                    <div className="w-full h-full flex items-center justify-center">
                      <div className="h-fit w-[100%] bg-gray-200 md:bg-white md:rounded-xl border flex flex-col items-center space-y-10 p-10">
                        <div className="w-full grid md:grid-cols-2 gap-10">
                          <label htmlFor="" className="flex flex-col space-y-1">
                            <p>First name</p>
                            <Field
                              as="input"
                              name="name"
                              type="text"
                              className="border p-2 w-full bg-gray-100 rounded"
                            />
                            <FormikError name="name" />
                          </label>
                          <label htmlFor="" className="flex flex-col space-y-1">
                            <p>Last name</p>
                            <Field
                              as="input"
                              name="surname"
                              type="text"
                              className="border p-2 w-full bg-gray-100 rounded"
                            />
                            <FormikError name="surname" />
                          </label>
                          <label htmlFor="" className="flex flex-col space-y-1">
                            <p>Email</p>
                            <Field
                              as="input"
                              name="email"
                              type="text"
                              className="border p-2 w-full bg-gray-100 rounded"
                            />
                            <FormikError name="email" />
                          </label>
                          <label htmlFor="" className="flex flex-col space-y-1">
                            <p> Phone number</p>
                            <Field
                              as="input"
                              name="phone"
                              type="text"
                              className="border p-2 w-full bg-gray-100 rounded"
                            />
                            <FormikError name="phone" />
                          </label>
                          <label className="flex flex-col space-y-1">
                            <p> Gender</p>
                            <Field
                              as="select"
                              name="gender"
                              className="border p-2 w-full bg-gray-100 rounded"
                            >
                              <option value="">Select Gender</option>
                              {gender.map((item, index) => {
                                return <option key={index}>{item}</option>;
                              })}
                            </Field>
                            <FormikError name="gender" />
                          </label>
                          <label className="flex flex-col space-y-1">
                            <p> Nationality</p>
                            <Field
                              as="select"
                              name="nationality"
                              className="border p-2 w-full bg-gray-100 rounded"
                            >
                              <option value="">Select your nationality</option>
                              {nationality.map((item, index) => {
                                return <option key={index}>{item}</option>;
                              })}
                            </Field>
                            <FormikError name="nationality" />
                          </label>
                          <label className="flex flex-col space-y-1">
                            <p> Identification</p>
                            <Field
                              as="select"
                              name="identification"
                              className="border p-2 w-full bg-gray-100 rounded"
                            >
                              <option value="">
                                Select your identification type
                              </option>
                              {identification.map((item, index) => {
                                return <option key={index}>{item}</option>;
                              })}
                              <FormikError name="identification" />
                            </Field>
                          </label>
                          <label htmlFor="" className="flex flex-col">
                            {values.identification === "Ghana Card" ? (
                              <>
                                <p>Ghana Card</p>
                                <Field
                                  name="ghCard"
                                  className="border p-2 w-full bg-gray-100 rounded"
                                  placeholder="Enter Ghana Card number"
                                />
                                <FormikError name="ghCard" />
                              </>
                            ) : values.identification === "Passport" ? (
                              <>
                                <p>Passport</p>
                                <Field
                                  name="passport"
                                  className="border p-2 w-full bg-gray-100 rounded"
                                  placeholder="Enter Passport number"
                                />
                                <FormikError name="passport" />
                              </>
                            ) : (
                              <>
                                <p>GhanaCard/Passport</p>
                                <Field
                                  disabled
                                  name="apartment"
                                  className="border p-2 w-full bg-gray-100 rounded cursor-not-allowed"
                                  placeholder=""
                                />
                              </>
                            )}
                          </label>
                          <label className="flex flex-col space-y-1">
                            <p> Post Code</p>
                            <Field
                              name="post"
                              className="border p-2 w-full bg-gray-100 rounded"
                              placeholder="Enter postal code"
                            />
                            <FormikError name="post" />
                          </label>
                          <label className="flex flex-col space-y-1">
                            <p className="text-sm font-medium text-gray-600">
                              Upload CV
                            </p>
                            <Field
                              accept=".pdf"
                              type="file"
                              name="cv"
                              className="border p-2 w-full bg-gray-100 rounded focus:outline-none focus:ring focus:border-blue-300"
                              placeholder="Choose file"
                            />
                          </label>
                        </div>
                        <div className="w-full">
                          <button
                            type="submit"
                            disabled={loading}
                            className="uppercase w-[100%] bg-blue-500 text-white p-2 flex items-center justify-center rounded-md"
                          >
                            {loading ? <p>Loading...</p> : <p>Submit</p>}
                          </button>
                        </div>
                      </div>
                    </div>
                  </Form>
                );
              }}
            </Formik>
          </div>
        </div>
      </div>
      <div className="grid md:grid-cols-3 w-full place-items-center pb-40 md:px-40 md:gap-10 gap-2 p-5">
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
    </section>
  );
}

export default Careers;
