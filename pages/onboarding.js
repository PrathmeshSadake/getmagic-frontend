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
import LoginBanner from "../assets/loginBanner.png";

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
    <div className='min-h-full grid grid-cols-1 lg:grid-cols-3'>
      <div className='flex-1 flex flex-col justify-center py-12 px-4 sm:px-12 col-span-2'>
        <div className='w-full md:px-12'>
          <MultiStepForm
            activeStep={active}
            showNavigation={false}
            showTitles={false}
          >
            <Step label='user info'>
              <StepOne />
            </Step>
            <Step label='type of creator'>
              <StepTwo />
            </Step>
          </MultiStepForm>
        </div>
        <div className='md:px-12 my-6 text-right'>
          {active !== 1 && active <= 2 && (
            <button
              onClick={() => setActive(active - 1)}
              style={{ float: "left" }}
              className={`${
                active == 0 ? "w-full block" : ""
              } inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700`}
            >
              Previous
            </button>
          )}
          {active <= 2 && (
            <button
              onClick={() => setActive(active + 1)}
              style={{ float: "right" }}
              className='inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700'
            >
              Next
            </button>
          )}
          {active > 2 && (
            <button
              onClick={() => setActive(active - 1)}
              style={{ float: "right" }}
              className='w-full inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700'
            >
              Previous
            </button>
          )}
          {active > 2 && (
            <button
              onClick={() => setActive(active + 1)}
              style={{ float: "right" }}
              className='mt-3 w-full inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700'
            >
              Save
            </button>
          )}
        </div>
      </div>
      <div className='hidden lg:block relative w-full'>
        <Image
          className='absolute inset-0 h-full w-full object-cover'
          src={LoginBanner}
          layout='fill'
          alt='Banner'
        />
      </div>
    </div>
  );
}
// }
