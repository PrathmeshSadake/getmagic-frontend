import React, { Fragment } from "react";
import LandingNavbar from "../components/LandingNavbar";

const content = [
  {
    desc: "Collaborate with peers and produce engaging content - Broaden reach",
    img: "",
  },
  {
    desc: "Gain an edge - use our AI Creator Suite tools to stand out!",
    img: "",
  },
  {
    desc: "Get help with video editing, audio clips and other service providers - everything you need For that killer online presence brands love!",
    img: "",
  },
  {
    desc: "Get Paid with clear contracts in place - Never get cheated again!",
    img: "",
  },
];

const Index = () => {
  return (
    <Fragment>
      <LandingNavbar />
      <div className='bg-yellow-50'>
        <div className='max-w-6xl mx-auto px-4 sm:px-6 py-24 '>
          {content.map((item) => (
            <div
              key={item.desc}
              className='grid grid-cols-1 md:grid-cols-2 gap-8 my-12 items-center'
            >
              <div className='w-10/12'>
                <h6 className='font-normal text-2xl'>{item.desc}</h6>
              </div>
              <div>
                <img
                  src='https://via.placeholder.com/200'
                  className='w-full h-32 object-cover'
                  alt=''
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </Fragment>
  );
};

export default Index;
