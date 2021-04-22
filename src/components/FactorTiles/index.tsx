import { Grid } from "@material-ui/core";
import { Factor, keishoUmamusume, FactorTypes } from "datas";
import FactorTile from "./FactorTile";
import useStyles from "./style";

export default ({ factors }: { factors: keishoUmamusume["factors"] }) => {
  const classes = useStyles();
  const factorList = [] as Factor[];
  Object.keys(factors).forEach((factorType) => {
    if (Array.isArray(factors[factorType as FactorTypes])) {
      factorList.push(...(factors[factorType as FactorTypes] as Factor[]));
    } else {
      factorList.push(factors[factorType as FactorTypes] as Factor);
    }
  });
  return (
    <Grid container spacing={2} className={classes.box}>
      {factorList.map((item) => (
        <Grid item xs={6} md={6} lg={4} xl={3}>
          <FactorTile factor={item} />
        </Grid>
      ))}
    </Grid>
  );
};
