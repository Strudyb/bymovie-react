import axios from "axios";
import React, { useState } from "react";
import "./CreateBlog.css";

function CreateBlog({ blogs }) {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [author, setAuthor] = useState("");
  const [img, setİmg] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    let blogId = blogs.length + 1;
    const blog = { title, body, author, img, blogId };

    axios
      .post("http://localhost:3001/create", blog)
      .then((res) => {
        console.log("sended")
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="createBlog">
      <h1>Create a new blog</h1>
      <div className="form-area">
        <form action="" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="blog-title">Blog Title</label>
            <input
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              type="text"
              id="blog-title"
            />
          </div>

          <div className="form-group">
            <label htmlFor="blog-body">Blog Body</label>
            <textarea
              value={body}
              onChange={(e) => setBody(e.target.value)}
              type="text"
              id="blog-body"
            ></textarea>
          </div>

          <div className="form-group">
            <label htmlFor="blog-body">Blog Author</label>
            <select
              value={author}
              onChange={(e) => setAuthor(e.target.value)}
              name="blog-author"
              id="blog-author"
            >
              <option defaultValue value="Berk">
                Berk
              </option>
              <option value="Halil">Halil</option>
              <option value="Yoshi">Yoshi</option>
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="blog-img">Blog Image</label>
            <input
              value={img}
              onChange={(e) => setİmg(e.target.value)}
              type="text"
              id="blog-img"
            />
          </div>
          <button type="submit" className="submit-btn">Submit Post</button>
        </form>
      </div>
    </div>
  );
}

export default CreateBlog;
