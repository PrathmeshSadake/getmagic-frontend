/* This example requires Tailwind CSS v2.0+ */
import { Fragment } from "react";
import { Popover, Transition } from "@headlessui/react";
import {
  BookmarkIcon,
  CalendarIcon,
  Bars3Icon,
  ShieldCheckIcon,
  PhoneIcon,
  XMarkIcon,
  LockClosedIcon,
} from "@heroicons/react/24/outline";
import Logo from "../assets/logo.png";
import Image from "next/image";
import { useRouter } from "next/router";

export default function LandingNavbar() {
  const router = useRouter();
  const handlePushToLogin = (e) => {
    e.preventDefault();
    router.push("/signin");
  };
  return (
    <Popover className='relative bg-white'>
      <div className='max-w-7xl mx-auto px-4'>
        <div className='flex justify-between items-center py-6 md:justify-start md:space-x-8'>
          <div className='flex justify-start flex-1 mr-4 md:mr-0'>
            <form className='w-full'>
              <label
                htmlFor='default-search'
                className='mb-2 text-sm font-medium text-gray-900 sr-only'
              >
                Search
              </label>
              <div className='relative'>
                <div className='flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none'>
                  <svg
                    aria-hidden='true'
                    className='w-5 h-5 text-gray-500'
                    fill='none'
                    stroke='currentColor'
                    viewBox='0 0 24 24'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth='2'
                      d='M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z'
                    ></path>
                  </svg>
                </div>
                <input
                  type='search'
                  id='default-search'
                  className='block p-2 pl-10 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300'
                  placeholder='Search for creators, trends or sounds'
                  required
                />
                {/* <button
                  type='submit'
                  className='text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'
                >
                  Search
                </button> */}
              </div>
            </form>
          </div>
          <div className='-mr-2 -my-2 md:hidden'>
            <Popover.Button className='bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500'>
              <span className='sr-only'>Open menu</span>
              <Bars3Icon className='h-6 w-6' aria-hidden='true' />
            </Popover.Button>
          </div>
          <Popover.Group as='nav' className='hidden md:flex space-x-10'>
            <a
              href='#'
              className='text-sm font-normal tracking-wide text-gray-500 hover:text-gray-900'
            >
              HOW IT WORKS
            </a>
            <a
              href='#'
              className='text-sm font-normal tracking-wide text-gray-500 hover:text-gray-900'
            >
              PRICING
            </a>
            <a
              href='#'
              className='text-sm font-normal tracking-wide text-gray-500 hover:text-gray-900'
            >
              CREATOR LIVE!
            </a>
            <a
              href='#'
              className='text-sm font-normal tracking-wide text-gray-500 hover:text-gray-900'
            >
              BECOME A CREATOR
            </a>
          </Popover.Group>
          <div className='hidden md:flex items-center justify-end md:flex-1 lg:w-0'>
            <div class='cursor-pointer flex justify-center items-center font-medium py-2 px-3 rounded-full rounded-r-none bg-white text-gray-800 border-2 border-black'>
              <p className='text-sm text-gray-800 tracking-widest'>BRAND</p>
            </div>
            <div class='cursor-pointer flex justify-center items-center font-medium py-2 px-3 rounded-full rounded-l-none text-indigo-100 bg-[#1F3E66] border-2 border-[#1F3E66]'>
              <p className='text-sm text-white tracking-widest'>CREATOR</p>
            </div>

            <div
              onClick={handlePushToLogin}
              className='rounded-full cursor-pointer ml-4 flex items-center justify-center bg-[#1F3E66] border-2 border-[#1F3E66] py-2 px-3'
            >
              <div className='bg-white p-0.5 rounded-full'>
                <LockClosedIcon className='h-3 w-3 text-[#1F3E66]' />
              </div>
              <p className='ml-2 text-sm text-white tracking-widest'>LOGIN</p>
            </div>
          </div>
        </div>
      </div>

      <Transition
        as={Fragment}
        enter='duration-200 ease-out'
        enterFrom='opacity-0 scale-95'
        enterTo='opacity-100 scale-100'
        leave='duration-100 ease-in'
        leaveFrom='opacity-100 scale-100'
        leaveTo='opacity-0 scale-95'
      >
        <Popover.Panel
          focus
          className='absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden'
        >
          <div className='rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50'>
            <div className='pt-5 pb-6 px-5'>
              <div className='flex items-center justify-between'>
                <div className='flex items-center flex-shrink-0 px-4'>
                  <Image height={50} width={50} src={Logo} alt='Logo' />
                  <h1 className='font-semibold text-3xl pl-2'>GM</h1>
                </div>
                <div className='-mr-2'>
                  <Popover.Button className='bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500'>
                    <span className='sr-only'>Close menu</span>
                    <XMarkIcon className='h-6 w-6' aria-hidden='true' />
                  </Popover.Button>
                </div>
              </div>
            </div>
            <div className='py-6 px-5 space-y-6'>
              <div className='grid grid-cols-2 gap-y-4 gap-x-8'>
                <a
                  href='#'
                  className='text-sm  text-gray-900 hover:text-gray-700'
                >
                  HOW IT WORKS
                </a>
                <a
                  href='#'
                  className='text-sm  text-gray-900 hover:text-gray-700'
                >
                  PRICING
                </a>
                <a
                  href='#'
                  className='text-sm  text-gray-900 hover:text-gray-700'
                >
                  CREATOR LIVE!
                </a>{" "}
                <a
                  href='#'
                  className='text-sm  text-gray-900 hover:text-gray-700'
                >
                  BECOME A CREATOR
                </a>
              </div>
              <div>
                <div
                  onClick={handlePushToLogin}
                  className='flex items-center justify-center bg-[#1F3E66] py-2 px-3'
                >
                  <div className='bg-white p-0.5 rounded-full'>
                    <LockClosedIcon className='h-3 w-3 text-[#1F3E66]' />
                  </div>
                  <p className='ml-2 text-sm text-white tracking-widest'>
                    LOGIN
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Popover.Panel>
      </Transition>
    </Popover>
  );
}
