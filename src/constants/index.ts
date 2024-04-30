const BASE_URL = import.meta.env.VITE_BASE_URL;
const BASE_URL_LOCALHOST = import.meta.env.VITE_BASE_URL_LOCALHOST;
const BASE_URL_DEV = import.meta.env.VITE_BASE_URL_DEV;
const ENVIRONMENT = import.meta.env.VITE_ENVIRONMENT;

export const SWITCH_TYPE: Record<string, string> = {
  from: "from",
  to: "to",
  equals: "equals",
  between: "between",
};

const URL_MAPPER: Record<string, string> = {
  dev: BASE_URL_DEV,
  prod: BASE_URL,
  localhost: BASE_URL_LOCALHOST,
};

export const URL = `${URL_MAPPER[ENVIRONMENT]}/api/v1/cv-record`;
