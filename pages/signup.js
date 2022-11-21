import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useContext, useState } from "react";
import Logo from "../assets/logo.png";
import SignupBanner from "../assets/signupBanner.png";
import SocialSignIn from "../components/SocialSignIn";
import { AuthContext } from "../context/AuthContext";
import { CreateNewUser } from "../utils/auth";

export default function SignUpPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();
  const handleCreateNewAccount = (e) => {
    e.preventDefault();
    CreateNewUser(email, password);
    router.push("/dashboard/home");
  };
  const currentUser = useContext(AuthContext);
  // console.log(currentUser);

  console.log(useContext(AuthContext));

  if (currentUser) {
    if (typeof window !== "undefined") {
      router.push("/dashboard/home");
    }
    return <></>;
  } else {
    return (
      <div className='min-h-full flex'>
        <div className='flex-1 flex flex-col justify-center py-12 px-4 sm:px-6 lg:flex-none lg:px-20 xl:px-24'>
          <div className='mx-auto w-full max-w-sm lg:w-96'>
            <Image height={80} width={80} src={Logo} alt='Logo' />
            <div>
              <h2 className='mt-6 text-3xl font-extrabold text-gray-900'>
                Create an account
              </h2>
              <p className='mt-2 text-sm text-gray-600'>
                Already have an account?{" "}
                <Link href='/signin'>
                  <a className='font-medium text-indigo-600 hover:text-indigo-500'>
                    Login here
                  </a>
                </Link>
              </p>
            </div>

            <div className='mt-8'>
              <SocialSignIn />
              <div className='mt-6'>
                <form action='#' method='POST' className='space-y-6'>
                  <div>
                    <label
                      htmlFor='email'
                      className='block text-sm font-medium text-gray-700'
                    >
                      Email address
                    </label>
                    <div className='mt-1'>
                      <input
                        id='email'
                        name='email'
                        type='email'
                        autoComplete='email'
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className='appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm'
                      />
                    </div>
                  </div>

                  <div className='space-y-1'>
                    <label
                      htmlFor='password'
                      className='block text-sm font-medium text-gray-700'
                    >
                      Password
                    </label>
                    <div className='mt-1'>
                      <input
                        id='password'
                        name='password'
                        type='password'
                        autoComplete='current-password'
                        required
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className='appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm'
                      />
                    </div>
                  </div>

                  <div className='flex items-center justify-between'>
                    <div className='flex items-center'>
                      <input
                        id='remember-me'
                        name='remember-me'
                        type='checkbox'
                        className='h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded'
                      />
                      <label
                        htmlFor='remember-me'
                        className='ml-2 block text-sm text-gray-900'
                      >
                        Remember me
                      </label>
                    </div>

                    <div className='text-sm'>
                      <a
                        href='#'
                        className='font-medium text-indigo-600 hover:text-indigo-500'
                      >
                        Forgot your password?
                      </a>
                    </div>
                  </div>

                  <div>
                    <button
                      type='submit'
                      onClick={handleCreateNewAccount}
                      className='w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
                    >
                      Create Account
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        <div className='hidden lg:block relative w-0 flex-1'>
          <Image
            className='absolute inset-0 h-full w-full object-cover'
            src={SignupBanner}
            layout='fill'
            alt='Banner'
          />
        </div>
      </div>
    );
  }
}
