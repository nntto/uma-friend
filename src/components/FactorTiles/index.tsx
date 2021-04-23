import { Grid } from "@material-ui/core";
import { FactorTypes, keishoUmamusume } from "datas";
import FactorTile from "./FactorTile";
import useStyles from "./style";

export default ({
  factors,
  setKeishoUmamusume,
}: {
  factors: keishoUmamusume["factors"];
  setKeishoUmamusume?:
    | ((
        value: string | string[],
        index: string,
        factorType?:
          | "status"
          | "appropriate"
          | "uniqueSkill"
          | "G1"
          | "skill"
          | undefined,
        factorId?: string | undefined
      ) => void)
    | undefined;
}) => {
  const classes = useStyles();

  const createSetStar = (factorType: FactorTypes, factorId: string) =>
    setKeishoUmamusume
      ? (event: any) => {
          setKeishoUmamusume(event.target.value, "star", factorType, factorId);
        }
      : undefined;
  return (
    <Grid container spacing={2} className={classes.box}>
      {Object.keys(factors).map((key) => {
        const factorType = key as FactorTypes;

        if (factorType === "G1" || factorType === "skill") {
          return factors[factorType].map((item) => (
            <Grid item key={item.id} xs={6} md={6} lg={4} xl={3}>
              <FactorTile
                factor={item}
                setStar={createSetStar(factorType, item.id)}
              />
            </Grid>
          ));
        }
        const factor = factors[factorType];
        if (factor === undefined) return null;
        return (
          <Grid item key={factor.id} xs={6} md={6} lg={4} xl={3}>
            <FactorTile
              factor={factor}
              setStar={createSetStar(factorType, factor.id)}
            />
          </Grid>
        );
      })}
    </Grid>
  );
};
