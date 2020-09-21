import React, { useState, useEffect } from "react";
import Nav from "./Nav";
import { getPosts } from "../api/apiCalls";
import { Redirect } from "react-router-dom";
import { verifyUser } from "../api/apiUsers";

export default function Posts() {
  const [posts, setPosts] = useState([]);
  const [user, setUser] = useState(false);

  // useEffect(() => {
  //   const handleUser = async () => {
  //     try {
  //       const response = await verifyUser();
  //       console.log(response);
  //       setUser(true);
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   };
  //   handleUser();
  // });

  useEffect(() => {
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
  }, []);
  console.log("user", user);
  let Site;
  if (true) {
    Site = (
      <div>
        <Nav />

        <div class="ui main text container moveDown mt-100">
          <div class="ui huge header">Blog App</div>
          <div class="ui top attached segment">
            <div class="ui divided items">
              {posts.map((post) => {
                let content = post.content.split(" ").slice(0, 5).join(" ");
                content += "...";
                return (
                  <div class="item">
                    <div class="image">
                      <img src={post.img} alt={post.title} width="200px" />
                    </div>
                    <div class="content">
                      <a href={`/posts/${post.id}`} class="header">
                        {post.title}{" "}
                      </a>
                      <div class="meta">
                        <span>{post.post_date.slice(0, 10)}</span>
                      </div>
                      <div class="description">
                        <p>{content}</p>
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
