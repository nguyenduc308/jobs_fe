import * as React from 'react';

import Default from '@/components/layout/Default';
import Seo from '@/components/Seo';
import FilterHeading from '@/components/filter-heading/FilterHeading';
import JobItem from '@/components/jobs/JobItem';
import { IJobItem } from '@/interfaces/Job';
import JobsumaryDetail from '@/components/jobs/JobsumaryDetail';
import { useState } from 'react';
import ProfileVertical from '@/components/profile/ProfileVertical';
import { jobs as j } from '../../services/fake-data';

export default function JobsIndex() {
  const jobs: IJobItem[] = j;
  const [currentJob, setCurrentJob] = useState(jobs[0]);
  const [currentClient, setCurrentClient] = useState(jobs[0].client);
  const changeCurrentJob = (index: number) => {
    setCurrentJob(jobs[index]);
    setCurrentClient(jobs[index].client);
  };

  return (
    <>
      <Seo templateTitle='Home' />
      <Default>
        <div className='relative flex'>
          <div className='flex-30'>
            <div className='w-100 flex flex-wrap'>
              <div className='list'>
                <div className='flex-100 mb-2'>
                  <FilterHeading />
                </div>
                <div>
                  {jobs.map((job, index) => {
                    return (
                      <div
                        key={job.id}
                        className='mb-3'
                        onClick={() => changeCurrentJob(index)}
                      >
                        <JobItem job={job} />
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
          <div className='flex-70 sticky top-5 -z-50 flex self-start'>
            <div className='flex-80 pl-2'>
              <JobsumaryDetail job={currentJob} />
            </div>
            <div className='flex-20 ml-2'>
              <div>
                <ProfileVertical profile={currentClient} />
              </div>
            </div>
          </div>
        </div>
      </Default>
    </>
  );
}
