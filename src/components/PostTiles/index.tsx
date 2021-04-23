import { Post } from "datas/post";
import PostTile from "./PostTile";

export default ({ posts }: { posts: Post[] }) => {
  return (
    <>
      {posts.map((item) => (
        <PostTile key={item.trainerId} post={item} />
      ))}
    </>
  );
};
