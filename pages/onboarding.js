import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useContext, useState } from "react";
import Logo from "../assets/logo.png";
import SignupBanner from "../assets/signupBanner.png";
import SocialSignIn from "../components/SocialSignIn";
import { AuthContext } from "../context/AuthContext";
import { CreateNewUser } from "../utils/auth";
import LoginBanner from "../assets/loginBanner.png";
import FormUserDetails from "../components/multistep-form/FormUserDetails";
import FormPersonalDetails from "../components/multistep-form/FormPersonalDetails";
import Confirm from "../components/multistep-form/Confirm";
import Success from "../components/multistep-form/Success";
import InviteCode from "../components/multistep-form/InviteCode";

export default function SignUpPage() {
  const [formData, setFormData] = useState({
    step: 1,
    firstName: "",
    lastName: "",
    phoneNumber: "",
    annualRevenueLastYear: "",
    openToWhiteListing: false,
    creatorType: "",
    otherCreatorType: "",
    category: "",
    otherCategoryType: "",
    inviteCode: "",
  });

  // Go to next step
  const nextStep = () => {
    const { step } = formData;
    setFormData({ ...formData, step: step + 1 });
  };

  // Go to prev step
  const prevStep = () => {
    const { step } = formData;
    setFormData({ ...formData, step: step - 1 });
  };
  const firstStep = () => {
    setFormData({ ...formData, step: 1 });
  };
  // Handle fields change
  const handleChange = (input) => (e) => {
    setFormData({ ...formData, [input]: e.target.value });
  };
  const handleOpenToWhiteListingToggle = (value) => {
    setFormData({
      ...formData,
      openToWhiteListing: value,
    });
  };

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

  console.log(formData);

  const renderSwitch = (step) => {
    switch (step) {
      default:
        return <h1>User Forms not working. Enable Javascript!</h1>;
      case 1:
        return (
          <FormPersonalDetails
            nextStep={nextStep}
            handleChange={handleChange}
            handleOpenToWhiteListingToggle={handleOpenToWhiteListingToggle}
            values={formData}
          />
        );
      case 2:
        return (
          <FormUserDetails
            nextStep={nextStep}
            prevStep={prevStep}
            handleChange={handleChange}
            values={formData}
          />
        );
      case 3:
        return (
          <InviteCode
            nextStep={nextStep}
            prevStep={prevStep}
            handleChange={handleChange}
            values={formData}
          />
        );
      case 4:
        return (
          <Confirm nextStep={nextStep} prevStep={prevStep} values={formData} />
        );
      case 5:
        return <Success firstStep={firstStep} />;
    }
  };
  return (
    <div className='min-h-full grid grid-cols-1 lg:grid-cols-5'>
      <div className='flex-1 flex flex-col justify-center py-12 px-4 sm:px-12 col-span-3'>
        <div className='w-full md:px-12'>{renderSwitch(formData.step)}</div>
      </div>
      <div className='hidden lg:block relative w-full col-span-2'>
        <Image
          className='absolute inset-0 h-full w-full object-cover'
          src={LoginBanner}
          fill
          alt='Banner'
        />
      </div>
    </div>
  );
}
// }
