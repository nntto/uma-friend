import { DbState, Db } from "features";
import PostTile from "components/PostTiles/PostTile";
import {
  InputLabel,
  Input,
  MenuItem,
  FormControl,
  Select,
} from "@material-ui/core";
import { useSelector } from "react-redux";
import produce from "immer";
import {
  factorDatas,
  Factor,
  initialPost,
  moms,
  Post,
  FactorIdTypes,
} from "datas";
import { useState } from "react";
import { MenuProps, useStyles } from "./style";

const postUpdated = (
  setState: React.Dispatch<React.SetStateAction<Post>>,
  db: Db,
  payload: {
    index1: string;
    index2?: string;
    index3?: string;
    index4?: string;
    value: unknown | unknown[];
  }
) => {
  const { index1, index2, index3, value } = payload;

  setState((state) =>
    produce(state, (draftState) => {
      switch (index1) {
        case "mom":
        case "grandMom1":
        case "grandMom2":
          switch (index2) {
            case "factorIds": {
              switch (index3) {
                case "G1":
                case "skill": {
                  draftState[index1][index2][index3] = Array.from(
                    value as string
                  );
                  // factorIdsからfactors配列を作成
                  const newFactors = [] as Factor[];
                  draftState[index1][index2][index3].forEach((factorId) => {
                    newFactors.push(
                      db.factors.find(
                        (factor) => factor.id === factorId
                      ) as Factor
                    );
                  });
                  draftState[index1].factors[index3] = newFactors;
                  break;
                }
                case "status":
                case "appropriate":
                case "uniqueSkill": {
                  draftState[index1][index2][index3] = value as string;
                  draftState[index1].factors[index3] = db.factors.find(
                    (factor) => factor.id === value
                  ) as Factor;
                  break;
                }
                default:
                  throw new Error("invalid index2");
              }
              break;
            }
            case "factors": {
              console.log(payload);
              draftState[index1][index2][index3 as number].star = value as
                | 1
                | 2
                | 3
                | undefined;
              break;
            }
            default:
              throw new Error("invalid index2");
          }
          break;
        default:
          console.log(index1);
          throw new Error("invalid index1");
      }
    })
  );
};

export default () => {
  const classes = useStyles();

  const [post, setPost] = useState(initialPost);
  const db = useSelector<DbState, Db>((state) => state.db);

  const handleChange = (
    event: React.ChangeEvent<{ value: unknown }>,
    payload: {
      index1: string;
      index2?: string;
      index3?: string;
      index4?: string;
    }
  ) => {
    const { index1, index2, index3, index4 } = payload;
    postUpdated(setPost, db, {
      index1,
      index2,
      index3,
      index4,
      value: event.target.value,
    });
    console.log(post);
  };
  return (
    <>
      {moms.map((index1) =>
        Object.keys(factorDatas).map((factorType) => {
          return (
            <div>
              <div className={classes.box}>
                <FormControl className={classes.selectFactor}>
                  <InputLabel>
                    {factorDatas[factorType as FactorIdTypes]}
                  </InputLabel>
                  <Select
                    multiple={!!(factorType === "G1" || factorType === "skill")}
                    value={post[index1].factorIds[factorType as FactorIdTypes]}
                    onChange={(e) =>
                      handleChange(e, {
                        index1,
                        index2: "factorIds",
                        index3: factorType,
                      })
                    }
                    input={<Input />}
                    MenuProps={MenuProps}
                  >
                    {db.factors.map((factor) =>
                      factor.type === factorType ? (
                        <MenuItem key={factor.id} value={factor.id}>
                          {factor.name}
                        </MenuItem>
                      ) : null
                    )}
                  </Select>
                </FormControl>
              </div>
              <div className={classes.box}>
                {selectStarIds.map((factorId) => {
                  const factor = post[index1].factors[
                    factorType as FactorIdTypes
                  ].find((v) => v.id === factorId);
                  if (factor?.type !== factorType) return <></>;
                  const index3 = post[index1].factors[
                    factorType as FactorIdTypes
                  ].findIndex((v) => v.id === factorId);
                  return factor ? (
                    <FormControl className={classes.selectStar}>
                      <InputLabel>{factor.name}</InputLabel>
                      <Select
                        value={factor?.star}
                        onChange={(e) =>
                          handleChange(e, {
                            index1,
                            index2: "factors",
                            index3,
                          })
                        }
                        input={<Input />}
                        MenuProps={MenuProps}
                      >
                        {[1, 2, 3].map((star) => (
                          <MenuItem key={star} value={star}>
                            {"☆".repeat(star)}
                          </MenuItem>
                        ))}
                      </Select>
                    </FormControl>
                  ) : null;
                })}
              </div>
            </div>
          );
        })
      )}
      <PostTile post={post} />
    </>
  );
};
