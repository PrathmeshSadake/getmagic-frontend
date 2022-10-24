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
// import { ChevronDownIcon } from "@heroicons/react/24/solid";

const resources = [
  {
    name: "Help Center",
    description:
      "Get all of your questions answered in our forums or contact support.",
    href: "#",
    icon: PhoneIcon,
  },
  {
    name: "Guides",
    description:
      "Learn how to maximize our platform to get the most out of it.",
    href: "#",
    icon: BookmarkIcon,
  },
  {
    name: "Events",
    description:
      "See what meet-ups and other events we might be planning near you.",
    href: "#",
    icon: CalendarIcon,
  },
  {
    name: "Security",
    description: "Understand how we take your privacy seriously.",
    href: "#",
    icon: ShieldCheckIcon,
  },
];

export default function LandingNavbar() {
  return (
    <Popover className='relative bg-white'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6'>
        <div className='flex justify-between items-center py-6 md:justify-start md:space-x-8'>
          <div className='flex justify-start lg:flex-1'>
            <form className='w-full'>
              <label
                for='default-search'
                class='mb-2 text-sm font-medium text-gray-900 sr-only'
              >
                Search
              </label>
              <div class='relative'>
                <div class='flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none'>
                  <svg
                    aria-hidden='true'
                    class='w-5 h-5 text-gray-500'
                    fill='none'
                    stroke='currentColor'
                    viewBox='0 0 24 24'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path
                      stroke-linecap='round'
                      stroke-linejoin='round'
                      stroke-width='2'
                      d='M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z'
                    ></path>
                  </svg>
                </div>
                <input
                  type='search'
                  id='default-search'
                  class='block p-2 pl-10 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300'
                  placeholder='Search for creators, trends and sounds'
                  required
                />
                {/* <button
                  type='submit'
                  class='text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'
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
            <div class='flex items-center px-4 rounded border border-gray-200'>
              <input
                id='bordered-radio-1'
                type='radio'
                value=''
                name='bordered-radio'
                class='w-4 h-4 text-blue-600 bg-gray-100 border-gray-300'
              />
              <label
                for='bordered-radio-1'
                class='py-2 ml-2 w-full text-sm font-medium text-gray-900'
              >
                Brand
              </label>
            </div>
            <div class='flex items-center ml-2 px-4 rounded border border-gray-200'>
              <input
                checked
                id='bordered-radio-2'
                type='radio'
                value=''
                name='bordered-radio'
                class='w-4 h-4 text-blue-600 bg-gray-100 border-gray-300'
              />
              <label
                for='bordered-radio-2'
                class='py-2 ml-2 w-full text-sm font-medium text-gray-900'
              >
                Creator
              </label>
            </div>

            <div className='ml-4 flex items-center justify-center bg-indigo-500 py-2 px-3'>
              <LockClosedIcon className='h-4 w-4 text-white' />
              <p class='ml-2 text-sm text-white tracking-widest'>LOGIN</p>
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
                <div>
                  <img
                    className='h-8 w-auto'
                    src='https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg'
                    alt='Workflow'
                  />
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
                  className='text-base font-medium text-gray-900 hover:text-gray-700'
                >
                  Pricing
                </a>

                <a
                  href='#'
                  className='text-base font-medium text-gray-900 hover:text-gray-700'
                >
                  Docs
                </a>
                {resources.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className='text-base font-medium text-gray-900 hover:text-gray-700'
                  >
                    {item.name}
                  </a>
                ))}
              </div>
              <div>
                <a
                  href='#'
                  className='w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700'
                >
                  Sign up
                </a>
                <p className='mt-6 text-center text-base font-medium text-gray-500'>
                  Existing customer?{" "}
                  <a href='#' className='text-indigo-600 hover:text-indigo-500'>
                    Sign in
                  </a>
                </p>
              </div>
            </div>
          </div>
        </Popover.Panel>
      </Transition>
    </Popover>
  );
}
