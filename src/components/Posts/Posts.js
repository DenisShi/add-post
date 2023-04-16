import PostItems from "./PostItems";
import PostForm from "./PostForm";

import { fetchPosts } from "../../reducers/postsSlice";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

function Posts() {
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.posts.posts)
    .slice(-5)
    .reverse();

  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);

  return (
    <>
      <PostForm />
      <PostItems posts={posts} />
    </>
  );
}
export default Posts;
