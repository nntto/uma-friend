import { Support, Umamusume } from "datas";
import { makeStyles } from "@material-ui/core/styles";

const useStyle = makeStyles({
  sideBySide: {
    display: "inline-block",
  },
  miniImg: {
    height: "4rem",
  },
});
export default ({ item }: { item: Umamusume | Support }) => {
  const classes = useStyle();
  return (
    <>
      <p className={classes.sideBySide}>
        <img className={classes.miniImg} alt="" src={item.imgUrl} />
      </p>
      <p className={classes.sideBySide}>{item.name}</p>
    </>
  );
};
