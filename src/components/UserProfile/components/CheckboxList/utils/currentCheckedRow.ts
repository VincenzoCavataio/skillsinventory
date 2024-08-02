export const currentCheckedSkillRow = (skill: string) => {
  const SKILL_NAME = skill.split(" Liv ")[0];
  const SKILL_LEVEL = skill.split(" Liv ")[1].split(" exp ")[0].trim();
  const SKILL_EXP = skill.split(" exp ")[1].split(" note ")[0].trim();
  const SKILL_ID = skill.split(" id ")[1].trim();
  const SKILL_NOTE = skill.split(" note ")[1].split(" id ")[0].trim();

  const CHECKED_SKILL = {
    name: SKILL_NAME,
    level: SKILL_LEVEL,
    exp: SKILL_EXP,
    id: SKILL_ID,
    note: SKILL_NOTE,
  };

  return CHECKED_SKILL;
};
