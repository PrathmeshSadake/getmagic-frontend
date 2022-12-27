import React, { Fragment } from "react";

const Confirm = ({ values, nextStep, prevStep }) => {
  const continueToNextStep = (e) => {
    e.preventDefault();
    nextStep();
  };

  const goToPreviousStep = (e) => {
    e.preventDefault();
    prevStep();
  };
  return (
    <Fragment>
      <div
        component='nav'
        aria-labelledby='nested-list-subheader'
        subheader={
          <div component='div' id='nested-list-subheader'>
            Confirm your info
          </div>
        }
      >
        <li>
          <p primary='First Name' secondary={values.firstName} />
        </li>
        <li>
          <p primary='Last Name' secondary={values.lastName} />
        </li>
        <li>
          <p primary='Email' secondary={values.email} />
        </li>
        <li>
          <p primary='Occupation' secondary={values.occupation} />
        </li>
        <li>
          <p primary='City' secondary={values.city} />
        </li>
        <li>
          <p primary='Bio' secondary={values.bio} />
        </li>
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
          Next
        </button>
      </div>
    </Fragment>
  );
};

export default Confirm;
