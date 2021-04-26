import firebase from "firebase/app";
import { keishoUmamusume } from "./keishoUmamusume";
import { Support } from "./support";

export type Post = {
  mom: keishoUmamusume;
  grandMom1: keishoUmamusume;
  grandMom2: keishoUmamusume;
  supportId: string;
  support: Support;
  stack: 1 | 2 | 3 | 4;
  level: number;
  trainerId: string;
  name: string;
  updatedAt?: firebase.firestore.FieldValue | Date;
};

export const moms = ["mom", "grandMom1", "grandMom2"] as const;
export type Moms = typeof moms[number];
export const initialPost: Post = {
  mom: {
    umamusumeId: "undefined",
    umamusume: {
      id: "undefined",
      name: "指定なし",
    },
    factorIds: {
      status: undefined,
      appropriate: undefined,
      uniqueSkill: undefined,
      G1: [],
      skill: [],
    },
    factors: {
      status: undefined,
      appropriate: undefined,
      uniqueSkill: undefined,
      G1: [],
      skill: [],
    },
  },
  grandMom1: {
    umamusumeId: "undefined",
    umamusume: {
      id: "undefined",
      name: "指定なし",
    },
    factorIds: {
      status: undefined,
      appropriate: undefined,
      uniqueSkill: undefined,
      G1: [],
      skill: [],
    },
    factors: {
      status: undefined,
      appropriate: undefined,
      uniqueSkill: undefined,
      G1: [],
      skill: [],
    },
  },
  grandMom2: {
    umamusumeId: "undefined",
    umamusume: {
      id: "undefined",
      name: "指定なし",
    },
    factorIds: {
      status: undefined,
      appropriate: undefined,
      uniqueSkill: undefined,
      G1: [],
      skill: [],
    },
    factors: {
      status: undefined,
      appropriate: undefined,
      uniqueSkill: undefined,
      G1: [],
      skill: [],
    },
  },
  supportId: "undefined",
  support: {
    id: "undefined",
    name: "未選択",
  },
  stack: 4,
  level: 50,
  trainerId: "",
  name: "トレーナーちゃん",
};
export const posts: Post[] = [
  {
    mom: {
      umamusumeId: "undefined",
      umamusume: {
        id: "undefined",
        name: "指定なし",
      },
      factorIds: {
        status: undefined,
        appropriate: undefined,
        uniqueSkill: undefined,
        G1: [],
        skill: [],
      },
      factors: {
        status: undefined,
        appropriate: undefined,
        uniqueSkill: undefined,
        G1: [],
        skill: [],
      },
    },
    grandMom1: {
      umamusumeId: "undefined",
      umamusume: {
        id: "undefined",
        name: "指定なし",
      },
      factorIds: {
        status: undefined,
        appropriate: undefined,
        uniqueSkill: undefined,
        G1: [],
        skill: [],
      },
      factors: {
        status: undefined,
        appropriate: undefined,
        uniqueSkill: undefined,
        G1: [],
        skill: [],
      },
    },
    grandMom2: {
      umamusumeId: "undefined",
      umamusume: {
        id: "undefined",
        name: "指定なし",
      },
      factorIds: {
        status: undefined,
        appropriate: undefined,
        uniqueSkill: undefined,
        G1: [],
        skill: [],
      },
      factors: {
        status: undefined,
        appropriate: undefined,
        uniqueSkill: undefined,
        G1: [],
        skill: [],
      },
    },
    supportId: "undefined",
    support: {
      id: "undefined",
      name: "未選択",
    },
    stack: 1,
    level: 1,
    trainerId: "",
    name: "トレーナーちゃん",
  },
  {
    mom: {
      umamusumeId: "mesiromaceen_endofskt",
      umamusume: {
        id: "mesiromaceen_endofskt",
        name: "メジロマックイーン（エンドオブスカイ）",
      },
      factorIds: {
        status: "speed",
        appropriate: undefined,
        uniqueSkill: undefined,
        G1: [],
        skill: [],
      },
      factors: {
        status: {
          id: "speed",
          name: "スピード",
          type: "status",
          desc: "スピードが上がる因子です",
          star: 3,
        },
        appropriate: undefined,
        uniqueSkill: undefined,
        G1: [],
        skill: [],
      },
    },
    grandMom1: {
      umamusumeId: "mesiromaceen_endofskt",
      umamusume: {
        id: "mesiromaceen_endofskt",
        name: "メジロマックイーン（エンドオブスカイ）",
      },
      factorIds: {
        status: "speed",
        appropriate: undefined,
        uniqueSkill: undefined,
        G1: [],
        skill: [],
      },
      factors: {
        status: {
          id: "speed",
          name: "スピード",
          type: "status",
          desc: "スピードが上がる因子です",
        },
        appropriate: undefined,
        uniqueSkill: undefined,
        G1: [],
        skill: [],
      },
    },
    grandMom2: {
      umamusumeId: "mesiromaceen_endofskt",
      umamusume: {
        id: "tokaiteioh_ beyondthehorizon",
        name: "トウカイテイオー（ビヨンドザホライズン）",
      },
      factorIds: {
        status: "speed",
        appropriate: "tyukyori",
        uniqueSkill: undefined,
        G1: [],
        skill: ["koitsuiso"],
      },
      factors: {
        status: {
          id: "speed",
          name: "スピード",
          type: "status",
          desc: "スピードが上がる因子です",
          star: 3,
        },
        appropriate: {
          id: "tyukyori",
          name: "中距離",
          type: "appropriate",
          desc: "中距離が得意になる",
        },
        uniqueSkill: undefined,
        G1: [],
        skill: [
          {
            id: "koitsuiso",
            name: "好意追走",
            type: "skill",
            desc: "",
          },
        ],
      },
    },
    supportId: "kitasan_black",
    support: {
      id: "kitasan_brack",
      name: "キタサンブラック",
    },
    stack: 4,
    level: 50,
    trainerId: "111111111",
    name: "おはなさん",
  },
];
