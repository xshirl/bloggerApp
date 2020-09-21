import React, { useState, useEffect } from "react";
import { verifyUser, login } from "../api/apiUsers";
import { createPost } from "../api/apiCalls";
import Nav from "./Nav";
import "../App.css";

export default function NewPost({ props }) {
  const [post, setPost] = useState({
    title: "",
    img: "",
    content: "",
    user_id: 0,
  });

  useEffect(() => {
    const handleUser = async () => {
      try {
        const response = await verifyUser();
        console.log(response);
        setPost({ ...post, user_id: response.user.id });
      } catch (error) {
        console.log(error);
      }
    };
    handleUser();
  }, []);

  const submitPost = async (e) => {
    e.preventDefault();

    try {
      console.log("submitPost", post);
      await createPost(post);
      props.history.push("/posts");
    } catch (error) {
      console.log(error);
    }
  };

  console.log(post);
  return (
    <div>
      <Nav />
      <div class="ui main text container segment mt-100">
        <div class="ui huge header salmon">New Blog </div>
        <form class="ui form" onSubmit={submitPost}>
          <div class="field">
            <label> Title </label>
            <input
              type="text"
              name="title"
              onChange={(e) => setPost({ ...post, title: e.target.value })}
              placeholder="title"
            />
          </div>

          <div class="field">
            <label> Image </label>
            <input
              type="text"
              name="img"
              onChange={(e) => setPost({ ...post, img: e.target.value })}
              placeholder="image"
            />
          </div>

          <div class="field">
            <label> Body </label>
            <textarea
              name="content"
              onChange={(e) => setPost({ ...post, content: e.target.value })}
              placeholder="blog post goes here"
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
