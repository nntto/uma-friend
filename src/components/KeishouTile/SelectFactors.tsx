import { FormControl, InputLabel, MenuItem, Select } from "@material-ui/core";
import { Factor, factorDatas, FactorTypes, keishoUmamusume } from "datas";
import useStyles from "./style";

export default ({
  factorIds,
  dbFactors,
  factors,
  handleChange,
}: {
  factorIds: keishoUmamusume["factorIds"];
  dbFactors: Factor[];
  factors: keishoUmamusume["factors"];
  handleChange: (
    event: any,
    index: string,
    factorType?:
      | "status"
      | "appropriate"
      | "uniqueSkill"
      | "G1"
      | "skill"
      | undefined,
    factorId?: string | undefined
  ) => void;
}) => {
  const classes = useStyles();
  return (
    <>
      {Object.keys(factorIds).map((key) => {
        const factorType = key as FactorTypes;
        const isMulti = factorType === "G1" || factorType === "skill";
        const nullValue = isMulti ? [] : "";
        const typedFactors = [] as Factor[];
        if (isMulti) {
          typedFactors.push(...((factors[factorType] as Factor[]) ?? []));
        } else if (factors[factorType]) {
          typedFactors.push(factors[factorType] as Factor);
        }
        return (
          <div className={classes.selectFactorsBox}>
            <FormControl
              key={`seceltor-factor-${factorType}`}
              className={classes.seceltFactorForm}
            >
              <Select
                multiple={isMulti}
                labelId={`selector-factor-${factorType}`}
                id={`selector-factor-${factorType}`}
                displayEmpty
                value={
                  factorIds[factorType] ? factorIds[factorType] : nullValue
                }
                onChange={(e) => handleChange(e, "factor", factorType)}
                renderValue={
                  isMulti
                    ? (selected) => {
                        if ((selected as string[]).length === 0) {
                          return factorDatas[factorType];
                        }
                        return (selected as string[]).join(", ");
                      }
                    : undefined
                }
                disableUnderline
              >
                <MenuItem value="" disabled>
                  {factorDatas[factorType]}
                </MenuItem>
                {dbFactors
                  .filter((item) => item.type === factorType)
                  .map((itemFactor: Factor) => (
                    <MenuItem key={itemFactor.id} value={itemFactor.id}>
                      {itemFactor.name}
                    </MenuItem>
                  ))}
              </Select>
            </FormControl>

            {typedFactors.map((item) => {
              return (
                <FormControl
                  key={`selector-star-${item.id}`}
                  className={classes.selectStarForm}
                >
                  <InputLabel shrink id={`selector-star-${item.id}`}>
                    {item.name}
                  </InputLabel>
                  <Select
                    labelWidth={10}
                    labelId={`selector-star-${item.id}`}
                    id={`selector-star-${item.id}`}
                    value={item.star ?? 0}
                    onChange={(e) =>
                      handleChange(e, "star", factorType, item.id)
                    }
                    disableUnderline
                  >
                    <MenuItem value="" disabled>
                      {item.name}
                    </MenuItem>
                    {[1, 2, 3].map((i) => (
                      <MenuItem key={i} value={i}>
                        ☆{i}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              );
            })}
          </div>
        );
      })}
    </>
  );
};
