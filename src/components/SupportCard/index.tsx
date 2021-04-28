import { imageSource } from "datas/imageSource";
import { Support } from "datas/support";
import { ImDiamonds } from "react-icons/im";
import { sizes } from "style/theme";
import { useStyles, StyledRating } from "./style";

export default ({
  support,
  stack,
  level,
}: {
  support: Support;
  stack: 0 | 1 | 2 | 3 | 4;
  level: number;
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
