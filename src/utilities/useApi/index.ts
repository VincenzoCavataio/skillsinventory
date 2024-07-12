// import { useEffect, useRef, useState } from "react";
// import axios from "axios";
// import { Metadata } from "./types";
// import { t } from "i18next";

// const useApi = ({ URL, requestOption }: Metadata) => {
//   const [data, setData] = useState<Promise<void>>();
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState<unknown>();
//   const countRef = useRef(false);
//   const token = localStorage.getItem("authToken");

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await axios({
//           method: requestOption.method,
//           url: URL,
//           headers: {
//             "Content-Type": "application/json",
//             Authorization: `Bearer ${token}`,
//           },
//           data: requestOption.body,
//         });
//         setData(response.data);
//         setLoading(false);
//       } catch (e) {
//         console.error(t("error.responseError"), e);
//         setError(e);
//         setLoading(false);
//       }
//     };

//     fetchData();
//   }, [URL, countRef, requestOption.body, requestOption.method, token]);

//   return { data, loading, error };
// };

// export default useApi;

import { useCallback, useEffect, useRef, useState } from "react";
import axios from "axios";
import { Metadata } from "./types";
import { t } from "i18next";
import { URL } from "../../constants";
const ENDPOINT_REFRESHTOKEN = `${URL}/api/v1/user/refreshToken`;

const useApi = ({ URL, requestOption }: Metadata) => {
  const [data, setData] = useState<Promise<void>>(); // Modificato da Promise<void> a any per la flessibilità
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<unknown>();
  const countRef = useRef(false);
  const token = localStorage.getItem("authToken");

  // const refreshAccessToken = async () => {
  //   const refreshToken = localStorage.getItem("refreshToken");
  //   try {
  //     const response = await axios.post(ENDPOINT_REFRESHTOKEN, { refreshToken }, {
  //       headers: { "Content-Type": "application/json" }
  //     });
  //     const newToken = response.data.token;
  //     localStorage.setItem("authToken", newToken);
  //     return newToken;
  //   } catch (e) {
  //     console.error(t("common.sessionExpired"), e);
  //     // Eventuale logica di gestione dell'errore, come il reindirizzamento alla pagina di login
  //     return null;
  //   }
  // };
  const refreshAccessToken = useCallback(async () => {
    const refreshToken = localStorage.getItem("refreshToken");
    // try {
    //   const response = await axios({
    //     method: requestOption.method,
    //     url: ENDPOINT_REFRESHTOKEN,
    //     headers: {
    //       "Content-Type": "application/json",
    //       Authorization: `Bearer ${refreshToken}`,
    //     },
    //     data: requestOption.body,
    // const newToken = response.data.token;
    // localStorage.setItem("authToken", newToken);
    // return newToken;
    //   });
    //
    // }
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
  // const fetchData = async (token: string) => {
  //   try {
  //     const response = await axios({
  //       method: requestOption.method,
  //       url: URL,
  //       headers: {
  //         "Content-Type": "application/json",
  //         Authorization: `Bearer ${token}`,
  //       },
  //       data: requestOption.body,
  //     });
  //     setData(response.data);
  //     setLoading(false);
  //   } catch (e) {
  //     if (e.response && (e.response.status === 401 || e.response.status === 403)) {
  //       const newToken = await refreshAccessToken();
  //       if (newToken) {
  //         return fetchData(newToken);
  //       }
  //     } else {
  //       console.error(t("error.responseError"), e);
  //       setError(e);
  //       setLoading(false);
  //     }
  //   }
  // };
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

// import { useEffect, useRef, useState } from "react";
// // Assicurati che fetchWithInterceptor sia importato correttamente
// import { Metadata } from "./types";
// import { t } from "i18next";
// import { fetchWithInterceptor, refreshAccessToken } from "../generateLogin";

// const useApi = ({ URL, requestOption }: Metadata) => {
//   const [data, setData] = useState<Promise<void>>(); // Tipo del dato da definire in base alla risposta attesa
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState<unknown>();
//   const countRef = useRef(false);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await fetchWithInterceptor(URL, {
//           method: requestOption.method,
//           headers: {
//             "Content-Type": "application/json",
//           },
//           body: JSON.stringify(requestOption.body),
//         });

//         if (!response.ok) {
//           throw new Error(t("error.responseError"));
//         }

//         const responseData = await response.json();
//         setData(responseData);
//         setLoading(false);
//       } catch (e) {
//         console.error(t("error.responseError"), e);
//         setError(e);
//         setLoading(false);

//         // Gestione dell'errore di autenticazione
//         if (e instanceof Error && e.message === "Token scaduto") {
//           try {
//             await refreshAccessToken(); // Prova a rinfrescare il token
//             // Ripeti la richiesta con il nuovo token
//             const newResponse = await fetchWithInterceptor(URL, {
//               method: requestOption.method,
//               headers: {
//                 "Content-Type": "application/json",
//               },
//               body: JSON.stringify(requestOption.body),
//             });

//             if (!newResponse.ok) {
//               throw new Error(t("error.responseError"));
//             }

//             const newResponseData = await newResponse.json();
//             setData(newResponseData);
//             setLoading(false);
//           } catch (refreshError) {
//             console.error("Errore durante il refresh del token:", refreshError);
//             setError(refreshError);
//           }
//         }
//       }
//     };

//     fetchData();
//   }, [URL, countRef, requestOption.body, requestOption.method]);

//   return { data, loading, error };
// };

// export default useApi;
