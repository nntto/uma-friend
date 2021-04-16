import SupportCard from "components/SupportCard";
import { Support } from "datas/support";
import Headline from "components/atoms/Headline";
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
  stack: 1 | 2 | 3 | 4;
  level: number;
}) => {
  const classes = useStyles();
  return (
    <>
      <div className={classes.profile}>プロフィール</div>
      <div className={classes.box}>
        <Headline headline="名前" text={name} />
        <Headline headline="トレーナーID" text={String(trainerId)} />
        <Headline headline="育成サポート" text={false} />
        <div className={classes.supportBox}>
          <SupportCard support={support} stack={stack} level={level} />
        </div>
      </div>
    </>
  );
};
