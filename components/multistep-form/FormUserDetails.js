import React, { Component, Fragment } from "react";

export class FormUserDetails extends Component {
  continue = (e) => {
    e.preventDefault();
    this.props.nextStep();
  };

  constructor() {
    super();
    this.state = {};
  }

  render() {
    const { values, handleChange } = this.props;
    return (
      //   <Fragment>
      //     <input
      //       label='First Name'
      //       onChange={handleChange("firstName")}
      //       defaultValue={values.firstName}
      //     />
      //     <br />
      //     <input
      //       label='Last Name'
      //       onChange={handleChange("lastName")}
      //       defaultValue={values.lastName}
      //     />
      //     <br />
      //     <input
      //       label='Email'
      //       onChange={handleChange("email")}
      //       defaultValue={values.Email}
      //     />
      //     <br />
      //     <br />
      //     <button
      //       style={{ background: "#2E3B55", color: "#FFFFFF" }}
      //       label='Continue'
      //       onClick={this.continue}
      //     >
      //       Continue
      //     </button>
      //   </Fragment>
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
                    htmlFor='income'
                    className='block text-sm font-medium text-gray-700'
                  >
                    How do you describe yourself?
                  </label>
                  <select
                    id='income'
                    name='income'
                    autoComplete='income'
                    className='mt-2 p-3 block w-full rounded-md border-gray-300 border-2 bg-white shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm'
                  >
                    {[
                      "Select One",
                      "Creator Social Handles, YouTube Channels, Podcasts",
                      "Video, Thumbnails, Audio",
                      "Creator Services",
                      "Other",
                    ].map((income) => (
                      <option key={income}>{income}</option>
                    ))}
                  </select>
                </div>
                <div className='col-span-6 sm:col-span-3'>
                  <label
                    htmlFor='income'
                    className='block text-sm font-medium text-gray-700'
                  >
                    How do you describe yourself?
                  </label>
                  <select
                    id='income'
                    name='income'
                    autoComplete='income'
                    className='mt-2 p-3 block w-full rounded-md border-gray-300 border-2 bg-white shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm'
                  >
                    {[
                      "Select One",
                      "Creator Social Handles, YouTube Channels, Podcasts",
                      "Video, Thumbnails, Audio",
                      "Creator Services",
                      "Other",
                    ].map((income) => (
                      <option key={income}>{income}</option>
                    ))}
                  </select>
                </div>
              </div>
            </div>
            <div className='bg-gray-50 px-4 py-3 text-right sm:px-6'>
              <button
                label='Continue'
                onClick={this.continue}
                className='inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2'
              >
                Next
              </button>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default FormUserDetails;
