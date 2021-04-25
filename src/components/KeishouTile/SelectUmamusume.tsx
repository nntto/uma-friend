import { FormControl, MenuItem, Select } from "@material-ui/core";
import { Umamusume } from "datas";
import MenuWithImg from "components/atom/MenuItemWithImg";
import { imageSource } from "datas/imageSource";
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
    <FormControl>
      <Select
        className={classes.select}
        labelId="select-support"
        id="select-support"
        defaultValue="undefined"
        value={umamusume.id ? umamusume.id : ""}
        onChange={(e) => handleChange(e, "umamusume")}
        disableUnderline
        renderValue={() => (
          <img
            src={imageSource.umamusumes[umamusume.id]}
            alt=""
            style={{
              width: "100%",
              maxWidth: "100px",
              margin: "5px 0 5px",
            }}
          />
        )}
      >
        {dbUmamusumes.map((itemUmamusume: Umamusume) => (
          <MenuItem key={itemUmamusume.id} value={itemUmamusume.id}>
            <MenuWithImg collection="umamusumes" item={itemUmamusume} />
          </MenuItem>
        ))}
        <MenuItem />
      </Select>
    </FormControl>
  );
};
