import React, { useState, useEffect } from "react";
import Nav from "./Nav";
import { getPosts } from "../api/apiCalls";
import { Redirect } from "react-router-dom";
import { verifyUser } from "../api/apiUsers";

export default function Posts() {
  const [posts, setPosts] = useState([]);
  const [user, setUser] = useState(false);

  useEffect(() => {
    const handlePosts = async () => {
      try {
        const response = await getPosts();
        console.log(response);
        setPosts(response.posts);
      } catch (error) {
        console.log(error);
      }
    };
    handlePosts();
    const handleUser = async () => {
      try {
        const response = await verifyUser();
        console.log(response);
        setUser(true);
      } catch (error) {
        console.log(error);
      }
    };
    handleUser();
  }, []);

  let Site;
  if (user) {
    Site = (
      <div>
        <Nav />

        <div class="ui main text container moveDown">
          <div class="ui huge header">Blog App</div>
          <div class="ui top attached segment">
            <div class="ui divided items">
              {posts.map((post) => {
                return (
                  <div class="item">
                    <div class="content">
                      <a href={`/posts/${post.id}`} class="header">
                        {post.title}{" "}
                      </a>
                      <div class="meta">
                        <span>{post.post_date}</span>
                      </div>
                      <div class="description">
                        <p>{post.content.slice(0, 25)}</p>
                      </div>
                      <div class="extra">
                        <a
                          href={`/posts/${post.id}`}
                          class="ui floated basic teal button"
                        >
                          Read more
                        </a>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    Site = <Redirect to="/register" />;
  }

  return <React.Fragment>{Site}</React.Fragment>;
}
