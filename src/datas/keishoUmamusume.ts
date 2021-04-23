import { Umamusume, Factor } from "datas";

export type keishoUmamusume = {
  umamusumeId: string;
  umamusume: Umamusume;
  factorIds: {
    status: string | undefined;
    appropriate: string | undefined;
    uniqueSkill: string | undefined;
    G1: string[];
    skill: string[];
  };
  factors: {
    status: Factor | undefined;
    appropriate: Factor | undefined;
    uniqueSkill: Factor | undefined;
    G1: Factor[];
    skill: Factor[];
  };
};
