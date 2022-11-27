import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useContext, useState } from "react";
import { MultiStepForm, Step } from "react-multi-form";
import Logo from "../assets/logo.png";
import SignupBanner from "../assets/signupBanner.png";
import StepOne from "../components/multistep-form/StepOne";
import StepThree from "../components/multistep-form/StepThree";
import StepTwo from "../components/multistep-form/StepTwo";
import SocialSignIn from "../components/SocialSignIn";
import { AuthContext } from "../context/AuthContext";
import { CreateNewUser } from "../utils/auth";

export default function SignUpPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [active, setActive] = React.useState(1);
  const router = useRouter();

  const currentUser = useContext(AuthContext);
  // console.log(currentUser);

  console.log(useContext(AuthContext));

  // if (currentUser) {
  //   if (typeof window !== "undefined") {
  //     router.push("/dashboard/home");
  //   }
  //   return <></>;
  // } else {
  return (
    <div className='min-h-full flex items-center'>
      <div className='mx-auto w-full max-w-4xl'>
        <h1 className='font-medium text-3xl'>Tell us about your speciality</h1>
        <MultiStepForm activeStep={active}>
          <Step label='user info'>
            <StepOne />
          </Step>
          <Step label='type of creator'>
            <StepTwo />
          </Step>
          <Step label='social platforms'>
            <StepThree />
          </Step>
        </MultiStepForm>
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
          {active <= 6 && (
            <button
              onClick={() => setActive(active + 1)}
              style={{ float: "right" }}
              className='inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700'
            >
              Next
            </button>
          )}
          {active > 6 && (
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
    </div>
  );
}
// }
