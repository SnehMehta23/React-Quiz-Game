import React, { useState } from "react";
import "./social-post.css";

function SocialPost({ content, userName, numLikes, numThumbsUp, numSparkles }) {
  const [likeCount, setLikeCount] = useState(0);
  const [thumbsUpCount, setThumbsUpCount] = useState(0);
  const [sparklesCount, setSparklesCount] = useState(0);

  function incrementLikeCount() {
    setLikeCount((prevCount) => prevCount + 1);
  }

  function incrementThumbsUpCount() {
    setThumbsUpCount((prevCount) => prevCount + 1);
  }

  function incrementSparklesCount() {
    setSparklesCount((prevCount) => prevCount + 1);
  }

  return (
    <div className="post-container">
      <p className="content">{content}</p>
      <h4 className="username">-{userName}</h4>
      <button className="like-button" onClick={incrementLikeCount}>
        {likeCount}💙
      </button>
      <button className="thumbs-up-button" onClick={incrementThumbsUpCount}>
        {thumbsUpCount}👍
      </button>
      <button className="sparkles-button" onClick={incrementSparklesCount}>
        {sparklesCount}✨
      </button>
    </div>
  );
}
export default SocialPost;
