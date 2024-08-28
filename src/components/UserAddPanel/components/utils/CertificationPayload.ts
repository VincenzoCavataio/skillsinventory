import { CheckedCert } from "../../../../redux/types";

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
//{"user_id":"10420","wordsList":"Testing Certificate^§0**TestingCode§£1£§Testing Issuer&$2024-08-11$&2024-08-31|CERTIFICATO TEST^§101**2 CODICE TEST§£1£§2 EMITTENTE TEST&$2024-08-08$&2024-09-03|"}
//{"user_id":"10420","wordsList":"Testing Certificate^§0**TestingCode§£1£§Testing Issuer&$2024-08-11$&2024-08-31|CERTIFICATO TEST^§101**2 CODICE TEST§£1£§2 EMITTENTE TEST&$2024-08-08$&2024-09-03|"}
