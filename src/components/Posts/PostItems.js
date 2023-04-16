import styles from "./postItems.module.css";

function PostItems({ posts }) {
  return (
    <div className={styles.container}>
      {posts.map((item) => {
        return (
          <div key={item.id} className={styles.item}>
            <h5 className={styles.user}>{item.userId}</h5>
            <h4 className={styles.title}>{item.title}</h4>
            <p className={styles.body}>{item.body}</p>
          </div>
        );
      })}
    </div>
  );
}
export default PostItems;
