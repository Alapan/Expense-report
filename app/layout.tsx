import { UserProvider } from '@auth0/nextjs-auth0/client';
import './globals.css';
import { Metadata } from 'next';
import { ReactNode } from 'react';

export default function RootProvider(
  {
    children,
  }: Readonly<{
    children: ReactNode,
  }>
) {
  return (
    <html lang='en'>
      <body>
        <UserProvider>
          {children}
        </UserProvider>
      </body>
    </html>
  );
}

export const metadata: Metadata = {
  title: 'My Expense Reports'
}
