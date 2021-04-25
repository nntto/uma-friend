export type Support = {
  id: string;
  name: string;
  rarity?: "ssr" | "sr" | "r";
  type?: string;
};

export const supports: Support[] = [];
