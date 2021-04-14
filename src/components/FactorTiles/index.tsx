import { Grid } from '@material-ui/core';
import { Factor } from 'datas/factors';
import FactorTile from './FactorTile';

export default ({ factors }: { factors: Factor[] }) => (
  <Grid container spacing={2}>
    {factors.map((item) => (
      <Grid item xs={6} md={6} lg={4} xl={3}>
        <FactorTile factor={item} />
      </Grid>
    ))}
  </Grid>
);
