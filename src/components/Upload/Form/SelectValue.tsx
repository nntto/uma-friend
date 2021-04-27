import { Control, Controller, FieldValues } from "react-hook-form";
import { FormControl, InputLabel, MenuItem, Select } from "@material-ui/core";

export default ({
  control,
  name,
  id,
  label,
  values,
  beforeText,
  afterText,
  defaultValue,
}: {
  control: Control<FieldValues>;
  name: string;
  id: string;
  label: string;
  values: any[];
  beforeText?: string;
  afterText?: string;
  defaultValue?: any;
}) => {
  return (
    <Controller
      control={control}
      name={name}
      render={({ field: { onChange, value } }) => (
        <FormControl>
          <InputLabel shrink id={id}>
            {label}
          </InputLabel>
          <Select
            labelId={id}
            id={id}
            label={label}
            defaultValue={defaultValue}
            value={value}
            variant="outlined"
            onChange={onChange}
          >
            {values.map((i) => (
              <MenuItem key={i} value={i}>
                {beforeText}
                {i}
                {afterText}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      )}
    />
  );
};
