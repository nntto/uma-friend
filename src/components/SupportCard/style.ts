import { makeStyles } from "@material-ui/core/styles";
import { color, sizes } from "style/theme";

export default makeStyles({
  icon: {
    color: color.stack,
  },
  parent: {
    postision: "relative",
    width: `${sizes.supportImg.width}px`,
    height: `${sizes.supportImg.height}px`,
  },
  rating: {
    position: "relative",
    bottom: "33px",
    left: "20px",
    transform: "scale(1.2, 1.2)",
    zIndex: 1,
  },
  level: {
    position: "relative",
    bottom: "60px",
    left: "100px",
    fontSize: sizes[6],
    zIndex: 1,
  },
  box: {
    position: "relative",
    height: "40px",
    width: "100%",
    bottom: "95px",
    backgroundColor: "white",
    opacity: 0.5,
    borderRadius: "0 0 15px 15px",
    zIndex: 0,
  },
});
