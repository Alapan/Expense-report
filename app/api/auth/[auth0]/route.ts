import { Session, handleAuth, handleCallback, handleLogout } from '@auth0/nextjs-auth0';
import { NextRequest } from 'next/server';
import { handleLogin } from '@auth0/nextjs-auth0/edge';

import knexClient from '@/db/knexClient';

const afterCallback = async (req: NextRequest, session: Session, state: any) => {
  const { email, name, picture } = session.user;
  try {
    const user = await knexClient('useraccount')
      .where({ email })
      .select('id')
      .first();
    if (!user) {
      await knexClient('useraccount').insert({ email, name, picture });
    }
  } catch(error) {
    console.error(`Error when inserting user ${email}: `, error);
  }
  return session;
}

export const GET = handleAuth({
  callback: handleCallback({ afterCallback }),
  login: handleLogin({
    returnTo: '/tracker'
  }),
  signup: handleLogin({
    authorizationParams: {
      screen_hint: 'signup',
    },
    returnTo: '/tracker',
  }),
  logout: handleLogout({
    returnTo: '/',
  }),
});
