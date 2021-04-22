import PostTile from "components/PostTiles/PostTile";
import { initialPost } from "datas";
import { useState } from "react";

export default () => {
  const [post, setPost] = useState(initialPost);
  return <PostTile post={post} setPost={setPost} />;
};
