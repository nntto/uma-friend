import { Post } from "datas/post";
import KeishouTile from "components/KeishouTile";
import { Grid } from "@material-ui/core";
import Profile from "components/Profile";
import makeStyles from "./style";

export default ({
  post,
  setPost,
}: {
  post: Post;
  setPost?: React.Dispatch<React.SetStateAction<Post>> | undefined;
}) => {
  const classes = makeStyles();
  return (
    <>
      <Profile
        trainerId={post.trainerId}
        name={post.name}
        support={post.support}
        stack={post.stack}
        level={post.level}
        setPost={setPost}
      />
      <div className={classes.head}>
        <div className={classes.text}>因子</div>
      </div>
      <KeishouTile
        factors={post.mom.factors}
        umamusume={post.mom.umamusume}
        setPost={setPost}
      />
      <Grid container>
        <Grid item xs={2} md={2} lg={2} style={{ textAlign: "center" }}>
          <span className={classes.keishomoto}>継承元</span>
        </Grid>
        <Grid item xs={10} md={10} lg={10}>
          <div className={classes.border} />
        </Grid>
      </Grid>
      <KeishouTile
        factors={post.grandMom1.factors}
        umamusume={post.grandMom1.umamusume}
        setPost={setPost}
      />
      <KeishouTile
        factors={post.grandMom2.factors}
        umamusume={post.grandMom2.umamusume}
        setPost={setPost}
      />
    </>
  );
};
