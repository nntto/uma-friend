import { factorDatas, FactorTypes, keishoUmamusume } from "datas";
import FactorTile from "./FactorTile";

export default ({ factors }: { factors: keishoUmamusume["factors"] }) => {
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
