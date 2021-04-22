import { Factor } from "datas/factors";
import Rating from "@material-ui/lab/Rating";
import { color } from "style/theme";
import { AiFillStar } from "react-icons/ai";
import useStyles from "./style";

export default ({ factor }: { factor: Factor }) => {
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
          {[1, 2, 3].map((criteria) => (
            <AiFillStar
              color={star >= criteria ? color.starValid : color.starInvalid}
            />
          ))}
        </div>
      </div>
    </>
  );
};
