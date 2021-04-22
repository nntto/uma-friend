export const constants = {
  posts: "posts",
  factors: "factors",
  umamusumes: "umamusumes",
  supports: "supportCards",
} as const;

export type constantsKeys = keyof typeof constants;
export type constantValues = typeof constants[keyof typeof constants];
