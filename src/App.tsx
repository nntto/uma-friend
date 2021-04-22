import "./App.css";
import { sizes, color } from "style/theme";
import { makeStyles } from "@material-ui/core/styles";
import { initialPost, Post } from "datas/post";
import Upload from "components/Upload";
import InputTest from "components/Upload/InputTest";
import { useDispatch } from "react-redux";
import { dbSlice } from "features";
import { useEffect, useState } from "react";
import { fetchDbData } from "functions";
import { Factor, Umamusume, Support, constantsKeys } from "datas";

const useStyles = makeStyles({
  root: {
    color: color.color.main,
    fontWeight: "bolder",
    fontSize: sizes[5],
  },
});

const App: React.FC = () => {
  const classes = useStyles();

  const [post, setPost] = useState<Post>(initialPost);
  const [factors, setFactors] = useState<Factor[]>([]);
  const [umamusumes, setUmamusumes] = useState<Umamusume[]>([]);
  const [supports, setSupports] = useState<Support[]>([]);

  const dispatch = useDispatch();
  const { setDbData } = dbSlice.actions;
  const setData = (payload: {
    key: constantsKeys;
    value: Factor[] | Umamusume[] | Post[] | Support[];
  }) => dispatch(setDbData(payload));
  useEffect(() => {
    setData({
      key: "factors",
      value: factors,
    });
    setData({
      key: "umamusumes",
      value: umamusumes,
    });
    setData({
      key: "supports",
      value: supports,
    });
  }, [factors, umamusumes, supports]);

  useEffect(() => {
    fetchDbData("factors", setFactors);
    fetchDbData("umamusumes", setUmamusumes);
    fetchDbData("supportCards", setSupports);
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
