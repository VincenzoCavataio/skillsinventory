import { useCallback, useEffect, useRef, useState } from "react";
import axios from "axios";
import { Metadata } from "./types";
import { t } from "i18next";

const useApi = ({ URL, requestOption }: Metadata) => {
  const [data, setData] = useState();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<unknown>();
  const token = useRef(localStorage.getItem("authToken")); // Uso di `useRef` per non scatenare un re-render

  const fetchData = useCallback(async () => {
    try {
      const response = await axios({
        method: requestOption.method,
        url: URL,
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token.current}`,
        },
        data: requestOption.body,
      });
      setData(response.data);
      setLoading(false);
    } catch (e) {
      console.error(t("error.responseError"), e);
      setError(e);
      setLoading(false);
    }
  }, [URL, requestOption.method, requestOption.body]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return { data, loading, error };
};

export default useApi;
