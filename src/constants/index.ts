const BASE_URL_LOCALHOST = import.meta.env.VITE_BASE_URL_LOCALHOST;
const BASE_URL_DEV = import.meta.env.VITE_BASE_URL_DEV;
const BASE_URL_PROD = import.meta.env.VITE_BASE_URL_PROD;
const ENVIRONMENT = import.meta.env.VITE_ENVIRONMENT;

export const SWITCH_TYPE: Record<string, string> = {
  from: "from",
  to: "to",
  equals: "equals",
  between: "between",
};

const URL_MAPPER: Record<string, string> = {
  localhost: BASE_URL_LOCALHOST,
  dev: BASE_URL_DEV,
  prod: BASE_URL_PROD,
};

export const URL = `${URL_MAPPER[ENVIRONMENT]}`;

export const MOCK_USER_DATA: Record<string, Record<string, string>> = {
  generic: {
    fullName: "Joseph Colombo",
    position: "Frontend Developer",
  },
  details: {
    fullName: "Joseph Colombo",
    email: "Joseph.Colombo.96@gmail.com",
    firstEmploymentStartDate: "02-05-2016",
    actualEmploymentStartDate: "04-04-2024",
    privateNumber: "+39 3453048655",
    workNumber: "+39 3453048655",
  },
};

export const MOCK_USER_DATA_ADDRESS: string[] = [
  "Via Giuseppe Giuliani, 1",
  "00185",
  "Milano",
  "Italy",
];

export const PAGES = {
  dashboardPage: "/dashboard",
  userPage: "/user",
  notFoundPage: "/notFound",
};
