import { makeStyles } from "@material-ui/core/styles";
import React from "react";
import { color } from "style/theme";

const useStyle = makeStyles({
  headline: {
    margin: "5px 10px 5px",
    borderBottom: "3px solid",
    color: color.primary,
  },
  text: {
    margin: "0 20px 0",
  },
});

type Props = {
  headline: string;
  text: string | false;
};
export default ({ headline, text }: Props) => {
  const classes = useStyle();

  return (
    <>
      <div className={classes.headline}>{headline}</div>
      <div className={classes.text}>{text}</div>
    </>
  );
};
