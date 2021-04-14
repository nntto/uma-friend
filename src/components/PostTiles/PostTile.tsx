import { Post } from 'datas/post';
import KeishouTile from 'components/KeishouTile';

export default ({ post }: { post: Post }) => {
  return (
    <>
      <KeishouTile factors={post.mom.factors} umamusume={post.mom.umamusume} />
      <KeishouTile
        factors={post.grandMom1.factors}
        umamusume={post.grandMom1.umamusume}
      />
      <KeishouTile
        factors={post.grandMom2.factors}
        umamusume={post.grandMom2.umamusume}
      />
    </>
  );
};
