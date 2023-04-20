import { client } from './axios';

export const fetcher = async (url: string) => {
  const response = await client.get(url);
  return response.data;
};
