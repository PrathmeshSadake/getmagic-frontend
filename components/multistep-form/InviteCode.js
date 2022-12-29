import React from "react";

const InviteCode = ({ nextStep, prevStep, values, handleChange }) => {
  const continueToNextStep = (e) => {
    e.preventDefault();
    nextStep();
  };

  const goToPreviousStep = (e) => {
    e.preventDefault();
    prevStep();
  };

  return (
    <div className='mt-5'>
      <form action='#' method='POST'>
        <div className='overflow-hidden shadow sm:rounded-md'>
          <div className='bg-white px-4 py-5 sm:p-6'>
            <div className='px-4 sm:px-0'>
              <h3 className='text-lg font-medium leading-6 text-gray-900'>
                Tell us about yourself
              </h3>
            </div>
            <div className='grid grid-cols-1 gap-6'>
              <div className=''>
                <label
                  htmlFor='inviteCode'
                  className='block text-sm font-medium text-gray-700'
                >
                  Enter Inivitation Code
                </label>
                <input
                  type='text'
                  name='inviteCode'
                  id='inviteCode'
                  onChange={handleChange("inviteCode")}
                  value={values.inviteCode}
                  placeholder='Enter Inivitation Code'
                  className='mt-2 p-3 block w-full rounded-md border-gray-300 border-2 shadow-sm focus:border-indigo-500 focus:ring-indigo-500  sm:text-sm'
                />
              </div>
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
              disabled={values.inviteCode == ""}
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

export default InviteCode;
