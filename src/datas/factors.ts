export type Factor = {
  id?: string;
  name: string;
  type: "status" | "appropriate" | "uniqueSkill" | "G1" | "skill";
  desc: string;
  star?: 1 | 2 | 3;
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
