import { Grid } from "@material-ui/core";
import FactorTiles from "components/FactorTiles";
import { Umamusume, keishoUmamusume } from "datas";
import { imageSource } from "datas/imageSource";

export default ({
  factors,
  umamusume,
}: {
  factors: keishoUmamusume["factors"];
  umamusume: Umamusume;
}) => {
  return (
    <Grid container>
      <Grid
        item
        key="select"
        xs={12}
        md={2}
        lg={2}
        style={{ textAlign: "center" }}
      >
        <img
          src={imageSource.umamusumes[umamusume.id]}
          alt=""
          style={{ width: "100%", maxWidth: "100px", margin: "5px 0 5px" }}
        />
      </Grid>

      <Grid
        item
        key="factors"
        xs={12}
        md={9}
        lg={9}
        style={{ textAlign: "center" }}
      >
        <FactorTiles factors={factors} />
      </Grid>
    </Grid>
  );
};
