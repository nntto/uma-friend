import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles({
  selectFactor: {
    minWidth: 120,
    maxWidth: 300,
  },
  selectStar: {
    minWidth: 90,
    margin: "0 5px",
  },
  box: {
    display: "inline-block",
    margin: "0 15px",
  },
});
export const ITEM_HEIGHT = 48;
export const ITEM_PADDING_TOP = 8;
export const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};
