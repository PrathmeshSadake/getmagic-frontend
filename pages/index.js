import Image from "next/image";
import { useRouter } from "next/router";
import React, { Fragment } from "react";
import LandingNavbar from "../components/LandingNavbar";

const influencerContent = [
  {
    desc: "Guranteed payment for the perfect side hustle Get paid for videos right out of your camera Uplevel by offering editorial services",
    img: "",
  },
];

const studentContent = [
  {
    desc: "Guranteed payment for the perfect side hustle Get paid for videos right out of your camera Uplevel by offering editorial services",
    img: "",
  },
  {
    desc: "Build your professional portfolio and share with clients.",
    img: "",
  },
];

const UGCContent = [
  {
    desc: "Setup recurring subscription - take the headache out of the Retainer Model!",
    img: "",
  },
  {
    desc: "Zero hassle, no negotiations - focus on maximizing your income.",
    img: "",
  },
  {
    desc: "Built in zero negotiation Contracts for peace of mind! No",
    img: "",
  },
  {
    desc: "Step out and Grow! Reach decision makers in new verticals like apps and services to diversify your income stream!",
    img: "",
  },
  {
    desc: "0 fee payments! Yes, thats rights. Keep 100% of your contract value!",
    img: "",
  },
];
const generalContent = [
  {
    desc: "Guranteed payment for videos right out of your camera - that it",
    img: "",
  },
  {
    desc: "Get help with video editing, audio clips and other service providers - everything you need For that killer online presence brands love!",
    img: "",
  },
  {
    desc: "Get Paid with clear built-in contracts in place - Never get cheated again!",
    img: "",
  },
  {
    desc: "Collaborate with peers and produce engaging content - Broaden reach",
    img: "",
  },
];

const Index = () => {
  const router = useRouter();
  const variant = router.query.variant;
  const getContent = () => {
    if (variant == "influencer") return influencerContent;
    else if (variant == "student") return studentContent;
    else if (variant == "UGC") return UGCContent;
    else return generalContent;
  };
  return (
    <div className='bg-yellow-50 min-h-screen'>
      <LandingNavbar />

      <div className='max-w-6xl mx-auto px-4 sm:px-6 py-24 '>
        {getContent().map((item) => (
          <div
            key={item.desc}
            className='grid grid-cols-1 md:grid-cols-2 gap-8 my-12 items-center'
          >
            <div className='w-10/12'>
              <h6 className='font-normal text-2xl'>{item.desc}</h6>
            </div>
            <div className='w-full h-32 object-cover relative overflow-hidden'>
              <Image
                src='https://source.unsplash.com/Imc-IoZDMXc'
                className='object-cover'
                layout='fill'
                alt='Placeholder'
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Index;
