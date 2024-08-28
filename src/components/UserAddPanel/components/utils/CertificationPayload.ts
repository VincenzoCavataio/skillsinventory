import { CheckedCert } from "../../../../redux/types";

/** Converts an array of certifications into a formatted string payload. */
export const CertificationPayload = (certifications: CheckedCert[]) => {
  return certifications
    .map((certification) => {
      const id = certification.id || "0";
      const issuer = certification.issuer;
      const code = certification.code;
      const releaseDate = certification.releaseDate;
      const expDate = certification.expDate;
      const it = certification.it;
      const name = certification.name;
      return `${name}^§${id}**${code}§£${it}£§${issuer}&$${releaseDate}$&${expDate}|`;
    })
    .join("");
};
