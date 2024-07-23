import { useState } from "react";

/* eslint-disable react/prop-types */
const TwitterCard = ({ name, userName, avatar }) => {
  const [isFollowing, setIsFollowing] = useState(true);

  function handleClick() {
    isFollowing ? setIsFollowing(false) : setIsFollowing(true);
  }

  return (
    <article className="tw-card-container">
      <header className="tw-card-header">
        <img alt="card image" src={avatar} className="tw-card-img" />
        <div className="tw-card-header-div">
          <strong className="tw-card-name">{name}</strong>
          <span className="tw-card-userName">@{userName}</span>
        </div>
      </header>
      <aside className="tw-card-button-container">
        <button
          className={`tw-card-button ${isFollowing ? "" : "unfollow"}`}
          onClick={handleClick}
        >
          {isFollowing ? "Follow" : "Unfollow"}
        </button>
      </aside>
    </article>
  );
};

export default TwitterCard;
