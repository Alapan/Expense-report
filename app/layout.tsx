import { UserProvider } from '@auth0/nextjs-auth0/client';
import './globals.css';

export default function RootProvider(
  { children, }: Readonly<{children: React.ReactNode}>
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
