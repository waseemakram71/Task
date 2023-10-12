import React from 'react';

function Page() {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="w-full max-w-md p-4 bg-slate-50 border border-gray-200 rounded-lg shadow-sm:p-8 dark:bg-gray-800 dark:border-gray-700">
        <div className="flex items-center justify-center mb-4">
          <div className="bg-white shadow-lg text-black rounded-lg py-2 px-4 z-10">
            <h5 className="text-xl lg:text-2xl font-bold leading-none">Recent Post</h5>
          </div>
        </div>

        <div className="flow-root">
          <ul role="list" className="">
            <li className="py-3 sm:py-4 md:py-6 lg:py-8">
              <div className="flex items-center space-x-4">
                <div className="flex-shrink-0">
                  <img className="w-8 h-8 rounded" src="/images/image 8.png" alt="Neil image" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                    September 17, 2018 - Tips & Tricks
                  </p>
                  <p className="text-sm font-bold text-gray-900 truncate dark:text-white">
                    Finding Love & Home in Tbilisi, Georgia
                  </p>
                </div>
              </div>
            </li>

            <li className="py-3 sm:py-4 md:py-6 lg:py-8">
              <div className="flex items-center space-x-4">
                <div className="flex-shrink-0">
                  <img className="w-8 h-8 rounded" src="/images/image 7.png" alt="Neil image" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                    September 17, 2018 - Tips & Tricks
                  </p>
                  <p className="text-sm font-bold text-gray-900 truncate dark:text-white">
                    Finding Love & Home in Tbilisi, Georgia
                  </p>
                </div>
              </div>
            </li>

            <li className="py-3 sm:py-4 md:py-6 lg:py-8">
              <div className="flex items-center space-x-4">
                <div className="flex-shrink-0">
                  <img className="w-8 h-8 rounded" src="/images/image 8.png" alt="Neil image" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                    September 17, 2018 - Tips & Tricks
                  </p>
                  <p className="text-sm font-bold text-gray-900 truncate dark:text-white">
                    Finding Love & Home in Tbilisi, Georgia
                  </p>
                </div>
              </div>
            </li>

            <li className="py-3 sm:py-4 md:py-6 lg:py-8">
              <div className="flex items-center space-x-4">
                <div className="flex-shrink-0">
                  <img className="w-8 h-8 rounded" src="/images/image 7.png" alt="Neil image" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                    September 17, 2018 - Tips & Tricks
                  </p>
                  <p className="text-sm font-bold text-gray-900 truncate dark:text-white">
                    Finding Love & Home in Tbilisi, Georgia
                  </p>
                </div>
              </div>
            </li>

            <li className="py-1 sm:py-3 md:py-3 lg:py-4">
              <div className="flex items-center space-x-4">
                <div className="flex-shrink-0">
                  <img className="w-8 h-8 rounded" src="/images/image 8.png" alt="Neil image" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                    September 17, 2018 - Tips & Tricks
                  </p>
                  <p className="text-sm font-bold text-gray-900 truncate dark:text-white">
                    Finding Love & Home in Tbilisi, Georgia
                  </p>
                </div>
              </div>
            </li>
            
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Page;
