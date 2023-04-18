export const createSearchParams = (
  baseUrl: string,
  params: Record<string, string | undefined | null>
) => {
  const searchParams = new URLSearchParams();
  Object.entries(params).forEach(([key, value]) => {
    if (value) searchParams.set(key, value);
  });

  return `${baseUrl}?${searchParams.toString()}`;
};
