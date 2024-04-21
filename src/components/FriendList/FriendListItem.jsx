import styles from "./FriendList.module.css";

const FriendListItem = ({ avatar, name, isOnline }) => {
  // refactoring
  const statusText = isOnline ? "Online" : "Offline";
  const statusClass = isOnline ? "status-online" : "status-offline";

  return (
    <div>
      <img src={avatar} alt="Avatar" width="48" />
      <p>{name}</p>
      <p className={styles[statusClass]}>{statusText}</p>
    </div>
  );
};

export default FriendListItem;
