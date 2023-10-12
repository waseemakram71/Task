import React from 'react';
import {FaLocationDot } from 'react-icons/fa6';
import {FaComments } from 'react-icons/fa';

export default function Page() {
  return (
    <div className="flex justify-center items-center">
        
      {/* Part 1 */}
      <div className="max-w-sm bg-white border border-gray-200 rounded-t-3xl shadow dark:bg-gray-800 dark:border-gray-700">
        <a href="#">
          <img className="rounded-t-lg" src="/images/Food.png" alt="" />
          <p className='text-sm mx-1 mt-2'>July 15,2021-Tips and Tricks</p>
        </a>
        <div className="p-5">
          <a href="#">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              Top 10 Mobile Development technologies
            </h5>
          </a>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra
            pharetra ac erat commodo non leo eget gravida viverra. Pharetra
            pharetra.
          </p>
          <div className='flex  justify-between'>
            <div className='flex items-center space-x-1'>
  <FaLocationDot style={{ color: 'red'}} /> 
  <span style={{ display: 'inline-block' }}>Penang,Malaysia</span> 
</div>
<div className='flex items-center space-x-1'>
  <FaComments style={{ color: 'red' }} />
  <span>Comments
    (52)</span>
</div>

</div>
        </div>
      </div>

  

    </div>
  );
}
