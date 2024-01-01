import React, { useState } from "react";
import * as Yup from "yup";
import { Formik, Field, Form } from "formik";
import emailjs from "@emailjs/browser";
import FormikError from "./formik-error";
import toast from "react-hot-toast";

const services = [
  "Domestic Cleaning",
  "Commercial Cleaning",
  "Apartment Cleaning",
  "Sofa Cleaning",
  "Mattress Cleaning",
  "Gardening Maintenance and Landscaping",
  "Pest Control Service",
];

const siteAgreement = [
  "Within Kumasi(GH₵ 200)",
  "Anyhwere In Ashanti Region Except Kumasi(GH₵ 600)",
  "Other Regions(GH₵ 1200)",
  "Other Country Except Ghana($2000-$3500)",
];

const apartmentStructure = ["Newly Built", "Deep Cleaning"];

const apartmentNewlyBuilt = [
  "1 Bedroom Apartment (Request a quote)",
  "2 Bedroom Apartment (Request a quote)",
  "3 Bedroom Apartment (Request a quote)",
  "4 Bedroom Apartment (Request a quote)",
];

const apartmentDeepCleaning = [
  "1 Bedroom Apartment (GH₵ 700-800)",
  "2 Bedroom Apartment (GH₵ 850-950)",
  "3 Bedroom Apartment (GH₵ 980-1065)",
  "4 Bedroom Apartment (GH₵ 1200-1380)",
];

const sofaPricingList = [
  "Sofa set 3,2,1,1 (GH₵ 525)",
  "Sofa set 3,3,1,1 (GH₵ 550)",
  "2 in 1 sofa (GH₵ 200)",
  "3 in 1 (GH₵ 300)",
  "Sofa 1ps (GH₵ 130)",
  "Accent Chairs (GH₵ 80)",
];

const mattressList = [
  "King Size(GH₵ 500)",
  "Queen Size(GH₵ 450)",
  "Standard Size(GH₵ 300)",
  "Student Matress(GH₵ 180)",
];

export default function BookingForm() {
  const [loading, setLoading] = useState(false);
  const initialValues = {
    name: "",
    phone: "",
    name2: "",
    location: "",
    name1: "",
    name3: "",
    apartment: "",
    name4: "",
    name5:""
  };

  const name2Schema = Yup.object().shape({
    name: Yup.string().required("Please enter your name"),
    phone: Yup.string().required("Please enter your phone number"),
    location: Yup.string().required("Please enter your location"),
    name1: Yup.string().required("Please select a name1"),
    name2: Yup.string().required("Please select a name2"),
  });

  const handleSubmit = (data) => {
    setLoading(true);
    emailjs
      .send(
        "service_rdpth8m",
        "template_8qv5lzn",
        {
          name: data.name,
          phone: data.phone,
          name2: data.name2,
          location: data.location,
          name1: data.name1,
          name3: data.name3,
          apartment: data.apartment || "N/A",
          name4: data.name4,
          name5: data.name5,
        
        },
        "EsvXMNLAam5FfQTov"
      )
      .then(
        (result) => {
          if (result.text === "OK") {
            toast.success("Booking request sent successfully");
          }
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    console.log(data);
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={name2Schema}
      onSubmit={(values, { resetForm }) => {
        handleSubmit(values);
        resetForm();
      }}
    >
      {({ values, errors }) => {
        // console.log(errors)
        return (
          <Form className="animate__animated animate__fadeInUp md:w-[100%] h-fit flex justify-center items-center relative md:-mt-60">
            <div className="w-full h-full flex items-center justify-center">
              <div className="h-fit w-[100%] bg-gray-200 md:bg-white md:rounded-xl shadow-md flex flex-col items-center space-y-10 p-10">
                <p className="text-xl"> Book a Service</p>
                <div className="w-full flex flex-col space-y-6">
                  <label htmlFor="" className="flex flex-col space-y-1">
                    <p>Your name</p>
                    <Field
                      as="input"
                      name="name"
                      type="text"
                      className="border p-2 w-full bg-gray-100 rounded"
                    />
                    <FormikError name="name" />
                  </label>
                  <label htmlFor="" className="flex flex-col space-y-1">
                    <p> Phone number</p>
                    <Field
                      as="input"
                      name="phone"
                      type="text"
                      className="border p-2 w-full bg-gray-100 rounded"
                    />
                  </label>
                  <label htmlFor="" className="flex flex-col space-y-1">
                    <p>Your Location/Site</p>
                    <Field
                      as="input"
                      name="location"
                      type="text"
                      className="border p-2 w-full bg-gray-100 rounded"
                    />
                  </label>
                  <label className="flex flex-col space-y-1">
                    <p> Choose A Service</p>
                  </label>
                  <Field
                    as="select"
                    name="name1"
                    className="border p-2 w-full bg-gray-100 rounded"
                  >
                    <option value="">Select Service</option>
                    {services.map((item, index) => {
                      return <option key={index}>{item}</option>;
                    })}
                  </Field>
                  {values.name1 === "Apartment Cleaning" ? (
                    <Field
                      as="select"
                      name="apartment"
                      className="border p-2 w-full bg-gray-100 rounded"
                    >
                      <option value="">Select Apartment type</option>
                      {apartmentStructure.map((item, index) => {
                        return <option key={index}>{item}</option>;
                      })}
                    </Field>
                  ) : values.name1 === "Sofa Cleaning" ? (
                    <Field
                      as="select"
                      name="name2"
                      className="border p-2 w-full bg-gray-100 rounded"
                    >
                      <option value="">Select Sofa type</option>
                      {sofaPricingList.map((item, index) => {
                        return <option key={index}>{item}</option>;
                      })}
                    </Field>
                  ) : values.name1 === "Mattress Cleaning" ? (
                    <Field
                      as="select"
                      name="name2"
                      className="border p-2 w-full bg-gray-100 rounded"
                    >
                      <option value="">Select Mattress type</option>
                      {mattressList.map((item, index) => {
                        return <option key={index}>{item}</option>;
                      })}
                    </Field>
                  ) : null}
                  {values.name1 === "Apartment Cleaning" &&
                  values.apartment === "Newly Built" ? (
                    <Field
                      as="select"
                      name="name2"
                      className="border p-2 w-full bg-gray-100 rounded"
                    >
                      <option value="">Select type</option>
                      {apartmentNewlyBuilt.map((item, index) => {
                        return <option key={index}>{item}</option>;
                      })}
                    </Field>
                  ) : values.name1 === "Apartment Cleaning" &&
                    values.apartment === "Deep Cleaning" ? (
                    <Field
                      as="select"
                      name="name2"
                      className="border p-2 w-full bg-gray-100 rounded"
                    >
                      <option value="">Select type</option>
                      {apartmentDeepCleaning.map((item, index) => {
                        return <option key={index}>{item}</option>;
                      })}
                    </Field>
                  ) : null}
                  
                  {(values.name1 === "Pest Control Service" ||
                    values.name1 === "Gardening Maintenance and Landscaping" ||
                    values.name1 === "Domestic Cleaning" ||
                    values.name1 === "Commercial Cleaning") && (
                    <>
                      <label className="flex flex-col space-y-1">
                        <p> Site Visit Agreement</p>
                      </label>

                      <Field
                        as="select"
                        name="name5" 
                        className="border p-2 w-full bg-gray-100 rounded"
                      >
                        <option value="">Select Site Amount</option>
                        {siteAgreement.map((item, index) => {
                          return <option key={index}>{item}</option>;
                        })}
                      </Field>
                    </>
                  )}
                  {values.name1 === "Pest Control Service" && (
                    <label className="flex flex-col space-y-1">
                      <p>Additional Information for Pest Control</p>
                      <Field
                        as="textarea"
                        name="name4"
                        className="border p-2 w-full bg-gray-100 rounded"
                        rows="4"
                      />
                    </label>
                  )}
                  {values.name1 === "Gardening Maintenance and Landscaping" && (
                    <label className="flex flex-col space-y-1">
                      <p>Additional Information for Gardening</p>
                      <Field
                        as="textarea"
                        name="name4"
                        className="border p-2 w-full bg-gray-100 rounded"
                        rows="4"
                      />
                    </label>
                  )}
                  {values.name1 === "Domestic Cleaning" && (
                    <label className="flex flex-col space-y-1">
                      <p>Additional Information for Domestic</p>
                      <Field
                        as="textarea"
                        name="name4"
                        className="border p-2 w-full bg-gray-100 rounded"
                        rows="4"
                      />
                    </label>
                  )}
                  {values.name1 === "Commercial Cleaning" && (
                    <label className="flex flex-col space-y-1">
                      <p>Additional Information for Commercial</p>
                      <Field
                        as="textarea"
                        name="name4"
                        className="border p-2 w-full bg-gray-100 rounded"
                        rows="4"
                      />
                    </label>
                  )}
                  <label
                    htmlFor="datePicker"
                    className="flex flex-col space-y-1"
                  >
                    <p>Date</p>
                    <Field
                      as="input"
                      name="name3"
                      type="date"
                      id="datePicker"
                      className="border p-2 w-full bg-gray-100 rounded"
                    />
                  </label>
                  <div className="w-full">
                    <button
                      type="submit"
                      disabled={loading}
                      className="uppercase w-[100%] bg-blue-500 text-white p-2 flex items-center justify-center rounded-md"
                    >
                      {loading ? <p>Loading...</p> : <p>Submit Details</p>}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </Form>
        );
      }}
    </Formik>
  );
}
