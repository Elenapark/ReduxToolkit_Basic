import { useSelector } from "react-redux";
import PostAuthor from "./PostAuthor";
import { selectAllPosts } from "./postSlice";
import ReactionButtons from "./ReactionButtons";
import TimeAgo from "./TimeAgo";

const PostLists = () => {
  const posts = useSelector(selectAllPosts);
  // ordering posts from the recent one and shallow copy with slice method
  const orderedPosts = posts
    .slice()
    .sort((a, b) => b.date.localeCompare(a.date));

  return (
    <section>
      <h2>Posts</h2>
      {orderedPosts.map((post) => {
        return (
          <article key={post.id}>
            <h3>{post.title}</h3>
            <p>{post.content.substring(0, 100)}</p>
            <p className="postCredit">
              <PostAuthor userId={post.userId} />
              <TimeAgo timestamp={post.date} />
            </p>
            <ReactionButtons post={post} />
          </article>
        );
      })}
    </section>
  );
};

export default PostLists;
