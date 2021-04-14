import Rating from '@material-ui/lab/Rating';
import { Support } from 'datas/support';
import { ImDiamonds } from 'react-icons/im';
import { sizes } from 'style/theme';
import useStyles from './style';

export default ({
  support,
  stack,
  level,
}: {
  support: Support;
  stack: 1 | 2 | 3 | 4;
  level: Number;
}) => {
  const classes = useStyles();
  return (
    <>
      <p>{level}</p>
      <div className={classes.parent}>
        <img
          src={support.imgUrl}
          alt=""
          width={sizes.supportImg.width}
          height={sizes.supportImg.height}
        />

        <div className={classes.rating}>
          <Rating
            defaultValue={stack}
            max={4}
            icon={<ImDiamonds className={classes.icon} />}
            readOnly
            size="small"
          />
        </div>
        <div className={classes.level}>{`Lv${level}`}</div>
        <div className={classes.box} />
      </div>
    </>
  );
};
