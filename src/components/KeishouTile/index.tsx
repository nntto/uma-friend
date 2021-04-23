import { FormControl, Grid, MenuItem, Select } from "@material-ui/core";
import FactorTiles from "components/FactorTiles";
import { Umamusume, keishoUmamusume, Post, Support } from "datas";
import { Db } from "features";
import produce from "immer";
import { useSelector } from "react-redux";
import MenuWithImg from "components/atom/MenuItemWithImg";
import useStyles from "./style";

export default ({
  factors,
  umamusume,
  setKeishoUmamusume,
}: {
  factors: keishoUmamusume["factors"];
  umamusume: Umamusume;
  setKeishoUmamusume?: ((value: string, index: string) => void) | undefined;
}) => {
  const dbUmamusumes = useSelector<Db, Umamusume[]>(
    (state) => state.umamusumes
  );
  const classes = useStyles();
  const handleChange = (event: any, index: string) => {
    if (!setKeishoUmamusume) throw new Error("cannot update");
    setKeishoUmamusume(event.target.value, index);
  };

  return (
    <Grid container>
      <Grid item xs={12} md={2} lg={2} style={{ textAlign: "center" }}>
        {setKeishoUmamusume ? (
          <FormControl className={classes.formControl}>
            <Select
              className={classes.select}
              labelId="select-support"
              id="select-support"
              defaultValue="undefined"
              value={umamusume.id}
              onChange={(e) => handleChange(e, "umamusume")}
              disableUnderline
              renderValue={() => (
                <img
                  src={umamusume.imgUrl}
                  alt=""
                  style={{
                    width: "100%",
                    maxWidth: "100px",
                    margin: "5px 0 5px",
                  }}
                />
              )}
            >
              {dbUmamusumes.map((itemUmamusume: Umamusume) => (
                <MenuItem key={itemUmamusume.id} value={itemUmamusume.id}>
                  <MenuWithImg item={itemUmamusume} />
                </MenuItem>
              ))}
              <MenuItem />
            </Select>
          </FormControl>
        ) : (
          <img
            src={umamusume.imgUrl}
            alt=""
            style={{ width: "100%", maxWidth: "100px", margin: "5px 0 5px" }}
          />
        )}
      </Grid>
      <Grid item xs={12} md={10} lg={10}>
        <FactorTiles factors={factors} />
      </Grid>
    </Grid>
  );
};
