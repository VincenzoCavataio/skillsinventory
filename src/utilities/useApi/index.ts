import { useCallback, useEffect, useRef, useState } from "react";
import axios from "axios";
import { Metadata } from "./types";
import { t } from "i18next";
import { URL } from "../../constants";
const ENDPOINT_REFRESHTOKEN = `${URL}/api/v1/user/refreshToken`;

const useApi = ({ URL, requestOption }: Metadata) => {
  const [data, setData] = useState(); // Modificato da Promise<void> a any per la flessibilità
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<unknown>();
  const countRef = useRef(false);
  const token = localStorage.getItem("authToken");

  const refreshAccessToken = useCallback(async () => {
    const refreshToken = localStorage.getItem("refreshToken");

    try {
      const response = await axios.post(
        ENDPOINT_REFRESHTOKEN,
        { refreshToken },
        {
          headers: { "Content-Type": "application/json" },
        }
      );
      const newToken = response.data.token;
      localStorage.setItem("authToken", newToken);
      return newToken;
    } catch (e) {
      console.error(t("common.sessionExpired"), e);
      // Eventuale logica di gestione dell'errore, come il reindirizzamento alla pagina di login
      return null;
    }
  }, []);

  const fetchData = useCallback(
    async (token: string) => {
      try {
        const response = await axios({
          method: requestOption.method,
          url: URL,
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          data: requestOption.body,
        });
        setData(response.data);
        setLoading(false);
      } catch (e) {
        if (
          e.response &&
          (e.response.status === 401 || e.response.status === 403)
        ) {
          const newToken = await refreshAccessToken();
          if (newToken) {
            return fetchData(newToken);
          }
        } else {
          console.error(t("error.responseError"), e);
          setError(e);
          setLoading(false);
        }
      }
    },
    [URL, requestOption.method, requestOption.body, refreshAccessToken]
  );

  useEffect(() => {
    fetchData(token);
  }, [
    URL,
    countRef,
    requestOption.body,
    requestOption.method,
    token,
    fetchData,
  ]);

  return { data, loading, error };
};

export default useApi;
