import { useEffect, useState } from "react";
import { Post, initialPost } from "datas/post";
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
import produce from "immer";

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

  const [currentPost, setCurrentPost] = useState<Post>(initialPost);
  const db = useSelector<DbState, Db>((state) => state.db);
  console.log(db);
  const dispatch = useDispatch();
  const { postUpdated } = dbSlice.actions;

  const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    const factorIds = Array.from(event.target.value as string[]);

    setCurrentPost((baseState) => {
      return produce(baseState, (draftState) => {
        draftState.mom.factorIds = factorIds;
      });
    });
    console.log(currentPost);
  };

  useEffect(() => {
    dispatch(postUpdated(currentPost));
  }, [currentPost]);
  return (
    <>
      <FormControl className={classes.formControl}>
        <InputLabel>Name</InputLabel>
        <Select
          multiple
          value={currentPost.mom.factorIds}
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
      <PostTile post={currentPost} />
    </>
  );
};
