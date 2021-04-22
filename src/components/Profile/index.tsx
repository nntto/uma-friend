import SupportCard from "components/SupportCard";
import { Support } from "datas/support";
import { Post } from "datas";
import produce from "immer";
import useStyles from "./style";

export default ({
  name,
  trainerId,
  support,
  stack,
  level,
  setPost = undefined,
}: {
  name: string;
  trainerId: string;
  support: Support;
  stack: 1 | 2 | 3 | 4;
  level: number;
  setPost?: React.Dispatch<React.SetStateAction<Post>> | undefined;
}) => {
  const classes = useStyles();

  const handleChange = (event: any, index: string) => {
    if (!setPost) throw new Error("cannot update");
    if (index !== "name" && index !== "trainerId")
      throw new Error("cannot update");
    setPost((state) =>
      produce(state, (draftState) => {
        draftState[index] = event.target.value;
      })
    );
  };
  return (
    <>
      <div className={classes.profile}>プロフィール</div>
      <div className={classes.box}>
        <div className={classes.headline}>名前</div>
        {setPost ? (
          <input
            className={classes.text}
            type="text"
            value={name}
            onChange={(e) => handleChange(e, "name")}
          />
        ) : (
          <div className={classes.text}>{name}</div>
        )}
        <div className={classes.headline}>トレーナーID</div>
        {setPost ? (
          <input
            className={classes.text}
            type="text"
            value={String(trainerId)}
            onChange={(e) => handleChange(e, "trainerId")}
          />
        ) : (
          <div className={classes.text}>{String(trainerId)}</div>
        )}
        <div className={classes.headline}>育成サポート</div>
        <div className={classes.text}>{false}</div>

        <div className={classes.supportBox}>
          <SupportCard support={support} stack={stack} level={level} />
        </div>
      </div>
    </>
  );
};
