import { Alert, Color } from "@material-ui/lab";
import useStyle from "../style";

export default ({
  message,
  severity = "error",
}: {
  message?: string;
  severity?: Color;
}) => {
  const classes = useStyle();
  return (
    <Alert className={classes.alert} severity={severity}>
      {message}
    </Alert>
  );
};
