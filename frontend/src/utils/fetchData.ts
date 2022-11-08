export const fetcher = async (
  resource: RequestInfo,
  init?: RequestInit
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
): Promise<any> => {
  const response = await fetch(resource, init);

  if (!response.ok) {
    const errorRes = await response.json();
    const error = new Error(
      errorRes.message ?? 'APIリクエスト中にエラーが発生しました'
    );

    throw error;
  }

  return response.json();
};
