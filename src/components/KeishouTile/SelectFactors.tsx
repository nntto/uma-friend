import { FormControl, MenuItem, Select } from "@material-ui/core";
import { Factor, factorDatas, FactorTypes, keishoUmamusume } from "datas";

export default ({
  factorIds,
  dbFactors,
  handleChange,
}: {
  factorIds: keishoUmamusume["factorIds"];
  dbFactors: Factor[];
  handleChange: (
    event: any,
    index: string,
    factorType?:
      | "status"
      | "appropriate"
      | "uniqueSkill"
      | "G1"
      | "skill"
      | undefined,
    factorId?: string | undefined
  ) => void;
}) => {
  return (
    <>
      {Object.keys(factorIds).map((key) => {
        const factorType = key as FactorTypes;
        const isMulti = factorType === "G1" || factorType === "skill";
        const nullValue = isMulti ? [] : "";
        return (
          <div>
            <FormControl key={factorType}>
              <Select
                multiple={isMulti}
                labelId={`selector-${factorType}`}
                id={`selector-${factorType}`}
                displayEmpty
                value={
                  factorIds[factorType] ? factorIds[factorType] : nullValue
                }
                onChange={(e) => handleChange(e, "factor", factorType)}
                renderValue={
                  isMulti
                    ? (selected) => {
                        if ((selected as string[]).length === 0) {
                          return factorDatas[factorType];
                        }
                        return (selected as string[]).join(", ");
                      }
                    : undefined
                }
                disableUnderline
              >
                <MenuItem value="" disabled>
                  {factorDatas[factorType]}
                </MenuItem>
                {dbFactors
                  .filter((item) => item.type === factorType)
                  .map((itemFactor: Factor) => (
                    <MenuItem key={itemFactor.id} value={itemFactor.id}>
                      {itemFactor.name}
                    </MenuItem>
                  ))}
              </Select>
            </FormControl>
          </div>
        );
      })}
    </>
  );
};
