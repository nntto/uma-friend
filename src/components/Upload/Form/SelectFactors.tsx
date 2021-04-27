import {
  Control,
  Controller,
  FieldValues,
  UseFormWatch,
} from "react-hook-form";
import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@material-ui/core";
import { Factor, factorDatas, FactorTypes, Moms } from "datas";
import { Autocomplete } from "@material-ui/lab";
import { useSelector } from "react-redux";
import { Db } from "features";
import produce from "immer";

export default ({
  control,
  momId,
  watch,
}: {
  control: Control<FieldValues>;
  momId: Moms;
  watch: UseFormWatch<FieldValues>;
}) => {
  const dbFactors = useSelector<Db, Factor[]>((state) => state.factors);
  return (
    <>
      {Object.keys(factorDatas).map((key) => {
        const factorType = key as FactorTypes;
        const isMulti = factorType === "G1" || factorType === "skill";

        const typedFactors = [] as Factor[];
        const factors = watch(`${momId}.factors.${factorType}`);
        if (isMulti && factors) {
          typedFactors.push(
            ...((factors.filter((i: any) => i !== undefined) as Factor[]) ?? [])
          );
        } else if (factors) {
          typedFactors.push(factors as Factor);
        }
        return (
          <div>
            <Controller
              control={control}
              name={`${momId}.factors.${factorType}`}
              render={({ field: { onChange } }) => (
                <>
                  <Autocomplete
                    multiple={isMulti}
                    id={`selector-factor-${momId}-${factorType}`}
                    options={dbFactors.filter(
                      (item) => item.type === factorType
                    )}
                    onChange={(e, values) => {
                      onChange(
                        Array.isArray(values)
                          ? values.filter((i) => i !== undefined)
                          : values
                      );
                    }}
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
                        }}
                      />
                    )}
                  />
                  {typedFactors.map((item, index) => {
                    return (
                      <FormControl key={`selector-star-${item.id}`}>
                        <InputLabel shrink id={`selector-star-${item.id}`}>
                          {item.name}
                        </InputLabel>
                        <Select
                          labelWidth={10}
                          variant="outlined"
                          labelId={`selector-star-${item.id}`}
                          id={`selector-star-${item.id}`}
                          value={item.star ?? 0}
                          onChange={(e) => {
                            const star = e.target.value as 0 | 1 | 2 | 3;
                            const newValues = produce(
                              typedFactors,
                              (draftValues: Factor | Factor[]) => {
                                if (Array.isArray(draftValues)) {
                                  draftValues[index].star = star;
                                } else {
                                  draftValues.star = star;
                                }
                              }
                            );
                            onChange(isMulti ? newValues : newValues[0]);
                          }}
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
                </>
              )}
            />
          </div>
        );
      })}
    </>
  );
};
