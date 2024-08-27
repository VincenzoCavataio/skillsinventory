import axios from "axios";
import { URL as BASE_URL } from "../../constants";
import { isTokenExpired } from "../isTokenExpired/isTokenExpired";

type Props = {
  currentToken: string;
  currentRefreshToken: string;
};

/** Get a new token if the current one is expired */
export const getRefreshToken = async ({
  currentToken,
  currentRefreshToken,
}: Props) => {
  if (currentToken) {
    const ENDPOINT_REFRESHTOKEN = `${BASE_URL}/api/v1/user/refreshToken`;

    /** Check if token is expired */
    const isCurrentTokenExpired = isTokenExpired({ token: currentToken });

    /** If isCurrentTokenExpired is expired get a new one by calling the refresh token endpoint */
    if (isCurrentTokenExpired) {
      await axios(ENDPOINT_REFRESHTOKEN, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        data: JSON.stringify({ refreshToken: currentRefreshToken }),
      })
        .then((data) => {
          const { token, refreshToken, role, id } = data.data;

          /** Update local storage informations about current user */
          localStorage.setItem("authToken", token);
          localStorage.setItem("refreshToken", refreshToken);
          localStorage.setItem("role", role);
          localStorage.setItem("id", id);
        })
        .catch((err) => {
          console.error(err);
        });
    }
  }
};
