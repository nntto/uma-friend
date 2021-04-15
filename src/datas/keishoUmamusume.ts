import { Umamusume } from "datas/umamusume";
import { Factor } from "datas/factors";

export type keishoUmamusume = {
  umamusumeId: string;
  umamusume: Umamusume;
  factorIds: {
    [key: string]: true;
  };
  factors: Factor[];
};
