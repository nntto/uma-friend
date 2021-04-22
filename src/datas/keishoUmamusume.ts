import { Umamusume, Factor } from "datas";

export type keishoUmamusume = {
  umamusumeId: string;
  umamusume: Umamusume;
  factorIdMap: {
    [key: string]: true;
  };
  factorIds: {
    status: string;
    appropriate: string;
    uniqueSkill: string;
    G1: string[];
    skill: string[];
  };
  factors: {
    status: Factor;
    appropriate: Factor;
    uniqueSkill: Factor;
    G1: Factor[];
    skill: Factor[];
  };
};
