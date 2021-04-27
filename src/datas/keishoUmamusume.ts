import { Umamusume, Factor } from "datas";
import { Factors } from "./factors";

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
  factors: Factors;
};
