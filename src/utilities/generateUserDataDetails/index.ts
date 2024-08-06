import { GenerateUserDataDetails } from "./types";

export const generateUserDataDetails = (
  { userId, dataType }: GenerateUserDataDetails,
  method = "POST"
) => {
  const PAYLOAD = {
    userId,
    dataType,
  };

  return {
    method,
    body: JSON.stringify(PAYLOAD),
  };
};
