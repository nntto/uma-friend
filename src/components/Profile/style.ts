import { makeStyles } from "@material-ui/core/styles";
import { color, sizes } from "style/theme";

export default makeStyles({
  profile: {
    backgroundColor: color.background.profile,
    color: color.background.main,
    padding: "5px 10px 5px",
  },
  box: {
    margin: "5px 10px 10px",
  },

  supportBox: {
    marginLeft: "20px",
  },
  headline: {
    margin: "5px 10px 5px",
    borderBottom: "3px solid",
    color: color.primary,
  },
  text: {
    margin: "0 20px 0",
  },
  flexEnd: {
    display: "flex",
    alignItems: "flex-end",
  },
  formControl: {},
  sideBySide: {
    display: "inline-block",
  },
  miniImg: {
    height: "4rem",
  },
  select: {
    width: sizes.supportImg.width,
  },
  icon: {
    size: sizes[10],
  },
});
