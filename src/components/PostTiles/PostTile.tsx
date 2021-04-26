import { Moms, Post } from "datas/post";
import KeishouTile from "components/KeishouTile";
import { Grid } from "@material-ui/core";
import Profile from "components/Profile";
import produce from "immer";
import { Factor, FactorTypes, Umamusume } from "datas";
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
      ? (
          value: string | string[] | number | Factor | Factor[],
          index: string,
          factorType?: FactorTypes,
          factorId?: string
        ) => {
          setPost((state) =>
            produce(state, (draftState) => {
              if (index === "umamusume") {
                draftState[momId].umamusumeId = value as string;
                draftState[momId].umamusume = dbUmamusumes.find(
                  (finder) => finder.id === value
                ) as Umamusume;
              } else if (index === "factor" && factorType) {
                if (
                  factorType === "status" ||
                  factorType === "appropriate" ||
                  factorType === "uniqueSkill"
                ) {
                  const star = draftState[momId].factors[factorType]?.star;
                  draftState[momId].factors[factorType] = {
                    ...(value as Factor),
                    star,
                  };
                } else {
                  draftState[momId].factors[factorType] = value as Factor[];
                }
              } else if (index === "star" && factorId && factorType) {
                if (
                  factorType === "status" ||
                  factorType === "appropriate" ||
                  factorType === "uniqueSkill"
                ) {
                  draftState[momId].factors[factorType]!.star = value as
                    | 1
                    | 2
                    | 3;
                } else {
                  draftState[momId].factors[factorType] = draftState[
                    momId
                  ].factors[factorType].map((item) =>
                    item.id === factorId
                      ? { ...item, star: value as 1 | 2 | 3 }
                      : item
                  );
                }
              } else {
                throw new Error(`cannot update. index = ${index}`);
              }
            })
          );
        }
      : undefined;
  console.log(post);
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
        factorIds={post.mom.factorIds}
        umamusume={post.mom.umamusume}
        setKeishoUmamusume={setKeishoUmamusume("mom")}
      />
      <Grid container>
        <Grid
          item
          key="oya"
          xs={2}
          md={2}
          lg={2}
          style={{ textAlign: "center" }}
        >
          <span className={classes.keishomoto}>継承元</span>
        </Grid>
        <Grid item key="border" xs={10} md={10} lg={10}>
          <div className={classes.border} />
        </Grid>
      </Grid>
      <KeishouTile
        factors={post.grandMom1.factors}
        factorIds={post.grandMom1.factorIds}
        umamusume={post.grandMom1.umamusume}
        setKeishoUmamusume={setKeishoUmamusume("grandMom1")}
      />
      <KeishouTile
        factors={post.grandMom2.factors}
        factorIds={post.grandMom2.factorIds}
        umamusume={post.grandMom2.umamusume}
        setKeishoUmamusume={setKeishoUmamusume("grandMom2")}
      />
      <p>更新日時:{post.updatedAt}</p>
    </>
  );
};
