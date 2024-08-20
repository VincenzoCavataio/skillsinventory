import { Dispatch } from "react";
import { URL } from "../../constants";
import { t } from "i18next";
import { setLoginError } from "../../redux/loginStatus";
import { AnyAction } from "@reduxjs/toolkit";

const ENDPOINT = `${URL}/api/v1/user/login`;
const ENDPOINT_REFRESHTOKEN = `${URL}/api/v1/user/refreshToken`;

export async function login(
  email: string,
  password: string,
  setToken: Dispatch<string>,
  setLoading: Dispatch<boolean>,
  dispatch: Dispatch<AnyAction>
) {
  const loginData = { email, password };

  try {
    setLoading(true);
    const response = await fetch(ENDPOINT, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(loginData),
    });

    if (!response.ok) throw new Error(t("pages.notFound.credentials"));

    const { token, refreshToken, role, id } = await response.json();

    //TODO: probabilmente è più corretto metterli nel session, fabrizio aveva detto che le voleva cross tabs ma bisogna vedere. Prima di fare la modifica assicurarsene
    localStorage.setItem("authToken", token);
    localStorage.setItem("refreshToken", refreshToken);
    localStorage.setItem("role", role);
    localStorage.setItem("id", id);
    setToken(token);

    setLoading(false);
    dispatch(setLoginError({ value: null, label: null, isError: false }));
  } catch (error) {
    if (error instanceof Error) {
      dispatch(
        setLoginError({
          value: error.message,
          label: t("common.loginFail"),
          isError: true,
        })
      );
      setLoading(false);
    } else {
      console.error(error);
    }
  }
}

//TODO: non ancora implementato/testato, da guardare/sistemare.
//TODO: Endpoint per refreshToken: http://dev.skillsinventory.api.nextre.org/api/v1/user/refreshToken
//TODO: Chiamata sarà di tipo post, con body: {refreshToken : $valore}

export const refreshAccessToken = async (): Promise<void> => {
  const refreshTokenFromStorage = localStorage.getItem("refreshToken");
  if (!refreshTokenFromStorage) throw new Error("Nessun refresh token trovato");

  try {
    const response = await fetch(ENDPOINT_REFRESHTOKEN, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ refreshToken: refreshTokenFromStorage }),
    });

    if (!response.ok) throw new Error("Errore durante il refresh del token");

    // Ottieni i nuovi token e altri dati dalla risposta
    const { token, refreshToken, role, id } = await response.json();

    // Calcola il nuovo tempo di scadenza del token in millisecondi

    // Salva i nuovi valori nel localStorage
    localStorage.setItem("authToken", token);
    localStorage.setItem("refreshToken", refreshToken);
    localStorage.setItem("role", role);
    localStorage.setItem("id", id);
  } catch (error) {
    console.error("Errore durante il refresh del token:", error); // Logga l'errore nel caso di fallimento
    throw error; // Rilancia l'errore per gestirlo a livelli superiori
  }
};

export const fetchWithInterceptor = async (
  input: RequestInfo,
  init?: RequestInit
) => {
  const tokenExpirationTime = localStorage.getItem("tokenExpirationTime");

  // Controlla se il token è scaduto
  if (
    tokenExpirationTime &&
    new Date().getTime() > parseInt(tokenExpirationTime)
  ) {
    await refreshAccessToken();
    if (init && init.headers) {
      (init.headers as Record<string, string>)[
        "Authorization"
      ] = `Bearer ${localStorage.getItem("authToken")}`;
    } else {
      init = {
        ...init,
        headers: {
          ...init?.headers,
          Authorization: `Bearer ${localStorage.getItem("authToken")}`,
        },
      };
    }
  }

  return fetch(input, init);
};
