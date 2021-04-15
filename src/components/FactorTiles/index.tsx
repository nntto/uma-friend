import { Grid } from "@material-ui/core";
import { Factor } from "datas/factors";
import FactorTile from "./FactorTile";
import useStyles from "./style";

export default ({ factors }: { factors: Factor[] }) => {
  const classes = useStyles();
  return (
    <Grid container spacing={2} className={classes.box}>
      {factors.map((item) => (
        <Grid item xs={6} md={6} lg={4} xl={3}>
          <FactorTile factor={item} />
        </Grid>
      ))}
    </Grid>
  );
};
