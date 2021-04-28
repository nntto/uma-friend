import { Grid } from "@material-ui/core";
import { Post } from "datas/post";
import PostTile from "./PostTile";

export default ({ posts }: { posts: Post[] }) => {
  return (
    <>
      <Grid container spacing={3}>
        {posts.map((item) => (
          <Grid item key={item.trainerId} xs={12} md={6} lg={4}>
            <PostTile key={item.trainerId} post={item} />
          </Grid>
        ))}
      </Grid>
    </>
  );
};
