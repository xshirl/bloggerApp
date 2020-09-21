import React, { useState, useEffect } from "react";
import Nav from "./Nav";
import { getPost, updatePostById } from "../api/apiCalls";

export default function EditPost(props) {
  const [post, setPost] = useState({});
  useEffect(() => {
    const handlePost = async () => {
      try {
        const id = props.match.params.id;
        const response = await getPost(id);
        setPost(response);
        console.log(response);
      } catch (error) {
        console.log(error);
      }
    };
    handlePost();
  }, []);

  const editPost = async (e) => {
    e.preventDefault();
    try {
      await updatePostById(post.id, post);
      props.history.push("/posts");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <Nav />
      <div class="ui main text container segment mt-100">
        <div class="ui huge header salmon">Edit Post</div>
        <form class="ui form" onSubmit={editPost}>
          <div class="field">
            <label> Title </label>
            <input
              type="text"
              name="title"
              onChange={(e) => setPost({ ...post, title: e.target.value })}
              placeholder={post.title}
            />
          </div>

          <div class="field">
            <label> Image </label>
            <input
              type="text"
              name="img"
              onChange={(e) => setPost({ ...post, img: e.target.value })}
              placeholder={post.img}
            />
          </div>

          <div class="field">
            <label> Body </label>
            <textarea
              name="content"
              onChange={(e) => setPost({ ...post, content: e.target.value })}
              placeholder={post.content}
            >
              {" "}
            </textarea>
          </div>

          <input class="ui teal big basic button" type="submit" />
        </form>
      </div>
    </div>
  );
}
