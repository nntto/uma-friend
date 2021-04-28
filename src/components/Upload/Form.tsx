import { useForm } from "react-hook-form";
import { moms } from "datas";
import { useEffect } from "react";
import { createTypeAliasDeclaration } from "typescript";
import SelectFactors from "./Form/SelectFactors";
import SelectWithImg from "./Form/SelectWithImg";
import InputText from "./Form/InputText";
import SelectValue from "./Form/SelectValue";
import useStyles from "./style";
import * as validation from "./validation";

export default () => {
  const {
    handleSubmit,
    formState: { errors },
    register,
    control,
    watch,
  } = useForm();
  const classes = useStyles();
  const onSubmit = (data: unknown) => {
    console.log(data, errors);
  };
  const headlines = {
    mom: "代表ウマ娘",
    grandMom1: "継承元1",
    grandMom2: "継承元2",
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)} className={classes.form}>
      <button onClick={() => console.log(errors)} type="button">
        button
      </button>
      <InputText
        control={control}
        name="name"
        id="name"
        label="トレーナー名"
        defaultValue="トレーナーちゃん"
        rules={validation.name}
      />
      <InputText
        control={control}
        name="trainerId"
        id="trainerId"
        label="トレーナーID"
        rules={validation.trainerId}
      />
      <SelectValue
        control={control}
        name="stack"
        id="stack"
        label="凸状態"
        values={[...Array(5)].map((_, i) => i)}
        afterText="凸"
        defaultValue={4}
      />
      <SelectValue
        control={control}
        name="level"
        id="level"
        label="レベル"
        values={[...Array(50)].map((_, i) => i + 1)}
        beforeText="Lv."
        defaultValue={50}
      />
      <SelectWithImg
        control={control}
        type="support"
        rules={validation.support}
      />

      {moms.map((momId) => (
        <>
          <p>{headlines[momId]}</p>
          <SelectWithImg
            control={control}
            momId={momId}
            type="umamusume"
            rules={validation.umamusume}
          />
          <SelectFactors
            control={control}
            momId={momId}
            watch={watch}
            rules={validation.factors}
          />
        </>
      ))}
      <input type="submit" />
    </form>
  );
};
