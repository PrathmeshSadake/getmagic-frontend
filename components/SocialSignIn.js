import Image from "next/image";
import { useRouter } from "next/router";
import React from "react";
import { signInWithFacebook, signInWithGoogle } from "../utils/auth";

const SocialSignIn = () => {
  const router = useRouter();
  const handleGoogleSignIn = () => {
    signInWithGoogle().then(() => {
      router.replace("/dashboard");
    });
  };
  return (
    <div>
      <div>
        <p className='text-sm font-medium text-gray-700'>Sign in with</p>

        <div className='mt-1 grid grid-cols-2 gap-3'>
          <div>
            <button
              onClick={handleGoogleSignIn}
              className='w-full inline-flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-500 hover:bg-gray-50'
            >
              <span className='sr-only'>Sign in with Google</span>
              <Image
                width={20}
                height={20}
                alt='Google Logo'
                src='https://img.icons8.com/color/48/FA5252/google-logo.png'
              />
            </button>
          </div>
          <div>
            <button
              onClick={signInWithFacebook}
              className='w-full inline-flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-500 hover:bg-gray-50'
            >
              <span className='sr-only'>Sign in with Facebook</span>
              <Image
                width={20}
                height={20}
                alt='Google Logo'
                src='https://img.icons8.com/color/48/000000/facebook-new.png'
              />
            </button>
          </div>
        </div>
      </div>

      <div className='mt-6 relative'>
        <div className='absolute inset-0 flex items-center' aria-hidden='true'>
          <div className='w-full border-t border-gray-300' />
        </div>
        <div className='relative flex justify-center text-sm'>
          <span className='px-2 bg-white text-gray-500'>Or continue with</span>
        </div>
      </div>
    </div>
  );
};

export default SocialSignIn;
