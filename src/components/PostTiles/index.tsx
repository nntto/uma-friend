import { Grid } from '@material-ui/core';
import { Post } from 'datas/post';
import PostTile from './PostTile';

export default ({ posts }: { posts: Post[] }) => (
  <Grid container spacing={5}>
    {posts.map((item) => (
      <Grid item xs={12} md={10} lg={10}>
        <PostTile post={item} />
      </Grid>
    ))}
  </Grid>
);
