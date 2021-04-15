import { Grid } from "@material-ui/core";
import FactorTiles from "components/FactorTiles";
import { Factor } from "datas/factors";
import { Umamusume } from "datas/umamusume";

export default ({
  factors,
  umamusume,
}: {
  factors: Factor[];
  umamusume: Umamusume;
}) => {
  return (
    <Grid container>
      <Grid item xs={12} md={2} lg={2} style={{ textAlign: "center" }}>
        <img
          src={umamusume.imgUrl}
          alt=""
          style={{ width: "100%", maxWidth: "100px", margin: "5px 0 5px" }}
        />
      </Grid>
      <Grid item xs={12} md={10} lg={10}>
        <FactorTiles factors={factors} />
      </Grid>
    </Grid>
  );
};
