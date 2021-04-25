import SupportCard from "components/SupportCard";
import { Support } from "datas/support";
import { Post } from "datas";
import produce from "immer";
import { useSelector } from "react-redux";
import { Db } from "features";
import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@material-ui/core";
import MenuItemWithImg from "components/atom/MenuItemWithImg";
import { useState } from "react";
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
  stack: 1 | 2 | 3 | 4;
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
        const value = event.target.value;
        if (index === "name" || index === "trainerId") {
          draftState[index] = value;
        } else if (index === "support") {
          draftState.supportId = value;
          draftState.support = dbSupport.find(
            (finder) => finder.id === value
          ) as Support;
        } else if (index === "stack" || index === "level") {
          draftState[index] = value;
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
              <FormControl>
                <Select
                  labelId="select-rarity"
                  id="select-rarity"
                  value={rarity}
                  onChange={(e) => setRarity(e.target.value as string)}
                >
                  {["ssr", "sr", "r"].map((i) => (
                    <MenuItem key={i} value={i}>
                      {i}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
              <FormControl className={classes.formControl}>
                <Select
                  className={classes.select}
                  labelId="select-support"
                  id="select-support"
                  value={support.id ?? "undefine"}
                  onChange={(e) => handleChange(e, "support")}
                  renderValue={() => <p>{support.name}</p>}
                >
                  {dbSupport
                    .filter((i) => i.rarity === rarity)
                    .map((itemSupport: Support) => (
                      <MenuItem key={itemSupport.id} value={itemSupport.id}>
                        <MenuItemWithImg
                          collection="supportCards"
                          item={itemSupport}
                        />
                      </MenuItem>
                    ))}
                  <MenuItem />
                </Select>
              </FormControl>
            </div>
          ) : null}
          <SupportCard
            setPost={setPost}
            support={support}
            stack={stack}
            level={level}
          />
          <FormControl>
            <Select
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
          <FormControl>
            <Select
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
