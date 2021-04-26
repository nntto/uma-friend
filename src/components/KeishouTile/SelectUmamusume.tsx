import { FormControl, MenuItem, Select, TextField } from "@material-ui/core";
import { Umamusume } from "datas";
import MenuWithImg from "components/atom/MenuItemWithImg";
import { imageSource } from "datas/imageSource";
import { Autocomplete } from "@material-ui/lab";
import useStyles from "./style";

export default ({
  umamusume,
  dbUmamusumes,
  handleChange,
}: {
  umamusume: Umamusume;
  dbUmamusumes: Umamusume[];
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
    <Autocomplete
      className={classes.select}
      id="select-support"
      options={dbUmamusumes as Umamusume[]}
      onChange={(e, values) => handleChange(values, "umamusume")}
      autoHighlight
      renderOption={(option) => (
        <MenuWithImg collection="umamusumes" item={option} />
      )}
      getOptionLabel={(option) => option.name}
      renderInput={(params) => (
        <>
          <TextField
            // eslint-disable-next-line react/jsx-props-no-spreading
            {...params}
            label="育成ウマ娘"
            variant="outlined"
            inputProps={{
              ...params.inputProps,
              autoComplete: "new-password", // disable autocomplete and autofill
            }}
          />
          <img
            src={imageSource.umamusumes[umamusume.id]}
            alt=""
            style={{
              width: "100%",
              maxWidth: "100px",
              margin: "5px 0 5px",
            }}
          />
        </>
      )}
    />
  );
};
