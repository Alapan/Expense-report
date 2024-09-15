import { Claims, getSession } from '@auth0/nextjs-auth0';
import 'server-only';

export const getUserProfileInfo = async (): Promise<Claims | null> => {
  const session = await getSession();

  if (!session) {
    return null;
  }

  const { user } = session;
  return user;
};
