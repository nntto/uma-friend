import { Support, Umamusume } from "datas";
import { makeStyles } from "@material-ui/core/styles";
import { imageSource } from "datas/imageSource";

const useStyle = makeStyles({
  sideBySide: {
    display: "inline-block",
  },
  miniImg: {
    height: "4rem",
  },
});
export default ({
  collection,
  item,
}: {
  collection: "supportCards" | "umamusumes";
  item: Umamusume | Support;
}) => {
  const classes = useStyle();
  return (
    <>
      <p className={classes.sideBySide}>
        <img
          className={classes.miniImg}
          alt=""
          src={imageSource[collection][item.id]}
        />
      </p>
      <p className={classes.sideBySide}>{item.name}</p>
    </>
  );
};
