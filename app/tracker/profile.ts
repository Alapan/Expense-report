import { Claims, getSession } from '@auth0/nextjs-auth0';
import 'server-only';

export const getUserProfileInfo = async (): Promise<Claims> => {
  const session = await getSession();

  if (!session) {
    throw new Error('Authentication needed!');
  }

  const { user } = session;
  return user;
}
