import { Grid } from "@material-ui/core";
import FactorTiles from "components/FactorTiles";
import { Umamusume, keishoUmamusume, Post, Support } from "datas";
import { Db } from "features";
import produce from "immer";
import { useSelector } from "react-redux";
import useStyles from "./style";

export default ({
  factors,
  umamusume,
  setPost,
}: {
  factors: keishoUmamusume["factors"];
  umamusume: Umamusume;
  setPost?: React.Dispatch<React.SetStateAction<Post>> | undefined;
}) => {
  const dbSupport = useSelector<Db, Support[]>((state) => state.supports);
  const classes = useStyles();

  const MiniSupport = ({ s }: { s: Support }) => (
    <>
      <p className={classes.sideBySide}>
        <img className={classes.miniImg} alt="" src={s.imgUrl} />
      </p>
      <p className={classes.sideBySide}>{s.name}</p>
    </>
  );

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
        } else {
          throw new Error(`cannot update. index = ${index}`);
        }
      })
    );
  };

  return (
    <Grid container>
      <Grid item xs={12} md={2} lg={2} style={{ textAlign: "center" }}>
        <img
          src={umamusume.imgUrl}
          alt=""
          style={{ width: "100%", maxWidth: "100px", margin: "5px 0 5px" }}
        />
      </Grid>
      <Grid item xs={12} md={10} lg={10}>
        <FactorTiles factors={factors} />
      </Grid>
    </Grid>
  );
};
