import React from "react";

const StepOne = () => {
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
            <div className='grid grid-cols-6 gap-6'>
              <div className='col-span-6 sm:col-span-3'>
                <label
                  htmlFor='first-name'
                  className='block text-sm font-medium text-gray-700'
                >
                  First name
                </label>
                <input
                  type='text'
                  name='first-name'
                  id='first-name'
                  autoComplete='given-name'
                  className='mt-2 p-3 block w-full rounded-md border-gray-300 border-2 shadow-sm focus:border-indigo-500 focus:ring-indigo-500  sm:text-sm'
                />
              </div>

              <div className='col-span-6 sm:col-span-3'>
                <label
                  htmlFor='last-name'
                  className='block text-sm font-medium text-gray-700'
                >
                  Last name
                </label>
                <input
                  type='text'
                  name='last-name'
                  id='last-name'
                  autoComplete='family-name'
                  className='mt-2 p-3 block w-full rounded-md border-gray-300 border-2 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm'
                />
              </div>

              <div className='col-span-3'>
                <label
                  htmlFor='phone-number'
                  className='block text-sm font-medium text-gray-700'
                >
                  Phone Number
                </label>
                <input
                  type='text'
                  name='email-address'
                  id='email-address'
                  autoComplete='email'
                  className='mt-2 p-3 block w-full rounded-md border-gray-300 border-2 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm'
                />
              </div>
              <div className='col-span-6 sm:col-span-3'>
                <label
                  htmlFor='income'
                  className='block text-sm font-medium text-gray-700'
                >
                  What was your annual revenue last year?
                </label>
                <select
                  id='income'
                  name='income'
                  autoComplete='income'
                  className='mt-2 p-3 block w-full rounded-md border-gray-300 border-2 bg-white shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm'
                >
                  {[
                    "Select One",
                    "0 - $10,000",
                    "$10,000 - $50,000",
                    "$50,000 - $100,000",
                    "$100,000 - $250,000",
                    "$250,000 - $1,000,000",
                    "$1,000,000 +",
                  ].map((income) => (
                    <option key={income}>{income}</option>
                  ))}
                </select>
              </div>
              <div className='col-span-6 sm:col-span-3'>
                <div className='flex items-start'>
                  <div className='flex h-6 items-center'>
                    <input
                      id='comments'
                      name='comments'
                      type='checkbox'
                      className='h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500'
                    />
                  </div>

                  <div className='ml-2 text-sm'>
                    <label
                      htmlFor='comments'
                      className='font-medium text-gray-700'
                    >
                      Open to white listing?
                    </label>
                    <p className='text-gray-500'>
                      Whitelisting is posting a brand partners sponsored content
                      on your social handle.
                    </p>
                  </div>
                </div>
              </div>
              <div className='col-span-6 sm:col-span-3'></div>
              <div className='col-span-6 sm:col-span-3'>
                <label
                  htmlFor='phone-number'
                  className='block text-sm font-medium text-gray-700'
                >
                  Have an Invitation Code? ( Optional )
                </label>
                <input
                  type='text'
                  name='email-address'
                  id='email-address'
                  autoComplete='email'
                  className='mt-2 p-3 block w-full rounded-md border-gray-300 border-2 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm'
                />
              </div>
            </div>
          </div>
          {/* <div className='bg-gray-50 px-4 py-3 text-right sm:px-6'>
            <button
              type='submit'
              className='inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2'
            >
              Next
            </button>
          </div> */}
        </div>
      </form>
    </div>
  );
};

export default StepOne;
