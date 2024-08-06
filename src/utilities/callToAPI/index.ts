import axios from "axios";
import { URL as BASEURL } from "../../constants";

//TODO: questa gestione non è ottimale, va sistemata però puoi prendere come spunto la chiamata
export const callToAPI = ({
  endpoint,
  payload,
  method,
}: {
  endpoint: string;
  payload: unknown;
  method: "GET" | "POST" | "PUT" | "DELETE";
}) => {
  const fetchData = async () => {
    const token = localStorage.getItem("authToken");
    const URL = `${BASEURL}${endpoint}${payload.id}`;
    try {
      await axios({
        method: method,
        url: URL,
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        data: payload,
      });
    } catch (e) {
      console.error(e);
    }
    // finally {
    //   location.reload();
    // }
  };
  fetchData();
};
