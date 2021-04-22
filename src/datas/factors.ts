export const factorDatas = {
  status: "ステータス因子",
  appropriate: "適正因子",
  uniqueSkill: "固有スキル",
  G1: "レース因子",
  skill: "通常因子",
} as const;
export type FactorIdTypes = keyof typeof factorDatas;
export type Factor = {
  id?: string;
  name: string;
  type: FactorIdTypes;
  desc: string;
  star?: 1 | 2 | 3;
  checked?: boolean;
};
export const factors: Factor[] = [
  {
    id: "speed",
    name: "スピード",
    type: "status",
    desc: "スピードが上がる因子です",
  },
  {
    id: "power",
    name: "パワー",
    type: "status",
    desc: "パワーが上がる因子です",
  },
  {
    id: "tyukyori",
    name: "中距離",
    type: "appropriate",
    desc: "中距離が得意になる",
  },
  {
    id: "koitsuiso",
    name: "好意追走",
    type: "skill",
    desc: "",
  },
];
