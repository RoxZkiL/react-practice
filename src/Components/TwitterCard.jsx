import { useState } from "react";
import PropTypes from "prop-types";

const TwitterCard = ({ name, userName, avatar }) => {
  const [isFollowing, setIsFollowing] = useState(true);

  function handleClick() {
    isFollowing ? setIsFollowing(false) : setIsFollowing(true);
  }

  const displayName = name.trim() === "" ? TwitterCard.defaultProps.name : name;

  return (
    <article className="tw-card-container">
      <header className="tw-card-header">
        <img alt="card image" src={avatar} className="tw-card-img" />
        <div className="tw-card-header-div">
          <strong className="tw-card-name">{displayName}</strong>
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

TwitterCard.propTypes = {
  name: PropTypes.string,
  userName: PropTypes.string.isRequired,
  avatar: PropTypes.string,
};

TwitterCard.defaultProps = {
  name: "Deleted Account",
  userName: "Deleted User Name",
  avatar: "https://wallpapercave.com/w/wp7351908",
};

export default TwitterCard;
