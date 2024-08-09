enum ENV_TYPE {
  LOCALHOST = "localhost",
  DEV = "dev",
  PROD = "prod",
}

const BASE_URL_LOCALHOST = import.meta.env.VITE_BASE_URL_LOCALHOST;
const BASE_URL_DEV = import.meta.env.VITE_BASE_URL_DEV;
const BASE_URL_PROD = import.meta.env.VITE_BASE_URL_PROD;
const ENVIRONMENT: ENV_TYPE = import.meta.env.VITE_ENVIRONMENT;

/** Mapping of ENV type for URL */
const URL_MAPPER = {
  localhost: BASE_URL_LOCALHOST,
  dev: BASE_URL_DEV,
  prod: BASE_URL_PROD,
};

/** URL used to make API calls */
export const URL = `${URL_MAPPER[ENVIRONMENT]}`;

/** Existing pages in the application */
export const PAGES = {
  dashboardPage: "/",
  userPage: "/user",
  loginPage: "/login",
  notFoundPage: "/notFound",
};

/** Path to male avatar */
export const MALE_AVATAR = "/not-found-male-avatar.png";

/** Path to female avatar */
export const FEMALE_AVATAR = "/not-found-female-avatar.png";

export const HIDDEN = "HIDDEN";
export type HIDDEN_PROP = "HIDDEN";

/** Constant for possible languages */
export const LANGUAGES = [
  { label: "IT", value: "it" },
  { label: "EN", value: "gb" },
  { label: "ES", value: "es" },
];

/** URLs for flags images */
export const FLAG_URLS = {
  it: "https://flagsapi.com/IT/flat/64.png",
  gb: "https://flagsapi.com/GB/flat/64.png",
  es: "https://flagsapi.com/ES/flat/64.png",
};

/** Mapping for wrong name icons. To be fixed when data will be cleaned up */
export const SPECIFIC_SKILL_NAME_MAPPING = {
  "c++": "cplusplus",
  sql: "database",
  "ms-sql": "database",
  "pl-sql": "database",
  "no-sql": "database",
  dbms: "database",
  "react.js": "react",
  "node.js": "nodejs",
  aws: "amazonwebservices",
  web: "chrome",
  ".net": "dotnet",
  adobe: "adobecc",
};
