import * as React from 'react';
import { BsBookmark, BsPatchCheckFill } from 'react-icons/bs';
import { IJobItem } from '@/interfaces/Job';
import CategoriesInner from '@/components/categories/CategoriesInner';
import Stars from '@/components/Stars';

interface JobItemProps {
  job: IJobItem;
}

const JobItem: React.FC<JobItemProps> = ({ job }) => {
  return (
    <div className='w-100 overflow-hidden rounded-md bg-white p-5'>
      <div className='flex justify-between'>
        <div className='pr-2'>
          <svg
            width='64px'
            height='64px'
            viewBox='0 0 64 64'
            xmlns='http://www.w3.org/2000/svg'
          >
            <g id='Home' />
            <g id='Camera' />
            <g id='Mail'>
              <g>
                <path
                  d='M62,18v28c0,3.3-2.7,6-6,6H8c-3.3,0-6-2.7-6-6V18c0-0.7,0.1-1.5,0.4-2.2c0-0.1,0-0.1,0.1-0.2    s0.1-0.1,0.1-0.2C3.6,13.3,5.7,12,8,12h48c2.3,0,4.4,1.3,5.4,3.4c0,0.1,0.1,0.1,0.1,0.2s0.1,0.1,0.1,0.2C61.9,16.5,62,17.3,62,18z    '
                  fill='#FE5723'
                />
              </g>
              <g>
                <path
                  d='M60.7,18.2L33,33.7c-0.3,0.2-0.6,0.3-1,0.3s-0.7-0.1-1-0.3L3.3,18.2c-0.9-0.5-1.3-1.6-0.9-2.5    C3.4,13.4,5.6,12,8,12h48c2.4,0,4.6,1.4,5.5,3.7C61.9,16.6,61.5,17.7,60.7,18.2z'
                  fill='#FE9803'
                />
              </g>
            </g>
            <g id='Print' />
            <g id='Save' />
            <g id='Folder' />
            <g id='Search' />
            <g id='User' />
            <g id='Pin' />
            <g id='Calendar' />
            <g id='Gallery' />
            <g id='time' />
            <g id='Pin_1_' />
            <g id='Setting' />
            <g id='Player' />
            <g id='Lock' />
            <g id='Trash_Can' />
            <g id='Notification' />
            <g id='Record' />
            <g id='Shopping_Bag' />
          </svg>
        </div>
        <div className='flex-70'>
          <h3 className='green font-size-title-1 ellipsis-text overflow-ellipsis whitespace-nowrap font-medium'>
            {job.title}
          </h3>
          <p className='gray-dark m-0 p-0 ellipsis-text'>{job.description}</p>
        </div>
        <div>
          <div className='gray-dark ml-2 cursor-pointer rounded border-2 border-gray-50 p-2 hover:bg-gray-100'>
            <BsBookmark />
          </div>
        </div>
      </div>
      <div className='mt-3 mb-5'>
        <CategoriesInner categories={job.categories} />
      </div>
      <div className='w-100 flex items-center justify-between'>
        <Stars count={job.stars} />
        <div className='flex'>
          <div className='flex items-center space-x-0.5'>
            <BsPatchCheckFill color='#03a9f4' />
            <span className='gray-dark'>Project verified</span>
          </div>
          <div className='ml-4'>
            <span className='font-medium'>Proposals:</span> 10 to 15
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobItem;
