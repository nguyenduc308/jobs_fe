import { BsPatchCheckFill } from 'react-icons/bs';
import * as React from 'react';
import Stars from '@/components/Stars';
import { IClientProfile } from '@/interfaces/Profile';

export interface ProfileVerticalProps {
  profile: IClientProfile;
}

const ProfileVertical: React.FC<ProfileVerticalProps> = ({ profile }) => {
  return (
    <div className='rounded-md bg-white p-5'>
      <div className='w-100 flex justify-center'>
        <img
          src='images/avatar.jpg'
          width='64px'
          height='64px'
          className='rounded-full'
        />
      </div>
      <div className='mt-4 text-center'>
        <h4>{profile.name}</h4>
        <p className='gray-dark font-medium'>Client</p>
      </div>
      <div className='mt-5'>
        <h5 className='font-bold'>Information</h5>
        {profile.is_payment_verified && (
          <div className='mt-2 flex items-center space-x-1'>
            <BsPatchCheckFill color='#03a9f4' />
            <span className='gray-dark font-small'>Payment verified</span>
          </div>
        )}
        <div className='mt-2'>
          <div className='font-medium'>{profile.stars} of 48 reviews</div>
          <Stars count={profile.stars} />
        </div>
        <div className='mt-2'>
          <div className='font-medium'>
            {profile.project.total} project posted
          </div>
          <span className='gray-dark font-small'>
            {profile.project.success} projects success
          </span>
        </div>
        <div className='mt-2'>
          <span className='gray-dark font-small'>
            Member since Jan 20, 2020
          </span>
        </div>
      </div>
    </div>
  );
};

export default ProfileVertical;
