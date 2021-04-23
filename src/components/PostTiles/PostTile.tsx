import { Moms, Post } from "datas/post";
import KeishouTile from "components/KeishouTile";
import { Grid } from "@material-ui/core";
import Profile from "components/Profile";
import produce from "immer";
import { Umamusume } from "datas";
import { Db } from "features";
import { useSelector } from "react-redux";
import makeStyles from "./style";

export default ({
  post,
  setPost,
}: {
  post: Post;
  setPost?: React.Dispatch<React.SetStateAction<Post>> | undefined;
}) => {
  const classes = makeStyles();
  const dbUmamusumes = useSelector<Db, Umamusume[]>(
    (state) => state.umamusumes
  );

  const setKeishoUmamusume = (momId: Moms) =>
    setPost
      ? (value: string, index: string) => {
          setPost((state) =>
            produce(state, (draftState) => {
              if (index === "name" || index === "trainerId") {
                draftState[index] = value;
              } else if (index === "umamusume") {
                draftState[momId].umamusumeId = value;
                draftState[momId].umamusume = dbUmamusumes.find(
                  (finder) => finder.id === value
                ) as Umamusume;
              } else {
                throw new Error(`cannot update. index = ${index}`);
              }
            })
          );
        }
      : undefined;
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
        setKeishoUmamusume={setKeishoUmamusume("mom")}
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
        setKeishoUmamusume={setKeishoUmamusume("grandMom1")}
      />
      <KeishouTile
        factors={post.grandMom2.factors}
        umamusume={post.grandMom2.umamusume}
        setKeishoUmamusume={setKeishoUmamusume("grandMom2")}
      />
    </>
  );
};
