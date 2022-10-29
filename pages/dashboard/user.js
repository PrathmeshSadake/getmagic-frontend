import React from "react";
import MultiStep from "react-multistep";
import Layout from "../../layout/Layout";
import StepOne from "../../components/multistep-form/StepOne";
import StepTwo from "../../components/multistep-form/StepTwo";

const User = () => {
  const steps = [
    { title: "StepOne", component: <StepOne /> },
    { title: "StepTwo", component: <StepTwo /> },
  ];
  return (
    <Layout>
      <div>
        <h1 className='font-medium text-3xl'>Tell us about your speciality</h1>

        <MultiStep showNavigation={true} steps={steps} />
      </div>
    </Layout>
  );
};

export default User;
