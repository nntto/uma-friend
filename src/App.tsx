import "./App.css";
import { sizes, color } from "style/theme";
import { makeStyles } from "@material-ui/core/styles";
import { posts } from "datas/post";
import PostTiles from "components/PostTiles";

const useStyles = makeStyles({
  root: {
    color: color.color.main,
    fontWeight: "bolder",
    fontSize: sizes[5],
  },
});

const App: React.FC = () => {
  const classes = useStyles();
  return (
    <>
      <link
        href="https://fonts.googleapis.com/css?family=Sawarabi+Gothic"
        rel="stylesheet"
      />
      <body className={classes.root}>
        <PostTiles posts={posts} />
      </body>
    </>
  );
};

export default App;
