import { Control, Controller } from "react-hook-form";
import { TextField } from "@material-ui/core";
import { Post } from "datas";
import Alert from "./Alert";

export default ({
  control,
  name,
  id,
  label,
  defaultValue,
  rules,
}: {
  control: Control<Post>;
  name: "name" | "trainerId";
  id: string;
  label: string;
  defaultValue?: string;
  rules?: any;
}) => {
  return (
    <Controller
      control={control}
      name={name}
      rules={rules}
      defaultValue={defaultValue}
      render={({ field: { onChange, value }, fieldState: { error } }) => {
        return (
          <div>
            {error && <Alert message={error.message} />}
            <TextField
              fullWidth
              id={id}
              value={value}
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
