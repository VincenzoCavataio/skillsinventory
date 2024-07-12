import { URL } from "../../constants";
const ENDPOINT_REFRESHTOKEN = `${URL}/api/v1/user/refreshToken`;
import { t } from "i18next";
export async function refreshAccessToken() {
  const refreshToken = localStorage.getItem("refreshToken");

  const response = await fetch(ENDPOINT_REFRESHTOKEN, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ refreshToken }),
  });

  if (!response.ok) {
    // Gestire l'errore se il refresh token non è valido
    alert(t("common.sessionExpired"));
    // Possibile reindirizzamento alla pagina di login
    return null;
  }

  const { token } = await response.json();
  localStorage.setItem("authToken", token);

  return token;
}
