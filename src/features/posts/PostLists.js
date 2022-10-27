import { useSelector } from "react-redux";
import PostAuthor from "./PostAuthor";
import { selectAllPosts } from "./postSlice";

const PostLists = () => {
  const posts = useSelector(selectAllPosts);

  return (
    <section>
      <h2>Posts</h2>
      {posts.map((post) => {
        return (
          <article key={post.id}>
            <h3>{post.title}</h3>
            <p>{post.content.substring(0, 100)}</p>
            <p className="postCredit">
              <PostAuthor userId={post.userId} />
            </p>
          </article>
        );
      })}
    </section>
  );
};

export default PostLists;
