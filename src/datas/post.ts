import { keishoUmamusume } from './keishoUmamusume';
import { Support } from './support';

export type Post = {
  id?: number;
  mom: keishoUmamusume;
  grandMom1: keishoUmamusume;
  grandMom2: keishoUmamusume;
  supportId: string;
  support: Support;
  stack: 1 | 2 | 3 | 4;
  level: number;
  trainerId: number;
  name: String;
};

export const posts: Post[] = [
  {
    id: 1,
    mom: {
      umamusumeId: 'mesiromaceen_endofskt',
      umamusume: {
        id: 'tokaiteioh_ beyondthehorizon',
        name: 'トウカイテイオー（ビヨンドザホライズン）',
        imgUrl:
          'https://img.game8.jp/5700654/0f2b1df09ee8c849b9f4c61d5c0051df.png/show',
      },
      factorIds: {
        speed: true,
      },
      factors: [
        {
          id: 'speed',
          name: 'スピード',
          type: 'status',
          desc: 'スピードが上がる因子です',
          star: 2,
        },
        {
          id: 'power',
          name: 'パワー',
          type: 'status',
          desc: 'パワーが上がる因子です',
          star: 2,
        },
        {
          id: 'tyukyori',
          name: '中距離',
          type: 'appropriate',
          desc: '中距離が得意になる',
          star: 2,
        },
        {
          id: 'koitsuiso',
          name: '好意追走',
          type: 'skill',
          desc: '',
          star: 2,
        },
        {
          id: 'teioh_step',
          name: '究極テイオーステップ',
          type: 'uniqueSkill',
          desc: '',
          star: 3,
        },
      ],
    },
    grandMom1: {
      umamusumeId: 'mesiromaceen_endofskt',
      umamusume: {
        id: 'mesiromaceen_endofskt',
        name: 'メジロマックイーン（エンドオブスカイ）',
        imgUrl:
          'https://img.game8.jp/5700653/5302926d33c34f2aa38202e14c5fddef.png/original',
      },
      factorIds: {
        speed: true,
      },
      factors: [
        {
          id: 'speed',
          name: 'スピード',
          type: 'status',
          desc: 'スピードが上がる因子です',
          star: 2,
        },
      ],
    },
    grandMom2: {
      umamusumeId: 'mesiromaceen_endofskt',
      umamusume: {
        id: 'mesiromaceen_endofskt',
        name: 'メジロマックイーン（エンドオブスカイ）',
        imgUrl:
          'https://img.game8.jp/5700653/5302926d33c34f2aa38202e14c5fddef.png/original',
      },
      factorIds: {
        speed: true,
      },
      factors: [
        {
          id: 'speed',
          name: 'スピード',
          type: 'status',
          desc: 'スピードが上がる因子です',
          star: 2,
        },
        {
          id: 'power',
          name: 'パワー',
          type: 'status',
          desc: 'パワーが上がる因子です',
          star: 2,
        },
        {
          id: 'tyukyori',
          name: '中距離',
          type: 'appropriate',
          desc: '中距離が得意になる',
          star: 2,
        },
        {
          id: 'koitsuiso',
          name: '好意追走',
          type: 'skill',
          desc: '',
          star: 2,
        },
      ],
    },
    supportId: 'kitasan_black',
    support: {
      id: 'kitasan_brack',
      name: 'キタサンブラック',
      imgUrl:
        'https://img.game8.jp/5701687/8216c22081b5d75ce8b565ee5f7d0efd.png/original',
    },
    stack: 4,
    level: 50,
    trainerId: 111111111,
    name: 'トレーナーさん',
  },
  {
    id: 2,
    mom: {
      umamusumeId: 'mesiromaceen_endofskt',
      umamusume: {
        id: 'mesiromaceen_endofskt',
        name: 'メジロマックイーン（エンドオブスカイ）',
        imgUrl:
          'https://img.game8.jp/5700653/5302926d33c34f2aa38202e14c5fddef.png/original',
      },
      factorIds: {
        speed: true,
      },
      factors: [
        {
          id: 'speed',
          name: 'スピード',
          type: 'status',
          desc: 'スピードが上がる因子です',
          star: 3,
        },
      ],
    },
    grandMom1: {
      umamusumeId: 'mesiromaceen_endofskt',
      umamusume: {
        id: 'mesiromaceen_endofskt',
        name: 'メジロマックイーン（エンドオブスカイ）',
        imgUrl:
          'https://img.game8.jp/5700653/5302926d33c34f2aa38202e14c5fddef.png/original',
      },
      factorIds: {
        speed: true,
      },
      factors: [
        {
          id: 'speed',
          name: 'スピード',
          type: 'status',
          desc: 'スピードが上がる因子です',
          star: 3,
        },
      ],
    },
    grandMom2: {
      umamusumeId: 'mesiromaceen_endofskt',
      umamusume: {
        id: 'tokaiteioh_ beyondthehorizon',
        name: 'トウカイテイオー（ビヨンドザホライズン）',
        imgUrl:
          'https://img.game8.jp/5700654/0f2b1df09ee8c849b9f4c61d5c0051df.png/show',
      },
      factorIds: {
        speed: true,
      },
      factors: [
        {
          id: 'speed',
          name: 'スピード',
          type: 'status',
          desc: 'スピードが上がる因子です',
          star: 2,
        },
        {
          id: 'power',
          name: 'パワー',
          type: 'status',
          desc: 'パワーが上がる因子です',
          star: 2,
        },
        {
          id: 'tyukyori',
          name: '中距離',
          type: 'appropriate',
          desc: '中距離が得意になる',
          star: 2,
        },
        {
          id: 'koitsuiso',
          name: '好意追走',
          type: 'skill',
          desc: '',
          star: 2,
        },
      ],
    },
    supportId: 'kitasan_black',
    support: {
      id: 'kitasan_brack',
      name: 'キタサンブラック',
      imgUrl:
        'https://img.game8.jp/5701687/8216c22081b5d75ce8b565ee5f7d0efd.png/original',
    },
    stack: 4,
    level: 50,
    trainerId: 111111111,
    name: 'おはなさん',
  },
];
