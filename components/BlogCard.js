import React from "react";
import styles from "../styles/blog-template.module.css";

export default function BlogCard({ title, author, slug, thumb }) {
  return (
      <a className={styles.link} href={"/blogs/" + slug}>
        <div className={styles.blogCard}>
          <img src={thumb} />
          <div className={styles.blogCardBody}>
            <h2 className={styles.blogCardH2}>{title}</h2>
            <h4 className={styles.blogCardH4}>- {author}</h4>
          </div>
        </div>
      </a>
  );
}
