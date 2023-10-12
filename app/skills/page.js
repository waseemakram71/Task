import React from 'react';
import { FaLocationDot } from 'react-icons/fa6';
import { FaComments } from 'react-icons/fa';

function Page() {
  return (
    <div className="w-full flex flex-wrap items-center justify-center p-4 sm:p-8">
      <div className="w-full sm:w-1/2 md:w-1/2 lg:w-1/3 xl:w-1/4 p-4">
        <div className="max-w-sm bg-white border border-gray-200 rounded-t-3xl shadow dark:bg-gray-800 dark:border-gray-700">
          <a href="#">
            <img  src="/images/image 5.png" alt="" />
          </a>
          <div className="p-5">
            <a href="#">
              <h5 className="mb-2 text-xl sm:text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                The Best Deployment Stacks and Practices from Our Clients
              </h5>
            </a>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
              September 17, 2021 - Tips & Tricks
            </p>
            <div className="flex flex-wrap sm:flex-no-wrap justify-between">
              <div className="flex items-center space-x-1">
                <FaLocationDot style={{ color: 'red' }} />
                <span>Georgia</span>
              </div>
              <div className="flex items-center space-x-1">
                <FaComments style={{ color: 'red' }} />
                <span>Comments(52)</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full sm:w-1/2 md:w-1/2 lg:w-1/3 xl:w-1/4 p-4">
        <div className="max-w-sm bg-white border border-gray-200 rounded-t-3xl shadow dark:bg-gray-800 dark:border-gray-700">
          <a href="#">
            <img className="rounded-t-lg" src="/images/image 5.png" alt="" />
          </a>
          <div className="p-5">
            <a href="#">
              <h5 className="mb-2 text-xl sm:text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                The Best Deployment Stacks and Practices from Our Clients
              </h5>
            </a>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
              September 17, 2021 - Tips & Tricks
            </p>
            <div className="flex flex-wrap sm:flex-no-wrap justify-between">
              <div className="flex items-center space-x-1">
                <FaLocationDot style={{ color: 'red' }} />
                <span>Georgia</span>
              </div>
              <div className="flex items-center space-x-1">
                <FaComments style={{ color: 'red' }} />
                <span>Comments(52)</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full sm:w-1/2 md:w-1/2 lg:w-1/3 xl:w-1/4 p-4">
        <div className="max-w-sm bg-white border border-gray-200 rounded-t-3xl shadow dark:bg-gray-800 dark:border-gray-700">
          <a href="#">
            <img className="rounded-t-lg" src="/images/image 5.png" alt="" />
          </a>
          <div className="p-5">
            <a href="#">
              <h5 className="mb-2 text-xl sm:text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                The Best Deployment Stacks and Practices from Our Clients
              </h5>
            </a>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
              September 17, 2021 - Tips & Tricks
            </p>
            <div className="flex flex-wrap sm:flex-no-wrap justify-between">
              <div className="flex items-center space-x-1">
                <FaLocationDot style={{ color: 'red' }} />
                <span>Georgia</span>
              </div>
              <div className="flex items-center space-x-1">
                <FaComments style={{ color: 'red' }} />
                <span>Comments(52)</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full sm:w-1/2 md:w-1/2 lg:w-1/3 xl:w-1/4 p-4">
        <div className="max-w-sm bg-white border border-gray-200 rounded-t-3xl shadow dark:bg-gray-800 dark:border-gray-700">
          <a href="#">
            <img className="rounded-t-lg" src="/images/image 5.png" alt="" />
          </a>
          <div className="p-5">
            <a href="#">
              <h5 className="mb-2 text-xl sm:text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                The Best Deployment Stacks and Practices from Our Clients
              </h5>
            </a>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
              September 17, 2021 - Tips & Tricks
            </p>
            <div className="flex flex-wrap sm:flex-no-wrap justify-between">
              <div className="flex items-center space-x-1">
                <FaLocationDot style={{ color: 'red' }} />
                <span>Georgia</span>
              </div>
              <div className="flex items-center space-x-1">
                <FaComments style={{ color: 'red' }} />
                <span>Comments(52)</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Page;
