import { makeStyles } from "@material-ui/core/styles";
import { color } from "style/theme";

export default makeStyles({
  profile: {
    backgroundColor: color.background.profile,
    color: color.background.main,
    padding: "5px 10px 5px",
  },
  box: {
    margin: "5px 10px 10px",
  },
  headline: {
    margin: "5px 10px 5px",
    borderBottom: "3px solid",
    color: color.primary,
  },
  text: {
    margin: "0 20px 0",
  },
  supportBox: {
    marginLeft: "20px",
  },
});
