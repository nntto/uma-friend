import { useEffect, useState } from "react";
import { Post, initialPost } from "datas/post";
import { Support } from "datas/support";
import { Umamusume } from "datas/umamusume";
import { fetchDbData } from "functions";
import { Factor } from "datas/factors";
import { DbState, dbSlice, Db } from "features";
import PostTile from "components/PostTiles/PostTile";
import {
  InputLabel,
  Input,
  MenuItem,
  FormControl,
  Select,
} from "@material-ui/core";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import { useDispatch, useSelector } from "react-redux";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    formControl: {
      margin: theme.spacing(1),
      minWidth: 120,
      maxWidth: 300,
    },
    chips: {
      display: "flex",
      flexWrap: "wrap",
    },
    chip: {
      margin: 2,
    },
    noLabel: {
      marginTop: theme.spacing(3),
    },
  })
);
const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

export default () => {
  const classes = useStyles();

  const post = useSelector<DbState, Post>((state) => state.post);
  const db = useSelector<DbState, Db>((state) => {
    return state.db;
  });
  const dispatch = useDispatch();
  const { postInitialized, postUpdated } = dbSlice.actions;
  dispatch(postInitialized());
  const factors: any[] = [];
  const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    const factorIds = Array.from(event.target.value as string[]);
    dispatch(
      postUpdated({ index1: "mom", index2: "factorIds", value: factorIds })
    );
  };

  return (
    <>
      <FormControl className={classes.formControl}>
        <InputLabel>Name</InputLabel>
        <Select
          multiple
          value={post.mom.factorIds}
          onChange={handleChange}
          input={<Input />}
          MenuProps={MenuProps}
        >
          {db.factors.map((factor) => (
            <MenuItem key={factor.id} value={factor.id}>
              {factor.name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <PostTile post={post} />
    </>
  );
};
