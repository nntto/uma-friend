import { Factor } from "datas/factors";
import { color } from "style/theme";
import Rating from "@material-ui/lab/Rating";
import useStyles from "./style";

export default ({
  factor,
  setStar,
}: {
  factor: Factor;
  setStar?: (event: any) => void;
}) => {
  if (!factor) return <></>;
  const classes = useStyles();
  const star = factor.star ?? 0;
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
          {setStar !== undefined ? (
            <Rating
              name={factor.id}
              value={factor.star ?? 0}
              max={3}
              onChange={setStar}
              size="large"
            />
          ) : (
            <Rating
              className={classes.notTouched}
              value={factor.star ?? 0}
              max={3}
              readOnly
              size="large"
            />
          )}
        </div>
      </div>
    </>
  );
};
