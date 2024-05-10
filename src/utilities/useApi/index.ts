import { useEffect, useRef, useState } from "react";
import axios from "axios";
import { Metadata } from "./types";
import { t } from "i18next";
import { ResponseElementObjectData } from "../../pages/DashboardPage/types";

const useApi = ({ URL, requestOption }: Metadata) => {
  type Data = {
    final_object?: ResponseElementObjectData[];
  };
  const [data, setData] = useState<Data>();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<unknown>();
  const countRef = useRef(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios({
          method: requestOption.method,
          url: URL,
          headers: {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*",
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJvcmdhZG1pbkBleGFtcGxlLmNvbSIsImlkIjoxMDQ4MiwiYXV0aG9yaXR5IjpbeyJhdXRob3JpdHkiOiJPUkdBRE1JTiJ9XSwicm9sZUxhYmVsIjoiMTEwMTAiLCJvcmdzU3RyaW5nIjoiMiIsImlhdCI6MTcxNTM1MjQ3OSwiZXhwIjoxNzE1MzUzNjc5fQ.44L7rU5kguSRK5VnqArj-_E90OKG4gMcuJC2B44nSlE",
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
    };

    fetchData();
  }, [URL, countRef, requestOption.body, requestOption.method]);

  return { data, loading, error };
};

export default useApi;
