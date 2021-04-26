/* eslint-disable react/jsx-props-no-spreading */
import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@material-ui/core";
import { Autocomplete } from "@material-ui/lab";
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

        const typedFactors = [] as Factor[];
        if (isMulti) {
          typedFactors.push(...((factors[factorType] as Factor[]) ?? []));
        } else if (factors[factorType]) {
          typedFactors.push(factors[factorType] as Factor);
        }
        return (
          <div>
            <Autocomplete
              className={classes.selectFactorForm}
              multiple={isMulti}
              id={`selector-factor-${factorType}`}
              options={dbFactors.filter((item) => item.type === factorType)}
              onChange={(e, values) =>
                handleChange(values, "factor", factorType)
              }
              autoHighlight
              renderOption={(option) => <>{option.name}</>}
              getOptionLabel={(option) => option.name}
              renderInput={(params) => (
                <TextField
                  {...params}
                  label={factorDatas[factorType]}
                  variant="outlined"
                  inputProps={{
                    ...params.inputProps,
                    autoComplete: "new-password", // disable autocomplete and autofill
                  }}
                />
              )}
            />

            <div>
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
                      variant="outlined"
                      labelId={`selector-star-${item.id}`}
                      id={`selector-star-${item.id}`}
                      value={item.star ?? 0}
                      onChange={(e) =>
                        handleChange(e, "star", factorType, item.id)
                      }
                      disableUnderline
                    >
                      <MenuItem value={0} disabled>
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
          </div>
        );
      })}
    </>
  );
};
