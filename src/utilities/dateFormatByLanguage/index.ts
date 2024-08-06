export const dateFormatByLanguage = () => {
  if (localStorage.getItem("language")?.toUpperCase() === "IT") {
    return "DD/MM/YYYY";
  } else {
    return "MM/DD/YYYY";
  }
};
