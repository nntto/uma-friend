import { Control, Controller, FieldValues } from "react-hook-form";
import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@material-ui/core";
import { Moms, Support, Umamusume } from "datas";
import { Alert, Autocomplete } from "@material-ui/lab";
import { useSelector } from "react-redux";
import { Db } from "features";
import MenuItemWithImg from "components/atom/MenuItemWithImg";
import { useState } from "react";

export default ({
  control,
  momId,
  type,
  rules,
}: {
  control: Control<FieldValues>;
  momId?: Moms;
  type: "umamusume" | "support";
  rules?: any;
}) => {
  const db = [] as Umamusume[] | Support[];
  let options: Umamusume[] | Support[];
  let collection: "umamusumes" | "supportCards";
  let label: string;
  let name: string;
  let id: string;
  if (type === "umamusume") {
    db.push(...useSelector<Db, Umamusume[]>((state) => state.umamusumes));
    options = db;
    collection = "umamusumes";
    label = "育成ウマ娘";
    name = `${momId}.${type}`;
    id = `select-${name}`;
  } else if (type === "support") {
    db.push(...useSelector<Db, Support[]>((state) => state.supports));
    options = db;
    collection = "supportCards";
    label = "サポートカード";
    name = type;
    id = `select-${type}`;
  } else {
    throw new Error(`unexpected type = ${type}`);
  }

  const [rarity, setRarity] = useState("ssr");
  return (
    <>
      {type === "support" ? (
        <FormControl style={{ width: "80px" }}>
          <InputLabel shrink id={id}>
            レアリティ
          </InputLabel>
          <Select
            labelId="select-rarity"
            id="select-rarity"
            label="レアリティ"
            value={rarity}
            variant="outlined"
            onChange={(e) => {
              setRarity(e.target.value as string);
            }}
          >
            {["ssr", "sr", "r"].map((i) => (
              <MenuItem key={i} value={i}>
                {i}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      ) : null}
      <Controller
        control={control}
        name={name}
        rules={rules}
        render={({ field: { onChange }, fieldState: { error } }) => (
          <>
            {error && <Alert severity="error">{error.message}</Alert>}
            <Autocomplete
              id={id}
              options={options.filter(
                (i: Support) => i.rarity === rarity || i.rarity === undefined
              )}
              autoComplete
              onChange={(e, values) => onChange(values, type)}
              autoHighlight
              renderOption={(option) => (
                <MenuItemWithImg collection={collection} item={option} />
              )}
              getOptionLabel={(option) => option.name}
              renderInput={(params) => (
                <>
                  <TextField
                    {...params}
                    label={label}
                    variant="outlined"
                    inputProps={{
                      ...params.inputProps,
                    }}
                  />
                </>
              )}
            />
          </>
        )}
      />
    </>
  );
};
