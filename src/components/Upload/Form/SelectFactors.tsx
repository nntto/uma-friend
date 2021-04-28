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
import { Alert, Autocomplete } from "@material-ui/lab";
import { useSelector } from "react-redux";
import { Db } from "features";
import produce from "immer";
import useStyle from "../style";

export default ({
  control,
  momId,
  watch,
  rules,
}: {
  control: Control<FieldValues>;
  momId: Moms;
  watch: UseFormWatch<FieldValues>;
  rules?: any;
}) => {
  const dbFactors = useSelector<Db, Factor[]>((state) => state.factors);
  const classes = useStyle();
  return (
    <>
      {Object.keys(factorDatas).map((key) => {
        const factorType = key as FactorTypes;
        const isMulti = factorType === "G1" || factorType === "skill";
        const isRequired =
          factorType === "status" || factorType === "appropriate";
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
              rules={isRequired && rules}
              render={({ field: { onChange }, fieldState: { error } }) => (
                <>
                  {error && (
                    <Alert severity="error">
                      {factorDatas[factorType]}
                      {error.message}
                    </Alert>
                  )}
                  <Autocomplete
                    multiple={isMulti}
                    id={`selector-factor-${momId}-${factorType}`}
                    options={dbFactors.filter(
                      (item) => item.type === factorType
                    )}
                    onChange={(e, values) => {
                      console.log(values);
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
                      <FormControl
                        key={`selector-star-${item.id}`}
                        className={classes.selectStar}
                      >
                        <InputLabel shrink id={`selector-star-${item.id}`}>
                          {item.name}
                        </InputLabel>
                        <Select
                          labelWidth={10}
                          variant="outlined"
                          labelId={`selector-star-${item.id}`}
                          id={`selector-star-${item.id}`}
                          value={item.star ?? 1}
                          onChange={(e) => {
                            const star = e.target.value as 1 | 2 | 3;
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
