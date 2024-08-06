import { URL as BASEURL } from "../../constants";
import { generateUserDataDetails } from "../../utilities/generateUserDataDetails";
import { Payload } from "./UserPage";

export const allUserDataByUserId = (payload: Payload) => {
  return {
    URL: `${BASEURL}/api/v1/user/getUserByUserId?userId=${payload.userId}&dataType=${payload.dataType}`,
    requestOption: generateUserDataDetails(payload, "GET"),
  };
};
