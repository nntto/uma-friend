import { Support, Umamusume } from "datas";
import { Db } from "features";
import { useSelector } from "react-redux";

export default () => {
  const dbUmamusumes = useSelector<Db, Umamusume[]>(
    (state) => state.umamusumes
  );
  const dbSupportCards = useSelector<Db, Support[]>((state) => state.supports);

  return (
    <>
      <p> {"eexport const imageSource: ImageSource = {supportCards: {"}</p>
      undefined: require("../image/undefined.png").default,
      {dbSupportCards.map((item) => (
        <>{`${item.id}: require("../image/width120/supportCards/${item.id}.png").default,`}</>
      ))}
      <p>{"},umamusumes: {"}</p>
      undefined: require("../image/undefined.png").default,
      {dbUmamusumes.map((item) => (
        <>{`${item.id}: require("../image/width80/umamusumes/${item.id}.png").default,`}</>
      ))}
      <p>{"}};"}</p>
    </>
  );
};
