import { useCallback, useEffect, useState } from "react";
import axios from "axios";
import { Metadata } from "./types";
import { t } from "i18next";
import { getRefreshToken } from "./getRefreshToken";

/** Custom hook to make an HTTP request */
const useApi = ({ URL, requestOption }: Metadata) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<unknown>(null);

  /** Function to update the token and make the API request */
  const fetchData = useCallback(async () => {
    const currentToken = localStorage.getItem("authToken") as string;
    const currentRefreshToken = localStorage.getItem("refreshToken") as string;

    if (currentRefreshToken && currentToken) {
      setLoading(true);
      try {
        /** Wait for the token to be updated */
        await getRefreshToken({ currentToken, currentRefreshToken });

        /** Get the updated token */
        const updatedToken = localStorage.getItem("authToken");

        /** Make the API request */
        const response = await axios({
          method: requestOption.method,
          url: URL,
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${updatedToken}`,
          },
          data: requestOption.body,
        });

        /** Update the data state with the response data */
        setData(response.data);
      } catch (e) {
        console.error(t("error.responseError"), e);
        setError(e);
      } finally {
        setLoading(false);
      }
    }
  }, [URL, requestOption.method, requestOption.body]);

  /*** Call the fetchData function when the component mounts */
  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return { data, loading, error };
};

export default useApi;
