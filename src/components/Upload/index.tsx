import { useEffect, useState } from "react";
import { Post, initialPost } from "datas/post";
import { Support } from "datas/support";
import { Umamusume } from "datas/umamusume";
import { fetchDbData } from "functions";
import { Factor } from "datas/factors";
import PostTile from "components/PostTiles/PostTile";
import FactorTiles from "components/FactorTiles";

export default () => {
  const [post, setPost] = useState<Post>(initialPost);
  const [factors, setFactors] = useState<Factor[]>([]);
  const [umamusumes, setUmamusumes] = useState<Umamusume[]>([]);
  const [supports, setSupports] = useState<Support[]>([]);

  useEffect(() => {
    fetchDbData("factors", setFactors);
    fetchDbData("umamusumes", setUmamusumes);
    fetchDbData("supports", setSupports);
  }, []);
  return (
    <>
      <FactorTiles factors={factors} />
      <PostTile post={post} />
    </>
  );
};
