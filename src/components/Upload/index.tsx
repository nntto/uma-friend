import { Button } from "@material-ui/core";
import PostTile from "components/PostTiles/PostTile";
import { initialPost } from "datas";
import { useState } from "react";
import { upload } from "functions";

export default () => {
  const [post, setPost] = useState(initialPost);

  return (
    <>
      <PostTile post={post} setPost={setPost} />
      <Button onClick={() => upload(post)}>アップロード</Button>
    </>
  );
};
