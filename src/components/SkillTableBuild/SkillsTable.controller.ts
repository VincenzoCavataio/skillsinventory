import { GenerateTableRequest } from "../../utilities/generateTableRequest/types";
import { generateTableRequest } from "../../utilities/generateTableRequest";
import { URL as BASEURL } from "../../constants";

const URL = `${BASEURL}/api/v1/cv-record/getAllWithFilters`;

// TODO: il payload deve stare qui dentro!
export const allTabledata = (payload: GenerateTableRequest) => ({
  URL,
  requestOption: generateTableRequest(payload),
});
