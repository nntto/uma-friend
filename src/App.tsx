import "./App.css";
import { sizes, color } from "style/theme";
import { makeStyles } from "@material-ui/core/styles";
import { Post, posts } from "datas/post";
import PostTiles from "components/PostTiles";
import Upload from "components/Upload";
import InputTest from "components/Upload/InputTest";
import { useDispatch, useSelector } from "react-redux";
import { dbSlice, DbState } from "features";
import { useEffect } from "react";

import collectionName from "datas/constants";

const useStyles = makeStyles({
  root: {
    color: color.color.main,
    fontWeight: "bolder",
    fontSize: sizes[5],
  },
});

const App: React.FC = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const { dbUpdated } = dbSlice.actions;
  const update = (collection: keyof typeof collectionName) =>
    dispatch(dbUpdated(collection));
  useEffect(() => {
    update("factors");
    update("supports");
    update("umamusumes");
  }, []);
  return (
    <>
      <link
        href="https://fonts.googleapis.com/css?family=Sawarabi+Gothic"
        rel="stylesheet"
      />
      <body className={classes.root}>
        <InputTest />
        <Upload />
      </body>
    </>
  );
};

export default App;
