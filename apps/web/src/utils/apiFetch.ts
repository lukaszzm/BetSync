export const apiFetch = async (input: RequestInfo, init?: RequestInit) => {
  const apiUrl = process.env.API_URL;

  if (!apiUrl) {
    throw new Error("Environment variable 'API_URL' is not defined");
  }

  return fetch(apiUrl + input, init);
};
