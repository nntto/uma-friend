import { FormControl, MenuItem } from "@material-ui/core";
import { Post } from "datas";
import { imageSource } from "datas/imageSource";
import { Support } from "datas/support";
import produce from "immer";
import { ImDiamonds } from "react-icons/im";
import { sizes } from "style/theme";
import { useStyles, StyledRating, StyledSelect } from "./style";

export default ({
  support,
  stack,
  level,
  setPost,
}: {
  support: Support;
  stack: 1 | 2 | 3 | 4;
  level: number;
  setPost?: React.Dispatch<React.SetStateAction<Post>> | undefined;
}) => {
  const classes = useStyles();

  return (
    <>
      <div className={classes.parent}>
        <img
          src={imageSource.supportCards[support.id]}
          alt=""
          width={sizes.supportImg.width}
          height={sizes.supportImg.height}
        />

        <div className={classes.rating}>
          <StyledRating
            style={{ zIndex: 11 }}
            name="select-rating"
            value={stack}
            max={4}
            readOnly
            icon={<ImDiamonds className={classes.icon} />}
            size="small"
          />
        </div>
        <div className={classes.level}>{`Lv${level}`}</div>

        <div className={classes.box} />
      </div>
    </>
  );
};
