import { useState } from "react";
import { post } from "./infomation";

function Posts() {
  const [getArray, setGetArray] = useState(post.map((item) => item.likes));
  const [getInfo, setGetInfo] = useState(post);

  const addLike = (index) => {
    const newArray = [...getArray];
    newArray[index] += 1;
    setGetArray(newArray);
  };
  const reduceLike = (index) => {
    const newArray = [...getArray];
    newArray[index] > 0 ? (newArray[index] -= 1) : (newArray[index] = 0);
    setGetArray(newArray);
  };

  return (
    <div className="app-wrapper">
      <h1 className="app-title">Posts</h1>
      <div className="post-list">
        {getInfo.map((item, index) => {
          return (
            <div key={index} className="post-item">
              <div className="post-header">
                <h2>
                  {item.title} #{item.id}
                </h2>
                <div className="post-social-media-stats">
                  <span className="stats-topic">Likes: </span>
                  <span className="post-likes">{getArray[index]}</span>
                </div>
              </div>
              <p className="post-content">{item.content}</p>
              <div className="post-actions">
                <button className="like-button" onClick={() => addLike(index)}>
                  Like
                </button>
                <button
                  className="dislike-button"
                  onClick={() => reduceLike(index)}
                >
                  Dislike
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Posts;
