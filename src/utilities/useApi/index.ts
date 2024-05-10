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
