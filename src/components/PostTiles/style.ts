import { makeStyles } from "@material-ui/core/styles";
import { color } from "style/theme";

export default makeStyles({
  head: {
    width: "100%",
    margin: "5px 5px 0",
    borderRadius: "5px",
    backgroundColor: color.primary,
    color: color.background.main,
  },
  text: {
    padding: "0 5px 0",
    margin: "5px 5px 0",
  },
  border: {
    borderBottom: "3px solid",
    color: color.secondary,
    height: "12px",
  },
  keishomoto: {
    marginLeft: "5%",
  },
});
