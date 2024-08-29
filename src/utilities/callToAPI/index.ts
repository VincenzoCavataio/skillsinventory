import axios from "axios";
import { URL as BASEURL } from "../../constants";
import { getRefreshToken } from "../useApi/getRefreshToken";

/** Generic function to make a call to API */
export const callToAPI = ({
  endpoint,
  payload,
  method,
  reload,
}: {
  endpoint: string;
  payload: Record<string, unknown>;
  method: "GET" | "POST" | "PUT" | "DELETE";
  reload?: boolean;
}) => {
  /** Make a call to API */
  const fetchData = async () => {
    let currentToken = localStorage.getItem("authToken");
    const currentRefreshToken = localStorage.getItem("refreshToken");

    /** Build URL */
    const URL = `${BASEURL}${endpoint}`;

    /** Get a new token if the current one is expired */
    if (currentToken && currentRefreshToken) {
      await getRefreshToken({ currentToken, currentRefreshToken });
      currentToken = localStorage.getItem("authToken");
    }

    /** Make a call to API */
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
      if (reload) {
        window.location.reload();
      }
    } catch (e) {
      console.error(e);
    }
  };

  /** Call the fetchData function */
  fetchData();
};
