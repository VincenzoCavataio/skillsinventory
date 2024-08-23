import { useCallback, useEffect, useRef, useState } from "react";
import { Metadata } from "./types";
import { t } from "i18next";
import axios from "axios";
import { getRefreshToken } from "./getRefreshToken";

/** Custom hook to make an HTTP request */
const useApi = ({ URL, requestOption }: Metadata) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<unknown>(null);
  const token = localStorage.getItem("authToken");

  /** Get both token and refresh token from local storage */
  const currentToken = useRef(localStorage.getItem("authToken"))
    .current as string;
  const currentRefreshToken = useRef(localStorage.getItem("refreshToken"))
    .current as string;

  /** Make a request to the API */
  const fetchData = useCallback(async () => {
    getRefreshToken({ currentToken, currentRefreshToken });
    setLoading(true);
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
    } catch (e) {
      console.error(t("error.responseError"), e);
      setError(e);
    } finally {
      setLoading(false);
    }
  }, [URL, requestOption.body, requestOption.method, token]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return { data, loading, error };
};

export default useApi;
