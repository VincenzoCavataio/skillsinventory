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
export const currentCheckedEduRow = (edu: string) => {
  const EDU_COURSE = edu.split(" cour ")[1].split(" inst ")[0].trim();
  const EDU_LEVEL = edu.split(" lev ")[1].split(" cour ")[0].trim();
  const EDU_IT = edu.split(" isIt ")[1].split(" isUni ")[0].trim();
  const EDU_ID = edu.split(" lev ")[0].trim();
  const EDU_INSTITUTE = edu.split(" inst ")[1].split(" ycity ")[0].trim();
  const EDU_CITY = edu.split(" ycity ")[1].split(" isIt ")[0].trim();

  const CHECKED_EDU = {
    course: EDU_COURSE,
    level: EDU_LEVEL,
    it: EDU_IT,
    id: EDU_ID,
    institute: EDU_INSTITUTE,
    city: EDU_CITY,
  };

  return CHECKED_EDU;
};
export const currentCheckedCertRow = (cert: string) => {
  const CERT_NAME = cert.split(" name ")[1].split(" isICT ")[0].trim();
  const CERT_ISSUER = cert.split(" issuer ")[1].split(" init_date ")[0].trim();
  const CERT_RELEASE_DATE = cert
    .split(" init_date ")[1]
    .split(" end_date ")[0]
    .trim();
  const CERT_EXP_DATE = cert.split(" end_date ")[1].split(" code ")[0].trim();
  const CERT_IT = cert.split(" isICT ")[1].split(" issuer ")[0].trim();
  const CERT_CODE = cert.split(" code ")[1].trim();
  const CERT_ID = cert.split(" name ")[0];

  const CHECKED_CERT = {
    name: CERT_NAME,
    issuer: CERT_ISSUER,
    it: CERT_IT,
    id: CERT_ID,
    code: CERT_CODE,
    releaseDate: CERT_RELEASE_DATE,
    expDate: CERT_EXP_DATE,
  };

  return CHECKED_CERT;
};
