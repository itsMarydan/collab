import React from "react";

interface UserCardProps {
  user: any;
}

const UserCard: React.FC<UserCardProps> = ({ user }) => {
  return (
    <div className="user-card">
      <img
        src={user.picture.large}
        alt={`${user.name.first} ${user.name.last}`}
      />
      <h3>{`${user.name.first} ${user.name.last}`}</h3>
      <p>{user.email}</p>
      <p>{user.phone}</p>
    </div>
  );
};

export default UserCard;
