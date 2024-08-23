import axios from "axios";
import { URL as BASEURL } from "../../constants";
import { getRefreshToken } from "../useApi/getRefreshToken";

//TODO: questa gestione non è ottimale, va sistemata però puoi prendere come spunto la chiamata
export const callToAPI = ({
  endpoint,
  payload,
  method,
}: {
  endpoint: string;
  payload: Record<string, unknown>;
  method: "GET" | "POST" | "PUT" | "DELETE";
}) => {
  const fetchData = async () => {
    const currentToken = localStorage.getItem("authToken");
    const currentRefreshToken = localStorage.getItem("refreshToken");

    const URL = `${BASEURL}${endpoint}${payload.id}`;

    if (currentToken && currentRefreshToken) {
      getRefreshToken({ currentToken, currentRefreshToken });
    }
    try {
      await axios({
        method: method,
        url: URL,
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${currentToken}`,
        },
        data: payload,
      });
    } catch (e) {
      console.error(e);
    }
  };
  fetchData();
};
