import React from "react";
import Pagination from "../../components/Pagination";

import {
  ChevronLeftIcon,
  ChevronRightIcon,
  EllipsisVerticalIcon,
} from "@heroicons/react/24/solid";
import { ArrowUpRightIcon } from "@heroicons/react/24/outline";

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
  {
    item: "Jan App",
    price: "App Ad",
    description: "Brand Direct",
  },
];

const BrowseBrands = ({ data }) => {
  console.log(data);
  return (
    <div className='max-h-screen'>
      <h1 className='text-xl font-semibold text-gray-900'>
        Search for brands and paid deals
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
                <thead className='divide-y divide-gray-500 bg-white'>
                  <tr className='bg-blue-100'>
                    <td className='whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6'>
                      Name
                    </td>
                    <td className='whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6'>
                      Contact Name
                    </td>
                    <td className='whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6'>
                      Country
                    </td>
                    <td className='whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6'>
                      City
                    </td>
                    <td className='whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6'>
                      Employee Size
                    </td>
                    <td className='whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6'>
                      Description
                    </td>
                    <td className='whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6'>
                      Website
                    </td>
                  </tr>
                </thead>
                <tbody className='divide-y divide-gray-500 bg-white'>
                  {data.list.map((item) => (
                    <tr key={item.id} className='bg-blue-50'>
                      <td className='whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6'>
                        {item.Name}
                      </td>
                      <td className='whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6'>
                        {item.ContactName}
                      </td>
                      <td className='whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6'>
                        {item.Country}
                      </td>
                      <td className='whitespace-nowrap px-3 py-4 text-sm text-gray-500 sm:pl-6'>
                        {item.City}
                      </td>
                      <td className='whitespace-nowrap px-3 py-4 text-sm text-gray-500 sm:pl-6'>
                        {item.EmployeeCount}
                      </td>
                      <td className='whitespace-nowrap px-3 py-4 text-sm text-gray-500 sm:pl-6'>
                        {item.Description}
                      </td>
                      <td className='relative whitespace-nowrap py-4 pl-3 pr-4 text-center text-sm font-medium sm:pl-6'>
                        <a
                          href={item.Website}
                          target={"_blank"}
                          rel='noreferrer noopener'
                          className='text-indigo-600 hover:text-indigo-900'
                        >
                          <ArrowUpRightIcon height={25} />
                          <span className='sr-only'>Visit {item.Website}</span>
                        </a>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <div className='flex items-center justify-between border-t border-gray-200 bg-white px-4 py-3 sm:px-6'>
                <div className='flex flex-1 justify-between sm:hidden'>
                  {!data.pageInfo.isFirstPage && (
                    <a
                      href='#'
                      className='relative inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50'
                    >
                      Previous
                    </a>
                  )}
                  <a
                    href='#'
                    className='relative ml-3 inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50'
                  >
                    Next
                  </a>
                </div>
                <div className='hidden sm:flex sm:flex-1 sm:items-center sm:justify-between'>
                  <div>
                    <p className='text-sm text-gray-700'>
                      Showing <span className='font-medium'>1</span> to{" "}
                      <span className='font-medium'>10</span> of{" "}
                      <span className='font-medium'>
                        {data.pageInfo.totalRows}
                      </span>{" "}
                      results
                    </p>
                  </div>
                  <div>
                    <nav
                      className='isolate inline-flex -space-x-px rounded-md shadow-sm'
                      aria-label='Pagination'
                    >
                      <a
                        href='#'
                        className='relative inline-flex items-center rounded-l-md border border-gray-300 bg-white px-2 py-2 text-sm font-medium text-gray-500 hover:bg-gray-50 focus:z-20'
                      >
                        <span className='sr-only'>Previous</span>
                        <ChevronLeftIcon
                          className='h-5 w-5'
                          aria-hidden='true'
                        />
                      </a>
                      {/* Current: "z-10 bg-indigo-50 border-indigo-500 text-indigo-600", Default: "bg-white border-gray-300 text-gray-500 hover:bg-gray-50" */}
                      <a
                        href='#'
                        aria-current='page'
                        className='relative z-10 inline-flex items-center border border-indigo-500 bg-indigo-50 px-4 py-2 text-sm font-medium text-indigo-600 focus:z-20'
                      >
                        1
                      </a>
                      <a
                        href='#'
                        className='relative inline-flex items-center border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-50 focus:z-20'
                      >
                        2
                      </a>
                      <a
                        href='#'
                        className='relative hidden items-center border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-50 focus:z-20 md:inline-flex'
                      >
                        3
                      </a>
                      <span className='relative inline-flex items-center border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700'>
                        ...
                      </span>
                      <a
                        href='#'
                        className='relative hidden items-center border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-50 focus:z-20 md:inline-flex'
                      >
                        8
                      </a>
                      <a
                        href='#'
                        className='relative inline-flex items-center border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-50 focus:z-20'
                      >
                        9
                      </a>
                      <a
                        href='#'
                        className='relative inline-flex items-center border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-50 focus:z-20'
                      >
                        10
                      </a>
                      <a
                        href='#'
                        className='relative inline-flex items-center rounded-r-md border border-gray-300 bg-white px-2 py-2 text-sm font-medium text-gray-500 hover:bg-gray-50 focus:z-20'
                      >
                        <span className='sr-only'>Next</span>
                        <ChevronRightIcon
                          className='h-5 w-5'
                          aria-hidden='true'
                        />
                      </a>
                    </nav>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export async function getServerSideProps() {
  // Fetch data from external API
  const options = {
    method: "GET",
    headers: {
      "xc-auth":
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InByYXRobWVzaHNhZGFrZUBnbWFpbC5jb20iLCJmaXJzdG5hbWUiOm51bGwsImxhc3RuYW1lIjpudWxsLCJpZCI6InVzX3MwZmxlcGVrb3UyYXhrIiwicm9sZXMiOiJvcmctbGV2ZWwtY3JlYXRvciIsInRva2VuX3ZlcnNpb24iOiJiMmM0NjExN2RkZDA4NzJlMzAwYWM1YTIzZWYwYzU3NDMyOGJkNjA5MWQzNzExNTFhMWJhZDEwYzFjYzdmOGU3ZmY1NWVhMWE5ZTE0NTZhYiIsImlhdCI6MTY3MjA1NTYwMCwiZXhwIjoxNjcyMDkxNjAwfQ.zKLBxh1dhsugwQ5EwAO7Tj36mdxnq1Q-sYjxRoHydp4",
    },
  };

  const response = await fetch(
    "https://kollaboratenocodb.herokuapp.com/api/v1/db/data/noco/p_xioe0ujux7f1jw/LeadlistNov2022Csv/views/LeadlistNov2022Csv?offset=0&limit=25&where=",
    options
  );
  const data = await response.json();
  // Pass data to the page via props
  return { props: { data } };
}
export default BrowseBrands;
