import React from "react";
import { MultiStepForm, Step } from "react-multi-form";
import StepOne from "../../components/multistep-form/StepOne";
import StepTwo from "../../components/multistep-form/StepTwo";

const User = () => {
  const [active, setActive] = React.useState(1);
  return (
    <div>
      <h1 className='font-medium text-3xl'>Tell us about your speciality</h1>
      <div className='p-12'>
        <MultiStepForm activeStep={active}>
          <Step label='user info'>
            <StepOne />
          </Step>
          <Step label='specialization'>
            <StepTwo />
          </Step>
        </MultiStepForm>
      </div>
      <div className='px-4 py-3 text-right sm:px-6 lg:mx-12'>
        {active !== 1 && (
          <button
            onClick={() => setActive(active - 1)}
            style={{ float: "left" }}
            className='inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700'
          >
            Previous
          </button>
        )}
        {active !== 2 && (
          <button
            onClick={() => setActive(active + 1)}
            style={{ float: "right" }}
            className='inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700'
          >
            Next
          </button>
        )}
        {active == 2 && (
          <button
            onClick={() => setActive(active + 1)}
            style={{ float: "right" }}
            className='inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700'
          >
            Save
          </button>
        )}
      </div>
    </div>
  );
};

export default User;
