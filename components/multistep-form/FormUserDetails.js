import React, { Component, Fragment } from "react";

const FormUserDetails = ({ nextStep, prevStep, values, handleChange }) => {
  const continueToNextStep = (e) => {
    e.preventDefault();
    nextStep();
  };

  const goToPreviousStep = (e) => {
    e.preventDefault();
    prevStep();
  };

  const categories1 = [
    "Beauty",
    "Fashion",
    "Outdoor",
    "Sports",
    "Gadgets, gaming",
    "Education",
    "Technology",
    "Other",
  ];
  const categories2 = [
    "Youtube Strategist",
    "Youtube Producer",
    "Podcast Editor",
    "Video Editor",
    "Creative Director",
    "Scriptwriter",
    "Thumbnail Designer",
    "Manager",
    "Other",
  ];
  const categories3 = [
    "Creator Virtual Assistant",
    "Social Media Manager",
    "Legal and Contracts",
    "Manager",
    "Channel and Handle Manager",
    "Other",
  ];

  const getCreatorType = () => {
    switch (values.creatorType) {
      case "Creator Social Handles, YouTube Channels, Podcasts":
        return categories1;
      case "Video, Thumbnails, Audio":
        return categories2;
      case "Creator Services":
        return categories3;
      default:
        return ["Please Select Creator Type First"];
    }
  };

  return (
    <div className='mt-5'>
      <form action='#' method='POST'>
        <div className='overflow-hidden shadow sm:rounded-md'>
          <div className='bg-white px-4 py-5 sm:p-6'>
            <div className='px-4 sm:px-0'>
              <h3 className='text-lg font-medium leading-6 text-gray-900'>
                How do you describe yourself?
              </h3>
            </div>
            <div className='grid grid-cols-1 gap-4 mt-8'>
              <div className=''>
                <label
                  htmlFor='creatorType'
                  className='block text-sm font-medium text-gray-700'
                >
                  Creator Type
                </label>
                <select
                  id='creatorType'
                  name='creatorType'
                  onChange={handleChange("creatorType")}
                  value={values.creatorType}
                  className='mt-2 p-3 block w-full rounded-md border-gray-300 border-2 bg-white shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm'
                >
                  {[
                    "Select One",
                    "Creator Social Handles, YouTube Channels, Podcasts",
                    "Video, Thumbnails, Audio",
                    "Creator Services",
                    "Other",
                  ].map((creatorType) => (
                    <option key={creatorType}>{creatorType}</option>
                  ))}
                </select>
              </div>
              {values.creatorType == "Other" && (
                <div className=''>
                  <label
                    htmlFor='creatorType'
                    className='block text-sm font-medium text-gray-700'
                  >
                    Please Enter your Creator Type
                  </label>
                  <input
                    id='otherCreatorType'
                    name='otherCreatorType'
                    onChange={handleChange("otherCreatorType")}
                    value={values.otherCreatorType}
                    className='mt-2 p-3 block w-full rounded-md border-gray-300 border-2 bg-white shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm'
                  />
                </div>
              )}
              <div className=''>
                <label
                  htmlFor='category'
                  className='block text-sm font-medium text-gray-700'
                >
                  Category
                </label>
                <select
                  id='category'
                  name='category'
                  onChange={handleChange("category")}
                  value={values.category}
                  disabled={
                    values.creatorType == "Select One" ||
                    values.creatorType == ""
                  }
                  defaultValue='Select One'
                  className='mt-2 p-3 block w-full rounded-md border-gray-300 border-2 bg-white shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm'
                >
                  {getCreatorType().map((category) => (
                    <option key={category}>{category}</option>
                  ))}
                </select>
              </div>
              {values.category == "Other" && (
                <div className=''>
                  <label
                    htmlFor='creatorType'
                    className='block text-sm font-medium text-gray-700'
                  >
                    Please Enter your Category
                  </label>
                  <input
                    id='otherCategoryType'
                    name='otherCategoryType'
                    onChange={handleChange("otherCategoryType")}
                    value={values.otherCategoryType}
                    className='mt-2 p-3 block w-full rounded-md border-gray-300 border-2 bg-white shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm'
                  />
                </div>
              )}
            </div>
          </div>
          <div className='bg-gray-50 px-4 py-3 text-right sm:px-6'>
            <button
              label='Back'
              onClick={goToPreviousStep}
              className='mr-4 inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2'
            >
              Previous
            </button>
            <button
              label='Continue'
              onClick={continueToNextStep}
              disabled={
                values.creatorType == "" ||
                values.category == "" ||
                values.creatorType == "Select One" ||
                values.category == "Select One"
              }
              className='disabled:bg-gray-400 inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2'
            >
              Next
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default FormUserDetails;
