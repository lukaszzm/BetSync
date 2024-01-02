import { DEFAULT_ERROR_MESSAGE } from "@/constants";

export const getApiError = async (response: Response): Promise<string> => {
  const data = await response.json();
  const error = Array.isArray(data.message) ? data.message[0] : data.message;

  return typeof error === "string" ? error : DEFAULT_ERROR_MESSAGE;
};
