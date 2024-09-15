import { NextPage } from 'next';
import Image from 'next/image';
import { getUserProfileInfo } from '@/utils/getUserProfileInfo';
import { User } from '@/types';

const Page: NextPage = async () => {
  const user = (await getUserProfileInfo()) as User;
  return (
    <div className="mx-5 my-20">
      <div className="text-3xl mb-10 font-medium">User Profile</div>
      <div className="grid flex-row grid-cols-4 grid-rows-4 items-center h-80">
        <div className="row-start-1 row-span-1 col-start-1 col-span-1">
          Name
        </div>
        <div className="row-start-1 row-span-1 col-start-2 col-span-3">
          {user.name}
        </div>
        {user.nickname && (
          <>
            <div className="row-start-2 row-span-1 col-start-1 col-span-1">
              Nickname
            </div>
            <div className="row-start-2 row-span-1 col-start-2 col-span-3">
              {user.nickname}
            </div>
          </>
        )}
        <div className="row-start-3 row-span-1 col-start-1 col-span-1">
          Profile Picture
        </div>
        <div className="row-start-3 row-span-1 col-start-2 col-span-3">
          <Image
            src={user.picture}
            alt="User profile picture"
            width={100}
            height={100}
          />
        </div>
        <div className="row-start-4 row-span-1 col-start-1 col-span-1">
          Email
        </div>
        <div className="row-start-4 row-span-1 col-start-2 col-span-3">
          {user.email}
        </div>
      </div>
    </div>
  );
};

export default Page;
