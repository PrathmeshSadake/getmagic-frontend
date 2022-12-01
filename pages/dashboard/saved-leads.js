import React from "react";
import Pagination from "../../components/Pagination";

import { EllipsisVerticalIcon } from "@heroicons/react/24/solid";

/* This example requires Tailwind CSS v2.0+ */
const items = [
  {
    item: "Hippo",
    price: "Children Toys",
    description: "Brand Direct",
  },
  {
    item: "Filipo Loreti",
    price: "Women’s fashion",
    description: "Brand Direct",
  },
  {
    item: "Jan App",
    price: "App Ad",
    description: "Brand Direct",
  },
  {
    item: "Max Fashion",
    price: "Clothes and Fashion",
    description: "Brand Direct",
  },
  {
    item: "Samsung",
    price: "Smartphone Electronics",
    description: "Brand Direct",
  },
];

const SavedLeads = () => {
  return (
    <div className='max-h-screen'>
      <h1 className='text-xl font-semibold text-gray-900'>
        Your saved leads, ready when you are!
      </h1>

      <div className='flex flex-col mt-2 space-y-4 lg:flex-row lg:space-x-4 lg:space-y-0'>
        <div class='form-check'>
          <input
            class='form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer'
            type='checkbox'
            value=''
          />
          <label class='form-check-label inline-block text-gray-800'>
            Brand Direct
          </label>
        </div>
        <div class='form-check'>
          <input
            class='form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer'
            type='checkbox'
            value=''
          />
          <label class='form-check-label inline-block text-gray-800'>
            Airbnb
          </label>
        </div>
        <div class='form-check'>
          <input
            class='form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer'
            type='checkbox'
            value=''
          />
          <label class='form-check-label inline-block text-gray-800'>
            Checked checkbox
          </label>
        </div>
      </div>

      <div className='relative mt-8 flex flex-col'>
        <div className='-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8'>
          <div className='inline-block min-w-full py-2 align-middle md:px-6 lg:px-8'>
            <div className='overflow-hidden shadow ring-1 ring-black ring-opacity-5'>
              <table className='min-w-full divide-y divide-gray-600'>
                <tbody className='divide-y divide-gray-500 bg-white'>
                  {[...items].map((item) => (
                    <tr key={item.description} className='bg-blue-100'>
                      <td className='whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6'>
                        {item.item}
                      </td>
                      <td className='whitespace-nowrap px-3 py-4 text-sm text-gray-500'>
                        {item.price}
                      </td>
                      <td className='whitespace-nowrap px-3 py-4 text-sm text-gray-500'>
                        {item.description}
                      </td>
                      <td className='relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-6'>
                        <a
                          href='#'
                          className='text-indigo-600 hover:text-indigo-900'
                        >
                          <EllipsisVerticalIcon height={25} />
                          <span className='sr-only'>Edit {item.item}</span>
                        </a>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <div className='absolute bottom-0 left-0 right-0'>
          <Pagination />
        </div>
      </div>
    </div>
  );
};

export default SavedLeads;
