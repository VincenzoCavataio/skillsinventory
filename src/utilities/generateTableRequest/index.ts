import { GenerateTableRequest } from "./types";

export const generateTableRequest = (
  payload: GenerateTableRequest,
  method = "POST"
) => {
  const PAYLOAD = payload;

  return {
    method,
    body: JSON.stringify(PAYLOAD),
  };
};
