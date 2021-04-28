import { Control, Controller, FieldValues } from "react-hook-form";
import { TextField } from "@material-ui/core";
import { Alert } from "@material-ui/lab";
import useStyles from "../style";

export default ({
  control,
  name,
  id,
  label,
  defaultValue,
  rules,
}: {
  control: Control<FieldValues>;
  name: string;
  id: string;
  label: string;
  defaultValue?: string;
  rules?: any;
}) => {
  const classes = useStyles();
  return (
    <Controller
      control={control}
      name={name}
      rules={rules}
      render={({ field: { onChange }, fieldState: { error } }) => {
        return (
          <div>
            {error && <Alert severity="error">{error.message}</Alert>}
            <TextField
              id={id}
              defaultValue={defaultValue}
              variant="outlined"
              onChange={onChange}
              label={label}
            />
          </div>
        );
      }}
    />
  );
};
