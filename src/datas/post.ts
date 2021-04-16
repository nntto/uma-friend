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
  createdAt?: Date;
  updatedAt?: Date;
};

export const initialPost: Post = {
  mom: {
    umamusumeId: "undefined",
    umamusume: {
      id: "undefined",
      name: "指定なし",
      imgUrl:
        "https://firebasestorage.googleapis.com/v0/b/uma-friend.appspot.com/o/umamusume%2Fundefined.png?alt=media&token=d99c7d77-9ca4-4aea-8c99-9608fd7c295c",
    },
    factorIds: {},
    factors: [],
  },
  grandMom1: {
    umamusumeId: "undefined",
    umamusume: {
      id: "undefined",
      name: "指定なし",
      imgUrl:
        "https://firebasestorage.googleapis.com/v0/b/uma-friend.appspot.com/o/umamusume%2Fundefined.png?alt=media&token=d99c7d77-9ca4-4aea-8c99-9608fd7c295c",
    },
    factorIds: {},
    factors: [],
  },
  grandMom2: {
    umamusumeId: "undefined",
    umamusume: {
      id: "undefined",
      name: "指定なし",
      imgUrl:
        "https://firebasestorage.googleapis.com/v0/b/uma-friend.appspot.com/o/umamusume%2Fundefined.png?alt=media&token=d99c7d77-9ca4-4aea-8c99-9608fd7c295c",
    },
    factorIds: {},
    factors: [],
  },
  supportId: "undefined",
  support: {
    id: "undefined",
    name: "未選択",
    imgUrl:
      "https://firebasestorage.googleapis.com/v0/b/uma-friend.appspot.com/o/umamusume%2Fundefined.png?alt=media&token=d99c7d77-9ca4-4aea-8c99-9608fd7c295c",
  },
  stack: 1,
  level: 1,
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
        imgUrl:
          "https://firebasestorage.googleapis.com/v0/b/uma-friend.appspot.com/o/umamusume%2Fundefined.png?alt=media&token=d99c7d77-9ca4-4aea-8c99-9608fd7c295c",
      },
      factorIds: {},
      factors: [],
    },
    grandMom1: {
      umamusumeId: "undefined",
      umamusume: {
        id: "undefined",
        name: "指定なし",
        imgUrl:
          "https://firebasestorage.googleapis.com/v0/b/uma-friend.appspot.com/o/umamusume%2Fundefined.png?alt=media&token=d99c7d77-9ca4-4aea-8c99-9608fd7c295c",
      },
      factorIds: {},
      factors: [],
    },
    grandMom2: {
      umamusumeId: "undefined",
      umamusume: {
        id: "undefined",
        name: "指定なし",
        imgUrl:
          "https://firebasestorage.googleapis.com/v0/b/uma-friend.appspot.com/o/umamusume%2Fundefined.png?alt=media&token=d99c7d77-9ca4-4aea-8c99-9608fd7c295c",
      },
      factorIds: {},
      factors: [],
    },
    supportId: "undefined",
    support: {
      id: "undefined",
      name: "未選択",
      imgUrl:
        "https://firebasestorage.googleapis.com/v0/b/uma-friend.appspot.com/o/umamusume%2Fundefined.png?alt=media&token=d99c7d77-9ca4-4aea-8c99-9608fd7c295c",
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
        imgUrl:
          "https://img.game8.jp/5700653/5302926d33c34f2aa38202e14c5fddef.png/original",
      },
      factorIds: {
        speed: true,
      },
      factors: [
        {
          id: "speed",
          name: "スピード",
          type: "status",
          desc: "スピードが上がる因子です",
          star: 3,
        },
      ],
    },
    grandMom1: {
      umamusumeId: "mesiromaceen_endofskt",
      umamusume: {
        id: "mesiromaceen_endofskt",
        name: "メジロマックイーン（エンドオブスカイ）",
        imgUrl:
          "https://img.game8.jp/5700653/5302926d33c34f2aa38202e14c5fddef.png/original",
      },
      factorIds: {
        speed: true,
      },
      factors: [
        {
          id: "speed",
          name: "スピード",
          type: "status",
          desc: "スピードが上がる因子です",
          star: 3,
        },
      ],
    },
    grandMom2: {
      umamusumeId: "mesiromaceen_endofskt",
      umamusume: {
        id: "tokaiteioh_ beyondthehorizon",
        name: "トウカイテイオー（ビヨンドザホライズン）",
        imgUrl:
          "https://img.game8.jp/5700654/0f2b1df09ee8c849b9f4c61d5c0051df.png/show",
      },
      factorIds: {
        speed: true,
      },
      factors: [
        {
          id: "speed",
          name: "スピード",
          type: "status",
          desc: "スピードが上がる因子です",
          star: 2,
        },
        {
          id: "power",
          name: "パワー",
          type: "status",
          desc: "パワーが上がる因子です",
          star: 2,
        },
        {
          id: "tyukyori",
          name: "中距離",
          type: "appropriate",
          desc: "中距離が得意になる",
          star: 2,
        },
        {
          id: "koitsuiso",
          name: "好意追走",
          type: "skill",
          desc: "",
          star: 2,
        },
      ],
    },
    supportId: "kitasan_black",
    support: {
      id: "kitasan_brack",
      name: "キタサンブラック",
      imgUrl:
        "https://img.game8.jp/5701687/8216c22081b5d75ce8b565ee5f7d0efd.png/original",
    },
    stack: 4,
    level: 50,
    trainerId: "111111111",
    name: "おはなさん",
  },
];
