import { Grid } from "@material-ui/core";
import { FactorTypes, keishoUmamusume } from "datas";
import FactorTile from "./FactorTile";
import useStyles from "./style";

export default ({ factors }: { factors: keishoUmamusume["factors"] }) => {
  const classes = useStyles();

  return (
    <Grid container spacing={2} className={classes.box}>
      {Object.keys(factors).map((key) => {
        const factorType = key as FactorTypes;

        if (factorType === "G1" || factorType === "skill") {
          return factors[factorType].map((item) => (
            <Grid item key={item.id} xs={6} md={6} lg={4} xl={3}>
              <FactorTile factor={item} />
            </Grid>
          ));
        }
        const factor = factors[factorType];
        if (factor === undefined) return null;
        return (
          <Grid item key={factor.id} xs={6} md={6} lg={4} xl={3}>
            <FactorTile factor={factor} />
          </Grid>
        );
      })}
    </Grid>
  );
};
