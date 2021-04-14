import { makeStyles } from '@material-ui/core/styles';

export default makeStyles({
  root: {},
  card: {
    margin: '0 5px 0',
    position: 'relative',
    borderRadius: '5px',
    boxShadow: '1px 4px 0 rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23)',
  },
  name: {
    padding: '7px 5px 7px',
    margin: '5px 30px 0',
  },
  star: {
    zIndex: 1,
    width: '100%',
    position: 'absolute',
    textAlign: 'center',
    bottom: '-20px',
  },
  box: {
    margin: '10px 0 10px',
  },
});
