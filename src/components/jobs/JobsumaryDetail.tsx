import { IJobItem } from '@/interfaces/Job';
import CategoriesInner from '@/components/categories/CategoriesInner';
import * as React from 'react';

interface JobsumaryDetailProps {
  job: IJobItem;
}
const JobsumaryDetail: React.FC<JobsumaryDetailProps> = ({ job }) => {
  return (
    <article className='rounded-md bg-white p-5'>
      <div>
        <h2 className='font-size-title-1'>{job.title}</h2>
      </div>
      <div className='job-content'>
        <h4 className='font-small mt-2 mb-2'>Project Overview</h4>
        <div>{job.content}</div>
      </div>
      <div>
        <h4 className='font-small mt-2 mb-2'>Skills and Expertise</h4>
        <CategoriesInner categories={job.categories} />
      </div>
      <div>
        <h4 className='font-small mt-2 mb-2'>Detail Project</h4>
        <div className='flex justify-between'>
          <div>
            <div className='mb-2 font-medium'>Project Length</div>
            <div className='font-bold'>6 months</div>
          </div>
          <div>
            <div className='mb-2 font-medium'>Proposals</div>
            <div className='font-bold'>10</div>
          </div>
          <div>
            <div className='mb-2 font-medium'>Budget</div>
            <div className='font-bold'>200-400$</div>
          </div>
        </div>
      </div>
    </article>
  );
};

export default JobsumaryDetail;
