import { useForm } from "react-hook-form";
import { moms } from "datas";
import SelectFactors from "./Form/SelectFactors";
import SelectWithImg from "./Form/SelectWithImg";
import InputText from "./Form/InputText";
import SelectValue from "./Form/SelectValue";
import useStyles from "./style";

export default () => {
  const { handleSubmit, control, watch } = useForm();
  const classes = useStyles();
  const onSubmit = (data: any) => console.log(data);
  const headlines = {
    mom: "代表ウマ娘",
    grandMom1: "継承元1",
    grandMom2: "継承元2",
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)} className={classes.form}>
      <InputText control={control} name="name" id="name" label="トレーナー名" />
      <InputText
        control={control}
        name="trainerId"
        id="trainerId"
        label="トレーナーID"
      />
      <SelectValue
        control={control}
        name="stack"
        id="stack"
        label="凸"
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
      <SelectWithImg control={control} type="support" />

      {moms.map((momId) => (
        <>
          <p>{headlines[momId]}</p>
          <SelectWithImg control={control} momId={momId} type="umamusume" />
          <SelectFactors control={control} momId={momId} watch={watch} />
        </>
      ))}
      <input type="submit" />
    </form>
  );
};
