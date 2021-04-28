export const name = {
  maxLength: {
    value: 100,
    message: "ユーザー名は100文字以内で入力してください。",
  },
};

export const trainerId = {
  required: { value: true, message: "トレーナーIDは必ず入力してください。" },
  minLength: { value: 9, message: "トレーナーIDは9文字です" },
  maxLength: {
    value: 9,
    message: "トレーナーIDは9文字です",
  },
};

export const factors = {
  required: { value: true, message: "は必ず入力してください" },
};

export const support = {
  required: { value: true, message: "サポートカードは必ず選択してください" },
};

export const umamusume = {
  required: { value: true, message: "ウマ娘は必ず選択してください" },
};
