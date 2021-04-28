import { useForm } from "react-hook-form";
import { moms, Post } from "datas";
import { upload } from "functions";
import { Button, Snackbar } from "@material-ui/core";
import { Alert } from "@material-ui/lab";
import { useState } from "react";
import SelectFactors from "./Form/SelectFactors";
import SelectWithImg from "./Form/SelectWithImg";
import InputText from "./Form/InputText";
import SelectValue from "./Form/SelectValue";
import useStyles from "./style";
import * as validation from "./validation";
import StyledAlert from "./Form/Alert";

export default ({ handleClose }: { handleClose: () => void }) => {
  const {
    handleSubmit,
    formState: { errors, isValid },
    control,
    watch,
  } = useForm<Post>();
  const classes = useStyles();
  const onSubmit = (data: Post) => {
    console.log(data, errors, isValid);
    upload(data);
  };
  const headlines = {
    mom: "代表ウマ娘",
    grandMom1: "継承元1",
    grandMom2: "継承元2",
  };

  const [open, setOpen] = useState(false);
  const handleCloseAlert = (event?: React.SyntheticEvent, reason?: string) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };
  return (
    <>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className={classes.form}
        autoComplete="off"
      >
        <p>プロフィール</p>
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
          label="フレンドコード"
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
        {isValid ? (
          <StyledAlert message="OK" severity="success" />
        ) : (
          <StyledAlert message="入力を確認してください" />
        )}
        <Button variant="outlined">
          アップロード
          <input
            type="submit"
            className={classes.inputButtonHide}
            onClick={() => {
              if (isValid) {
                setOpen(true);
              }
            }}
          />
        </Button>
      </form>
      <Snackbar open={open} autoHideDuration={6000} onClose={handleCloseAlert}>
        <Alert onClose={handleCloseAlert} severity="success">
          投稿成功
        </Alert>
      </Snackbar>
    </>
  );
};
