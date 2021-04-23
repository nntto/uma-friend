import { FormControl, MenuItem, Select } from "@material-ui/core";
import { Post } from "datas";
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

  const handleChange = (event: any, index: string) => {
    if (!setPost) throw new Error("cannot update");

    setPost((state) =>
      produce(state, (draftState) => {
        const value = event.target.value;
        if (index === "stack" || index === "level") draftState[index] = value;
      })
    );
  };

  return (
    <>
      <div className={classes.parent}>
        <img
          src={support.imgUrl}
          alt=""
          width={sizes.supportImg.width}
          height={sizes.supportImg.height}
        />

        <div className={classes.rating}>
          <StyledRating
            style={{ zIndex: 11 }}
            value={stack}
            max={4}
            readOnly={!setPost}
            onChange={(e) => handleChange(e, "stack")}
            icon={<ImDiamonds className={classes.icon} />}
            size="small"
          />
        </div>
        <div className={classes.level}>
          {setPost ? (
            <FormControl>
              <StyledSelect
                labelId="select-level"
                id="select-level"
                value={level}
                onChange={(e) => handleChange(e, "level")}
              >
                {[...Array(50)]
                  .map((_, i) => i + 1)
                  .map((number) => (
                    <MenuItem key={number} value={number}>
                      {`Lv${number}`}
                    </MenuItem>
                  ))}
              </StyledSelect>
            </FormControl>
          ) : (
            `Lv${level}`
          )}
        </div>

        <div className={classes.box} />
      </div>
    </>
  );
};
