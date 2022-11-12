import React from "react";

const StepTwo = () => {
  return (
    <div className='mt-6'>
      <div className='px-4 sm:px-0'>
        <h3 className='text-lg font-medium leading-6 text-gray-900'>
          Creator Type and Specialization
        </h3>
        <p className='mt-1 text-sm text-gray-600'>
          Please select which ever applies
        </p>
      </div>

      <div className='md:grid md:grid-cols-2 md:gap-6 mt-8'>
        <div className='mt-5 md:mt-0'>
          <form action='#' method='POST'>
            <div className='overflow-hidden shadow sm:rounded-md'>
              <div className='space-y-6 bg-white px-4 py-5 sm:p-6'>
                <fieldset>
                  <legend className='sr-only'>Creator Type</legend>
                  <div
                    className='text-base font-medium text-gray-900'
                    aria-hidden='true'
                  >
                    Creator Type
                  </div>
                  <div className='mt-4 space-y-4'>
                    {[
                      "YouTube Channel",
                      "TikTok Handle",
                      "Instagram Profile",
                      "Pinterest, Snapchat, etc.",
                      "Video, Thumbnails, Audio",
                      "Hardware Setup",
                      "Creator Virtual Assistant",
                      "Social Media Management",
                      "Legal and Contracts",
                      "Other",
                    ].map((type) => (
                      <div key={type} className='flex items-start'>
                        <div className='flex h-5 items-center'>
                          <input
                            id='type'
                            name='type'
                            type='checkbox'
                            className='h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500'
                          />
                        </div>
                        <div className='ml-3 text-sm'>
                          <label
                            htmlFor='type'
                            className='font-medium text-gray-700'
                          >
                            {type}
                          </label>
                          {/* <p className='text-gray-500'>
                        Get notified when someones posts a comment on a
                        posting.
                      </p> */}
                        </div>
                      </div>
                    ))}
                  </div>
                </fieldset>
              </div>
            </div>
          </form>
        </div>
        <div className='mt-5 md:mt-0'>
          <form action='#' method='POST'>
            <div className='overflow-hidden shadow sm:rounded-md'>
              <div className='space-y-6 bg-white px-4 py-5 sm:p-6'>
                <fieldset>
                  <legend className='contents text-base font-medium text-gray-900'>
                    Specialization
                  </legend>
                  <p className='text-sm text-gray-500'>
                    Choose your Specialization
                  </p>
                  <div className='mt-4 space-y-4'>
                    {[
                      "Beauty",
                      "Fashion",
                      "Outdoor",
                      "Sports",
                      "Gadgets",
                      "Other",
                    ].map((specialization) => (
                      <div key={specialization} className='flex items-center'>
                        <input
                          id='specialization'
                          name='specialization'
                          type='radio'
                          className='h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-500'
                        />
                        <label
                          htmlFor='specialization'
                          className='ml-3 block text-sm font-medium text-gray-700'
                        >
                          {specialization}
                        </label>
                      </div>
                    ))}
                  </div>
                </fieldset>
              </div>
            </div>
          </form>
        </div>
      </div>
      {/* <div className='bg-gray-50 mt-3 px-4 py-3 text-right sm:px-6'>
        <button
          type='submit'
          className='inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2'
        >
          Save
        </button>
      </div> */}
    </div>
  );
};

export default StepTwo;
