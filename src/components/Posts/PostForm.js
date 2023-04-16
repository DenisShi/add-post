import styles from "./postForm.module.css";
import { useForm } from "react-hook-form";

import { useDispatch } from "react-redux";
import { postAdded } from "../../reducers/postsSlice";
import { addPostRequest } from "../../reducers/postsSlice";

function PostForm() {
  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    const postObj = {
      userId: 1,
      id: Date.now(),
      title: data.title,
      body: data.body,
    };
    reset();
    dispatch(addPostRequest(postObj));
    dispatch(postAdded(postObj));
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
      <input
        {...register("title", { required: true })}
        className={styles.title}
        placeholder="Title:"
      />
      {errors.title && (
        <span className={styles.errorMessage}>This field must be filled!</span>
      )}

      <textarea
        {...register("body", { required: true })}
        className={styles.body}
        placeholder="Text:"
      />
      {errors.body && (
        <span className={styles.errorMessage}>This field must be filled!</span>
      )}

      <button type="submit" className={styles.submitBtn}>
        Add
      </button>
    </form>
  );
}

export default PostForm;
