import { Factor } from "datas/factors";
import { color } from "style/theme";
import Rating from "@material-ui/lab/Rating";
import useStyles from "./style";

export default ({ factor }: { factor: Factor }) => {
  if (!factor) return <></>;
  const classes = useStyles();
  return (
    <>
      <div
        className={classes.card}
        style={{
          backgroundColor: color.factor[factor.type].background,
          color: color.factor[factor.type].color,
        }}
      >
        <div className={classes.name}>{factor.name}</div>
        <div className={classes.star}>
          <Rating
            className={classes.notTouched}
            value={factor.star ?? 0}
            max={3}
            readOnly
            size="large"
          />
        </div>
      </div>
    </>
  );
};
