import { jwtDecode } from "jwt-decode";

type Props = {
  token: string;
};

/** Utility to check if one of the token is expired */
export const isTokenExpired = ({ token }: Props) => {
  /** Decode the token informations*/
  const decodedRefreshToken = jwtDecode(token);

  /** Get the expiration time of the token */
  const expirationTime = new Date(decodedRefreshToken.exp! * 1000);

  /** Get the current time */
  const currentTime = new Date();

  /** Check if the token is expired */
  const isExpired = expirationTime.getTime() < currentTime.getTime();

  return isExpired;
};
