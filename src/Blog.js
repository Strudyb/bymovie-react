import React from "react";
import { Link } from "react-router-dom";
import "./Blog.css";

function Blog({blogs}) {
  return (
    <div className="blog">
      {blogs.map((blog) => (
        <div key={blog.id} className="blog-item">
          <article>
            <div className="blog-img">
              <img
                width="100%"
                src={blog.img}
                alt={blog.title}
              />
            </div>

            <div className="blog-body">
              <h2>{blog.title}</h2>
              <p>{blog.body.substring(0, 120)} ...</p>

              <Link className="details-button" to={`blog/${blog.id}`}>
                Details
              </Link>
            </div>
          </article>
        </div>
      ))}
    </div>
  );
}

export default Blog;
