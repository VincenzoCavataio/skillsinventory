import axios from "axios";

//TODO: questa gestione non è ottimale, va sistemata però puoi prendere come spunto la chiamata
export const callToLATLONG = ({
  endpoint,
  payload,
  method,
}: {
  endpoint: string;
  payload: { q: string; key: string };
  method: "GET";
}) => {
  const fetchData = async () => {
    const URL = `${endpoint}q=${payload.q}&key=${payload.key}`;
    try {
      await axios({
        method: method,
        url: URL,
      });
    } catch (e) {
      console.error(e);
    }
  };
  fetchData();
};
