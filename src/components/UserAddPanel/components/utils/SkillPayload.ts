import { CheckedSkill } from "../../../../redux/types";

export const SkillPayload = (skills: CheckedSkill[]) => {
  return skills
    .map((skill) => {
      const id = skill.id || "0";
      const level = skill.level;
      const exp = skill.exp;
      const note = skill.note ? skill.note : "";
      return `${skill.name}^§${id}**${level}§£${exp}£§${note};u|`;
    })
    .join("");
};
