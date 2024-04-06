import { BASE_URL } from "../../constants";
import { GenerateTableRequest } from "../../utilities/generateTableRequest/types";
import { generateTableRequest } from "../../utilities/generateTableRequest";

const URL = `${BASE_URL}/api/v1/cv-record/getAllWithFilters`;

// TODO: il payload deve stare qui dentro!
export const allTabledata = (payload: GenerateTableRequest) => ({
  URL,
  requestOption: generateTableRequest(payload),
});
