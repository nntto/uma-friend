import { Grid } from "@material-ui/core";
import { factorDatas, FactorTypes, keishoUmamusume } from "datas";
import FactorTile from "./FactorTile";
import useStyles from "./style";

export default ({ factors }: { factors: keishoUmamusume["factors"] }) => {
  const classes = useStyles();

  return (
    <div>
      {Object.keys(factorDatas).map((key) => {
        const factorType = key as FactorTypes;
        if (factors[factorType] === undefined) return null;

        if (factorType === "G1" || factorType === "skill") {
          return factors[factorType].map((item) => (
            <FactorTile factor={item} />
          ));
        }
        const factor = factors[factorType];
        if (factor === undefined) return null;
        return <FactorTile factor={factor} />;
      })}
    </div>
  );
};
