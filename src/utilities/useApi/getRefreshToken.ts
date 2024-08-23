import { jwtDecode } from "jwt-decode";
import { URL as BASE_URL } from "../../constants";
import axios from "axios";

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

    /** Decode Token informations */
    const decodedToken = jwtDecode(currentToken as string);

    /** Expiration token time */
    const expirationTime = new Date(decodedToken.exp! * 1000);

    /** Current time */
    const currentTime = new Date();

    /** If token is expired get a new one by calling the refresh token endpoint */
    if (expirationTime < currentTime) {
      await axios(ENDPOINT_REFRESHTOKEN, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        data: JSON.stringify({ refreshToken: currentRefreshToken }),
      })
        .then((data) => {
          const { token, refreshToken, role, id } = data.data;

          /** Update local storage informations about currnet user */
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
