import { error } from './notifications';

export const handleResponseError = (err: string) => {
  error('Something went wrong');
  // eslint-disable-next-line no-console
  console.log(`ERROR ! : ${err}`);
  // eslint-disable-next-line no-console
  console.error(err);
};
