import { useEffect, useRef, useState } from "react";
import axios from "axios";
import { Metadata } from "./types";
import { t } from "i18next";
import { refreshAccessToken } from "../generateLogin";

const useApi = ({ URL, requestOption }: Metadata) => {
  const [data, setData] = useState<Promise<void>>();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<unknown>();
  const countRef = useRef(false);
  const token = localStorage.getItem("authToken");

  //TODO: Duplicated code. To be fixed later
  useEffect(() => {
    const fetchData = async () => {
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
        // @ts-expect-error: Unreachable code error
        if (e.response.status === 500) {
          setData(
            refreshAccessToken(
              axios({
                method: requestOption.method,
                url: URL,
                headers: {
                  "Content-Type": "application/json",
                  Authorization: `Bearer ${token}`,
                },
                data: requestOption.body,
              })
            )
          );
          setLoading(false);
        }
        console.error(t("error.responseError"), e);
        setError(e);
        setLoading(false);
      }
    };

    fetchData();
  }, [URL, countRef, requestOption.body, requestOption.method, token]);

  return { data, loading, error };
};

export default useApi;
