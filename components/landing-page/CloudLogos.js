export default function CloudLogos() {
  return (
    <div className='bg-black relative py-6'>
      <div className='z-10 absolute inset-x-0 top-[-10rem] transform-gpu overflow-hidden blur-3xl sm:top-[-20rem]'>
        <svg
          className='relative left-[calc(50%-11rem)] -z-10 h-[21.1875rem] max-w-none -translate-x-1/2 rotate-[30deg] sm:left-[calc(50%-30rem)] sm:h-[42.375rem]'
          viewBox='0 0 1155 678'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            fill='url(#45de2b6b-92d5-4d68-a6a0-9b9b2abad533)'
            fillOpacity='.3'
            d='M317.219 518.975L203.852 678 0 438.341l317.219 80.634 204.172-286.402c1.307 132.337 45.083 346.658 209.733 145.248C936.936 126.058 882.053-94.234 1031.02 41.331c119.18 108.451 130.68 295.337 121.53 375.223L855 299l21.173 362.054-558.954-142.079z'
          />
          <defs>
            <linearGradient
              id='45de2b6b-92d5-4d68-a6a0-9b9b2abad533'
              x1='1155.49'
              x2='-78.208'
              y1='.177'
              y2='474.645'
              gradientUnits='userSpaceOnUse'
            >
              <stop stopColor='#9089FC' />
              <stop offset={1} stopColor='#FF80B5' />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <div className='max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8'>
        <div className='grid grid-cols-2 gap-8 md:grid-cols-6 lg:grid-cols-5'>
          <div className='col-span-1 flex justify-center md:col-span-2 lg:col-span-1'>
            <img
              className='h-12'
              src='https://tailwindui.com/img/logos/tuple-logo-gray-400.svg'
              alt='Tuple'
            />
          </div>
          <div className='col-span-1 flex justify-center md:col-span-2 lg:col-span-1'>
            <img
              className='h-12'
              src='https://tailwindui.com/img/logos/mirage-logo-gray-400.svg'
              alt='Mirage'
            />
          </div>
          <div className='col-span-1 flex justify-center md:col-span-2 lg:col-span-1'>
            <img
              className='h-12'
              src='https://tailwindui.com/img/logos/statickit-logo-gray-400.svg'
              alt='StaticKit'
            />
          </div>
          <div className='col-span-1 flex justify-center md:col-span-3 lg:col-span-1'>
            <img
              className='h-12'
              src='https://tailwindui.com/img/logos/transistor-logo-gray-400.svg'
              alt='Transistor'
            />
          </div>
          <div className='col-span-2 flex justify-center md:col-span-3 lg:col-span-1'>
            <img
              className='h-12'
              src='https://tailwindui.com/img/logos/workcation-logo-gray-400.svg'
              alt='Workcation'
            />
          </div>
        </div>
      </div>
    </div>
  );
}
