export async function doFetch(url = "", options = {}) {
  const defaultOptions = {
    headers: {
      "Content-Type": "application/json",
    },
    ...options,
  };

  const response = await fetch(url, defaultOptions);
  return response.json();
}
