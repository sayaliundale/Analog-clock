import BlogCard from "../../components/BlogCard";
import styles from "../../styles/blog-template.module.css";
import style from "../../styles/Blog.module.scss";
import blogsData from "../../public/blogsData";

export default function Blog() {
  const blogs = blogsData.map((blog) => {
    return (
      <BlogCard
        key={blog.id}
        title={blog.title}
        author={blog.author}
        slug={blog.slug}
        thumb={blog.thumb}
      />
    );
  });
  return (
    <div className={style.container}>
      <div className={style.container1}>
        <div className={styles.flexContainer} id="blogContainer">
          {blogs}
        </div>
      </div>
    </div>
  );
}
