import NavigationBar from '@/components/NavigationBar';
import { getUserProfileInfo } from './profile';
import { User } from '@/types';
import UserProfileDropdown from '@/components/UserProfileDropdown';

const Layout = async ({ children }: { children: React.ReactNode }) => {
  const user = await getUserProfileInfo() as User;

  return (
    <>
      <NavigationBar
        user={user}
        UserProfileDropdown={<UserProfileDropdown user={user}/>}
      />
      {children}
    </>
  );
};

export default Layout;
