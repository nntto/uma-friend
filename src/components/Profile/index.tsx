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
  trainerId: string;
  support: Support;
  stack: 0 | 1 | 2 | 3 | 4;
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
        <div className={classes.text}>{String(trainerId)}</div>
        <div className={classes.headline}>育成サポート</div>
        <div className={classes.text}>{false}</div>

        <div className={classes.supportBox}>
          <SupportCard support={support} stack={stack} level={level} />
        </div>
      </div>
    </>
  );
};
