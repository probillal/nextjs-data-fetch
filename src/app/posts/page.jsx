// const getPosts = async () => {
//   const res = await fetch("https://jsonplaceholder.typicode.com/posts");
//   return res.json();
// };

const getPosts = async () => {
  try {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts");
    return res.json();
  } catch (error) {
    console.error("Error fetching posts:", error);
  }
};

const PostsPage = async () => {
  //   const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  //   const posts = await res.json();
  //   console.log(posts);
  const posts = await getPosts();
  console.log(posts);
  return (
    <div>
      <h2>Posts are coming soon: {posts.length}</h2>
    </div>
  );
};

export default PostsPage;
