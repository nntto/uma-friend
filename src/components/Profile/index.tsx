import SupportCard from "components/SupportCard";
import { Support } from "datas/support";
import { Post } from "datas";
import produce from "immer";
import { useSelector } from "react-redux";
import { Db } from "features";
import { FormControl, MenuItem, Select, TextField } from "@material-ui/core";
import MenuItemWithImg from "components/atom/MenuItemWithImg";
import { useState } from "react";
import { Autocomplete } from "@material-ui/lab";
import useStyles from "./style";

export default ({
  name,
  trainerId,
  support,
  stack,
  level,
  setPost = undefined,
}: {
  name: string;
  trainerId: string;
  support: Support;
  stack: 0 | 1 | 2 | 3 | 4;
  level: number;
  setPost?: React.Dispatch<React.SetStateAction<Post>> | undefined;
}) => {
  const classes = useStyles();
  const dbSupport = useSelector<Db, Support[]>((state) => state.supports);
  const [rarity, setRarity] = useState("ssr");

  const handleChange = (event: any, index: string) => {
    if (!setPost) throw new Error("cannot update");
    setPost((state) =>
      produce(state, (draftState) => {
        if (index === "name" || index === "trainerId") {
          draftState[index] = event.target.value as string;
        } else if (index === "support") {
          draftState.support = event as Support;
        } else if (index === "stack") {
          draftState.stack = event.target.value as 0 | 1 | 2 | 3 | 4;
        } else if (index === "level") {
          draftState.level = event.target.value as number;
        } else {
          throw new Error(`cannot update. index = ${index}`);
        }
      })
    );
  };
  return (
    <>
      <div className={classes.profile}>プロフィール</div>
      <div className={classes.box}>
        <div className={classes.headline}>名前</div>
        {setPost ? (
          <TextField
            className={classes.text}
            id="profile-name"
            value={name}
            variant="outlined"
            onChange={(e) => handleChange(e, "name")}
          />
        ) : (
          <div className={classes.text}>{name}</div>
        )}
        <div className={classes.headline}>トレーナーID</div>
        {setPost ? (
          <TextField
            className={classes.text}
            id="profile-trainerIt"
            value={String(trainerId)}
            variant="outlined"
            onChange={(e) => handleChange(e, "trainerId")}
          />
        ) : (
          <div className={classes.text}>{String(trainerId)}</div>
        )}
        <div className={classes.headline}>育成サポート</div>
        <div className={classes.text}>{false}</div>

        <div className={classes.supportBox}>
          {setPost ? (
            <div className={classes.flexEnd}>
              <FormControl className={classes.selectBox}>
                <Select
                  labelId="select-rarity"
                  id="select-rarity"
                  value={rarity}
                  variant="outlined"
                  onChange={(e) => setRarity(e.target.value as string)}
                >
                  {["ssr", "sr", "r"].map((i) => (
                    <MenuItem key={i} value={i}>
                      {i}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
              <Autocomplete
                className={classes.selectBox}
                id="select-support"
                style={{ width: "200px" }}
                options={
                  dbSupport.filter((i) => i.rarity === rarity) as Support[]
                }
                onChange={(e, values) => handleChange(values, "support")}
                autoHighlight
                renderOption={(option) => (
                  <MenuItemWithImg collection="supportCards" item={option} />
                )}
                getOptionLabel={(option) => option.name}
                renderInput={(params) => (
                  <>
                    <TextField
                      // eslint-disable-next-line react/jsx-props-no-spreading
                      {...params}
                      label="サポートカード"
                      variant="outlined"
                      inputProps={{
                        ...params.inputProps,
                        autoComplete: "new-password", // disable autocomplete and autofill
                      }}
                    />
                  </>
                )}
              />
            </div>
          ) : null}
          <SupportCard support={support} stack={stack} level={level} />
          <FormControl className={classes.selectBox}>
            <Select
              variant="outlined"
              labelId="select-stack"
              id="select-stack"
              value={stack}
              onChange={(e) => handleChange(e, "stack")}
            >
              {[...Array(5)]
                .map((_, i) => i)
                .map((number) => (
                  <MenuItem key={number} value={number}>
                    {`${number}凸`}
                  </MenuItem>
                ))}
            </Select>
          </FormControl>
          <FormControl className={classes.selectBox}>
            <Select
              variant="outlined"
              labelId="select-level"
              id="select-level"
              value={level}
              onChange={(e) => handleChange(e, "level")}
            >
              {[...Array(50)]
                .map((_, i) => i + 1)
                .map((number) => (
                  <MenuItem key={number} value={number}>
                    {`Lv${number}`}
                  </MenuItem>
                ))}
            </Select>
          </FormControl>
        </div>
      </div>
    </>
  );
};
