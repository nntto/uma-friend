import { Grid } from "@material-ui/core";
import FactorTiles from "components/FactorTiles";
import { Umamusume, keishoUmamusume, FactorTypes, Factor } from "datas";
import { Db } from "features";
import { useSelector } from "react-redux";
import SelectFactors from "./SelectFactors";
import SelectUmamusume from "./SelectUmamusume";

export default ({
  factors,
  factorIds,
  umamusume,
  setKeishoUmamusume,
}: {
  factors: keishoUmamusume["factors"];
  factorIds: keishoUmamusume["factorIds"];
  umamusume: Umamusume;
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
  const dbUmamusumes = useSelector<Db, Umamusume[]>(
    (state) => state.umamusumes
  );
  const dbFactors = useSelector<Db, Factor[]>((state) => state.factors);
  const handleChange = (
    event: any,
    index: string,
    factorType?: FactorTypes,
    factorId?: string
  ) => {
    if (!setKeishoUmamusume) throw new Error("cannot update");
    setKeishoUmamusume(event.target.value, index, factorType, factorId);
  };

  return (
    <Grid container>
      {setKeishoUmamusume ? (
        <>
          <Grid
            item
            key="select-umamusume"
            xs={6}
            md={1}
            lg={1}
            style={{ textAlign: "center" }}
          >
            <SelectUmamusume
              dbUmamusumes={dbUmamusumes}
              umamusume={umamusume}
              handleChange={handleChange}
            />
          </Grid>
          <Grid
            item
            key="select-factors"
            xs={6}
            md={2}
            lg={2}
            style={{ textAlign: "center" }}
          >
            <SelectFactors
              factorIds={factorIds}
              dbFactors={dbFactors}
              handleChange={handleChange}
            />
          </Grid>
        </>
      ) : (
        <Grid
          item
          key="select"
          xs={12}
          md={2}
          lg={2}
          style={{ textAlign: "center" }}
        >
          <img
            src={umamusume.imgUrl}
            alt=""
            style={{ width: "100%", maxWidth: "100px", margin: "5px 0 5px" }}
          />
        </Grid>
      )}
      <Grid
        item
        key="factors"
        xs={12}
        md={9}
        lg={9}
        style={{ textAlign: "center" }}
      >
        <FactorTiles
          factors={factors}
          setKeishoUmamusume={setKeishoUmamusume}
        />
      </Grid>
    </Grid>
  );
};
