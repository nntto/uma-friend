import { Factor } from 'datas/factors';
import Rating from '@material-ui/lab/Rating';
import { color } from 'style/theme';
import useStyles from './style';

export default ({ factor }: { factor: Factor }) => {
  const classes = useStyles();
  return (
    <>
      <div
        className={classes.card}
        style={{
          backgroundColor: color.factor[factor.type].background,
          color: color.factor[factor.type].color,
        }}
      >
        <div className={classes.name}>{factor.name}</div>
        <div className={classes.star}>
          {factor.star ? (
            <Rating defaultValue={factor.star} max={3} readOnly size="large" />
          ) : (
            <Rating defaultValue={0} max={3} size="large" />
          )}
        </div>
      </div>
    </>
  );
};
