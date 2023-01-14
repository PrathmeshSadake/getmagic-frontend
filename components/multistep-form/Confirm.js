import { useRouter } from "next/router";
import React, { Fragment } from "react";

const Confirm = ({ values, nextStep, prevStep }) => {
  const router = useRouter();
  const continueToNextStep = (e) => {
    e.preventDefault();
    router.replace("/thank-you");
  };

  const goToPreviousStep = (e) => {
    e.preventDefault();
    prevStep();
  };
  const {
    firstName,
    lastName,
    phoneNumber,
    annualRevenueLastYear,
    openToWhiteListing,
    creatorType,
    otherCreatorType,
    category,
    otherCategoryType,
    inviteCode,
  } = values;
  console.log(values);
  return (
    <div className='overflow-hidden shadow sm:rounded-md'>
      <div className='bg-white px-4 py-5 sm:p-6'>
        <div className='px-4 sm:px-0'>
          <h3 className='text-lg font-medium leading-6 text-gray-900'>
            Confirm Your Details
          </h3>
        </div>
        <ul className='list-inside list-disc space-y-3 mt-4'>
          <li className='font-medium text-gray-900'>
            First Name:{" "}
            <span className='font-normal text-gray-600'>{firstName}</span>
          </li>
          <li className='font-medium text-gray-900'>
            Last Name:{" "}
            <span className='font-normal text-gray-600'>{lastName}</span>
          </li>
          <li className='font-medium text-gray-900'>
            Phone Number:{" "}
            <span className='font-normal text-gray-600'>{phoneNumber}</span>
          </li>
          <li className='font-medium text-gray-900'>
            Annual Revenue Last Year:{" "}
            <span className='font-normal text-gray-600'>
              {annualRevenueLastYear}
            </span>
          </li>
          <li className='font-medium text-gray-900'>
            Creator Type:{" "}
            <span className='font-normal text-gray-600'>
              {creatorType == "Other" ? otherCreatorType : creatorType}
            </span>
          </li>
          <li className='font-medium text-gray-900'>
            Category:{" "}
            <span className='font-normal text-gray-600'>
              {category == "Other" ? otherCategoryType : category}
            </span>
          </li>
          <li className='font-medium text-gray-900'>
            Invite Code:{" "}
            <span className='font-normal text-gray-600'>{inviteCode}</span>
          </li>
        </ul>
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
          className='inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2'
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default Confirm;
