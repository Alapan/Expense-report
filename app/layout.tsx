import { UserProvider } from '@auth0/nextjs-auth0/client';
import { Metadata } from 'next';
import { ReactNode } from 'react';
import NavigationBar from './components/NavigationBar';
import { User } from './types';
import UserProfileDropdown from './components/UserProfileDropdown';
import { getUserProfileInfo } from './utils/getUserProfileInfo';
import './globals.css';

export default async function RootProvider(
  {
    children,
  }: Readonly<{
    children: ReactNode,
  }>
) {
  const user = await getUserProfileInfo() as User;
  return (
    <html lang='en'>
      <body>
        <UserProvider>
          {
            user ? (
              <NavigationBar
                user={user}
                UserProfileDropdown={<UserProfileDropdown user={user}/>}
              />
            ): null
          }
          {children}
        </UserProvider>
      </body>
    </html>
  );
}

export const metadata: Metadata = {
  title: 'My Expense Reports'
}
