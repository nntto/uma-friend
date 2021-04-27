import { Control, Controller, FieldValues } from "react-hook-form";
import { TextField } from "@material-ui/core";
import useStyles from "../style";

export default ({
  control,
  name,
  id,
  label,
}: {
  control: Control<FieldValues>;
  name: string;
  id: string;
  label: string;
}) => {
  const classes = useStyles();
  return (
    <Controller
      control={control}
      name={name}
      render={({ field: { onChange } }) => (
        <TextField
          id={id}
          variant="outlined"
          onChange={onChange}
          label={label}
        />
      )}
    />
  );
};
