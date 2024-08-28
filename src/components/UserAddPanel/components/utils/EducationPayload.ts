import { CheckedEdu } from "../../../../redux/types";

export const EducationPayload = (educations: CheckedEdu[]) => {
  return educations
    .map((education) => {
      const id = education.id || "0";
      const level = education.level;
      const course = education.course;
      const institute = education.institute;
      const city = education.city;
      const it = education.it;
      return `${course}^§${id}**${level}§£${institute}£§${city}&$0$&${it}|`;
    })
    .join("");
};
