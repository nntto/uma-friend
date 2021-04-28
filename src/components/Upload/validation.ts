export const name = {
  maxLength: {
    value: 100,
    message: "ユーザー名は100文字以内で入力してください。",
  },
};

export const trainerId = {
  required: { value: true, message: "フレンドコードは必ず入力してください。" },
  pattern: {
    value: /^[0-9]+$/,
    message: "数字以外の文字を入力しないでください。",
  },
  minLength: { value: 9, message: "文字が少なすぎます。" },
  maxLength: {
    value: 9,
    message: "文字が多すぎます。",
  },
};

export const factors = {
  required: { value: true, message: "は必ず入力してください。" },
};

export const support = {
  required: { value: true, message: "サポートカードは必ず選択してください。" },
};

export const umamusume = {
  required: { value: true, message: "ウマ娘は必ず選択してください。" },
};
