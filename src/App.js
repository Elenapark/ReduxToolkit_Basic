import AddPostForm from "./features/posts/AddPostForm";
import PostLists from "./features/posts/PostLists";

function App() {
  return (
    <main className="App">
      <PostLists />
      <AddPostForm />
    </main>
  );
}

export default App;
