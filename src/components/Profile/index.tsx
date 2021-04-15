import SupportCard from "components/SupportCard";
import { Support } from "datas/support";
import useStyles from "./style";

export default ({
  name,
  trainerId,
  support,
  stack,
  level,
}: {
  name: string;
  trainerId: number;
  support: Support;
  stack: 1 | 2 | 3 | 4;
  level: number;
}) => {
  const classes = useStyles();
  return (
    <>
      <div className={classes.profile}>プロフィール</div>
      <div className={classes.box}>
        <div className={classes.headline}>名前</div>
        <div className={classes.text}>{name}</div>
        <div className={classes.headline}>トレーナーID</div>
        <div className={classes.text}>{trainerId}</div>
        <div className={classes.headline}>育成サポート</div>

        <div className={classes.supportBox}>
          <SupportCard support={support} stack={stack} level={level} />
        </div>
      </div>
    </>
  );
};
