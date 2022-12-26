import { Dialog } from "@headlessui/react";
import {
  Bars3Icon,
  ChevronRightIcon,
  StarIcon,
  XMarkIcon,
} from "@heroicons/react/24/solid";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import LandingFooter from "../landing-page/Footer";
import VariantCTA from "../VariantCTA";

const navigation = [
  { name: "Product", href: "#" },
  { name: "How it works", href: "#" },
  { name: "Pricing", href: "#" },
  { name: "Creator Live", href: "#" },
  { name: "Become a Creator", href: "#" },
];

const UGC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className='bg-black'>
      <div className='px-6 pt-6 lg:px-8'>
        <div>
          <nav
            className='flex h-9 items-center justify-between'
            aria-label='Global'
          >
            <div className='flex lg:min-w-0 lg:flex-1' aria-label='Global'>
              <Link href='/' className='-m-1.5 p-1.5'>
                {/* <span className='sr-only'>Kollaborate</span> */}
                <Image
                  height={48}
                  width={48}
                  src='/images/logo.png'
                  alt='Logo'
                />
              </Link>
            </div>
            <div className='flex lg:hidden'>
              <button
                type='button'
                className='-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-100'
                onClick={() => setMobileMenuOpen(true)}
              >
                {/* <span className='sr-only'>Open main menu</span> */}
                <Bars3Icon className='h-6 w-6' aria-hidden='true' />
              </button>
            </div>
            <div className='hidden lg:flex lg:min-w-0 lg:flex-1 lg:justify-center lg:gap-x-12'>
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className='font-medium text-gray-200 hover:text-indigo-600 transition-all duration-500'
                >
                  {item.name}
                </a>
              ))}
            </div>
            <div className='hidden lg:flex lg:min-w-0  lg:justify-end'>
              <Link
                className='inline-block rounded-lg px-4 py-1.5 text-base font-medium leading-6 bg-gray-700 text-gray-200 shadow-sm'
                href='/signin'
              >
                Log in
              </Link>
            </div>
          </nav>
          <Dialog as='div' open={mobileMenuOpen} onClose={setMobileMenuOpen}>
            <Dialog.Panel
              focus='true'
              className='fixed inset-0 z-10 overflow-y-auto bg-black px-6 py-6 lg:hidden'
            >
              <div className='flex h-9 items-center justify-between'>
                <div className='flex'>
                  <Link href='/' className='-m-1.5 p-1.5'>
                    {/* <span className='sr-only'>Kollaborate</span> */}
                    <Image
                      height={32}
                      width={32}
                      src='/images/logo.png'
                      alt='Logo'
                    />
                  </Link>
                </div>
                <div className='flex'>
                  <button
                    type='button'
                    className='-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-100'
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {/* <span className='sr-only'>Close menu</span> */}
                    <XMarkIcon className='h-6 w-6' aria-hidden='true' />
                  </button>
                </div>
              </div>
              <div className='mt-6 flow-root'>
                <div className='-my-6 divide-y divide-gray-500/10'>
                  <div className='space-y-2 py-6'>
                    {navigation.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className='-mx-3 block rounded-lg py-2 px-3 text-base font-medium leading-7 text-gray-200 hover:bg-gray-400/10'
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                  <div className='py-6'>
                    <Link
                      className='inline-block rounded-lg px-4 py-1.5 text-base font-medium leading-6 bg-gray-700 text-gray-200 shadow-sm'
                      href='/signin'
                    >
                      Log in
                    </Link>
                  </div>
                </div>
              </div>
            </Dialog.Panel>
          </Dialog>
        </div>
      </div>
      <main>
        {/* Hero section */}
        <div className='pt-8 overflow-hidden sm:pt-12 lg:relative lg:py-48'>
          <div className='mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:px-8 lg:max-w-7xl lg:grid lg:grid-cols-2 lg:gap-24'>
            <div className='mt-20'>
              <div className='mt-6 sm:max-w-xl'>
                <h1 className='text-3xl font-medium text-gray-100 tracking-tight sm:text-4xl'>
                  Your Creativity Matters, Follower Counts Don&apos;t Matter
                </h1>
                <p className='mt-6 text-2xl text-gray-200'>
                  Search and discover active brands to pitch to Be discoverable
                  when brands are looking for UGC!
                </p>
              </div>
              <form action='#' className='mt-12 sm:max-w-lg sm:w-full sm:flex'>
                <div className='min-w-0 flex-1'>
                  <label htmlFor='hero-email' className='sr-only'>
                    Email address
                  </label>
                  <input
                    id='hero-email'
                    type='email'
                    className='block w-full border border-gray-300 rounded-md px-5 py-3 text-base text-gray-900 placeholder-gray-500 shadow-sm focus:border-rose-500 focus:ring-rose-500'
                    placeholder='Enter your email'
                  />
                </div>
                <div className='mt-4 sm:mt-0 sm:ml-3'>
                  <button
                    type='submit'
                    className='block w-full rounded-md border border-transparent px-5 py-3 bg-rose-500 text-base font-medium text-white shadow hover:bg-rose-600 focus:outline-none focus:ring-2 focus:ring-rose-500 focus:ring-offset-2 sm:px-10'
                  >
                    Notify me
                  </button>
                </div>
              </form>
              <div className='mt-6'>
                <div className='inline-flex items-center divide-x divide-gray-300'>
                  <div className='flex-shrink-0 flex pr-5'>
                    <StarIcon
                      className='h-5 w-5 text-yellow-400'
                      aria-hidden='true'
                    />
                    <StarIcon
                      className='h-5 w-5 text-yellow-400'
                      aria-hidden='true'
                    />
                    <StarIcon
                      className='h-5 w-5 text-yellow-400'
                      aria-hidden='true'
                    />
                    <StarIcon
                      className='h-5 w-5 text-yellow-400'
                      aria-hidden='true'
                    />
                    <StarIcon
                      className='h-5 w-5 text-yellow-400'
                      aria-hidden='true'
                    />
                  </div>
                  <div className='min-w-0 flex-1 pl-5 py-1 text-sm text-gray-300 sm:py-3'>
                    <span className='font-medium text-gray-300'>
                      Rated 5 stars
                    </span>{" "}
                    by over{" "}
                    <span className='font-medium text-rose-500'>
                      500 beta users
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className='sm:mx-auto sm:max-w-3xl sm:px-6'>
            <div className='py-12 sm:relative sm:mt-12 sm:py-16 lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2'>
              <div className='hidden sm:block'>
                <div className='absolute inset-y-0 left-1/2 w-screen bg-gray-50 rounded-l-3xl lg:left-80 lg:right-0 lg:w-full' />
                <svg
                  className='absolute top-8 right-1/2 -mr-3 lg:m-0 lg:left-0'
                  width={404}
                  height={392}
                  fill='none'
                  viewBox='0 0 404 392'
                >
                  <defs>
                    <pattern
                      id='837c3e70-6c3a-44e6-8854-cc48c737b659'
                      x={0}
                      y={0}
                      width={20}
                      height={20}
                      patternUnits='userSpaceOnUse'
                    >
                      <rect
                        x={0}
                        y={0}
                        width={4}
                        height={4}
                        className='text-gray-200'
                        fill='currentColor'
                      />
                    </pattern>
                  </defs>
                  <rect
                    width={404}
                    height={392}
                    fill='url(#837c3e70-6c3a-44e6-8854-cc48c737b659)'
                  />
                </svg>
              </div>
              <div className='relative pl-4 -mr-40 sm:mx-auto sm:max-w-3xl sm:px-0 lg:max-w-none lg:h-full lg:pl-12'>
                <img
                  className='w-full rounded-md shadow-xl ring-1 ring-black ring-opacity-5 lg:h-full lg:w-auto lg:max-w-none'
                  src='https://tailwindui.com/img/component-images/task-app-rose.jpg'
                  alt=''
                />
              </div>
            </div>
          </div>
        </div>

        {/* Testimonial/stats section */}
        <div className='relative mt-20'>
          <div className='lg:mx-auto lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-2 lg:gap-24 lg:items-start'>
            <div className='relative sm:py-16 lg:py-0'>
              <div
                aria-hidden='true'
                className='hidden sm:block lg:absolute lg:inset-y-0 lg:right-0 lg:w-screen'
              >
                <div className='absolute inset-y-0 right-1/2 w-full bg-gray-900 rounded-r lg:right-72' />
                <svg
                  className='absolute top-8 left-1/2 -ml-3 lg:-right-8 lg:left-auto lg:top-12'
                  width={404}
                  height={392}
                  fill='none'
                  viewBox='0 0 404 392'
                >
                  <defs>
                    <pattern
                      id='02f20b47-fd69-4224-a62a-4c9de5c763f7'
                      x={0}
                      y={0}
                      width={20}
                      height={20}
                      patternUnits='userSpaceOnUse'
                    >
                      <rect
                        x={0}
                        y={0}
                        width={4}
                        height={4}
                        className='text-gray-200'
                        fill='currentColor'
                      />
                    </pattern>
                  </defs>
                  <rect
                    width={404}
                    height={392}
                    fill='url(#02f20b47-fd69-4224-a62a-4c9de5c763f7)'
                  />
                </svg>
              </div>
              <div className='relative mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:px-0 lg:max-w-none lg:py-20'>
                {/* Testimonial card*/}
                <div className='relative pt-64 pb-10 rounded shadow-xl overflow-hidden'>
                  <div className='absolute inset-0 h-full w-full object-cover'>
                    <Image
                      layout='fill'
                      src='https://source.unsplash.com/gUIJ0YszPig'
                      alt=''
                    />
                  </div>

                  <div className='absolute inset-0 bg-red-400 mix-blend-multiply' />
                  <div className='absolute inset-0 bg-gradient-to-t from-gray-600 via-gray-900 opacity-40' />
                  <div className='relative px-8'>
                    <blockquote className='mt-8'>
                      <div className='relative text-lg font-medium text-white md:flex-grow'>
                        <svg
                          className='absolute top-0 left-0 transform -translate-x-3 -translate-y-2 h-8 w-8 text-rose-400'
                          fill='currentColor'
                          viewBox='0 0 32 32'
                          aria-hidden='true'
                        >
                          <path d='M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z' />
                        </svg>
                        <p className='relative text-2xl font-semibold'>
                          Get Paid with clear built-in contracts in place -
                          Never get cheated again!
                        </p>
                      </div>

                      {/* <footer className='mt-4'>
                        <p className='text-base font-semibold text-rose-200'>
                            Prathmesh Sadake
                        </p>
                      </footer> */}
                    </blockquote>
                  </div>
                </div>
              </div>
            </div>

            <div className='relative mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:px-0'>
              {/* Content area */}
              <div className='pt-12 sm:pt-16 lg:pt-20'>
                <div className='mt-6 text-gray-200 space-y-6'>
                  <p className='text-xl leading-7'>
                    Setup recurring subscription - take the headache out of the
                    Retainer Model!
                  </p>
                  <p className='text-xl leading-7'>
                    0 fee payments! Yes, thats rights. Keep 100% of your
                    contract value!
                  </p>
                  <p className='text-xl leading-7'>
                    Zero hassle, no negotiations - focus on maximizing your
                    income.
                  </p>
                  <p className='text-xl leading-7'>
                    Built in zero negotiation Contracts for peace of mind!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='mt-16 mx-auto max-w-7xl px-4 sm:mt-24 sm:px-6 lg:mt-32'>
          <div className='lg:grid lg:grid-cols-12 lg:gap-8'>
            <div className='sm:text-center md:max-w-2xl md:mx-auto lg:col-span-6 lg:text-left text-gray-200'>
              <h1>
                <span className='mt-1 block text-xl tracking-tight font-medium sm:text-2xl xl:text-3xl'>
                  <span className='block text-gray-100'>
                    Get Paid with clear built-in contracts in place
                  </span>
                  <span className='block text-red-400'>
                    Never get cheated again!
                  </span>
                </span>
              </h1>
              <div className='mt-6 text-gray-200 space-y-6'>
                <p className='text-xl leading-7'>
                  Step out and Grow! Reach decision makers in new verticals like
                  apps and services to diversify your income stream!
                </p>
                <p className='text-xl leading-7'>
                  Stay on top of your game! Get the latest hooks, trending audio
                  and more.
                </p>
                <p className='text-xl leading-7'>
                  Maximize your creativity - Let us handle monitoring for
                  contract breaches, Virtual Assistants and every other aspect
                  of your business thats not the best use of your time
                </p>
                <p className='text-xl leading-7'>
                  Track your work! Get Alerts on brands misusing your content or
                  copycats
                </p>
              </div>
            </div>
            <div className='mt-12 relative sm:max-w-lg sm:mx-auto lg:mt-0 lg:max-w-none lg:mx-0 lg:col-span-6 lg:flex lg:items-center'>
              <svg
                className='absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-8 scale-75 origin-top sm:scale-100 lg:hidden'
                width={640}
                height={784}
                fill='none'
                viewBox='0 0 640 784'
                aria-hidden='true'
              >
                <defs>
                  <pattern
                    id='4f4f415c-a0e9-44c2-9601-6ded5a34a13e'
                    x={118}
                    y={0}
                    width={20}
                    height={20}
                    patternUnits='userSpaceOnUse'
                  >
                    <rect
                      x={0}
                      y={0}
                      width={4}
                      height={4}
                      className='text-gray-200'
                      fill='currentColor'
                    />
                  </pattern>
                </defs>
                <rect
                  y={72}
                  width={640}
                  height={640}
                  className='text-gray-50'
                  fill='currentColor'
                />
                <rect
                  x={118}
                  width={404}
                  height={784}
                  fill='url(#4f4f415c-a0e9-44c2-9601-6ded5a34a13e)'
                />
              </svg>
              <div className='absolute inset-0 h-full w-full object-cover'>
                <Image
                  layout='fill'
                  src='https://source.unsplash.com/gUIJ0YszPig'
                  alt=''
                />
              </div>
            </div>
          </div>
        </div>

        {/* CTA section */}
        <VariantCTA />
      </main>

      {/* Footer section */}
      <LandingFooter />
    </div>
  );
};

export default UGC;
