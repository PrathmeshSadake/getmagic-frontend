import React from "react";
import { useWindowSize } from "react-use";
import ReactConfetti from "react-confetti";

const ThankYou = () => {
  const { width, height } = useWindowSize();

  return (
    <div className='z-10 flex items-center justify-center min-h-screen'>
      <ReactConfetti width={width} height={height} />
      <div className='flex flex-col items-center space-y-2'>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          className='text-green-600 w-28 h-28'
          fill='none'
          viewBox='0 0 24 24'
          stroke='currentColor'
          strokeWidth='1'
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            d='M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z'
          />
        </svg>
        <p className='text-4xl font-bold text-center'>
          Thank you for your interest!
        </p>
        <p className='mt-6 text-xl lg:text-2xl text-gray-600 text-center'>
          We will contact you soon with further process. Please look for an
          email from us.
        </p>
      </div>
    </div>
  );
};

export default ThankYou;
