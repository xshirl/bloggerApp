import React, { useState, useEffect } from "react";
import { getPost, deletePostById } from "../api/apiCalls";
import Nav from "./Nav";

export default function Post(props) {
  const [post, setPost] = useState({});

  useEffect(() => {
    const handlePost = async () => {
      try {
        const id = props.match.params.id;
        console.log(id);
        const response = await getPost(id);
        console.log(response.posts);
        setPost(response.posts);

        console.log(response);
      } catch (error) {
        console.log(error);
      }
    };
    handlePost();
  }, []);

  const deletePost = async (e) => {
    e.preventDefault();
    try {
      await deletePostById(post.id);
      props.history.push("/posts");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <Nav />
      <div class="ui main text container segment mt-100">
        <div class="ui huge header salmon">{post.title} </div>
        <div class="ui top attached">
          <div class="center item">
            <img
              class="ui centered rounded image"
              src={post.img}
              alt="Blog"
              width="600px"
            />
            <div class="content">
              <span>{post.post_date}</span> <br />
              <span>{post.username}</span>
            </div>
            <div class="description">
              <p>{post.content}</p>
            </div>
            <a href={`/posts/${post.id}/edit`} class="ui orange basic button">
              {" "}
              Edit{" "}
            </a>
            <form class="delete" onSubmit={deletePost}>
              <button class="ui red basic button">Delete </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
