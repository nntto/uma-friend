import { Umamusume } from "datas/umamusume";
import { Factor } from "datas/factors";

export type keishoUmamusume = {
  umamusumeId: string;
  umamusume: Umamusume;
  factorIdMap: {
    [key: string]: true;
  };
  factorIds: string[];
  factors: Factor[];
};
