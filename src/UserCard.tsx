import React from "react";

interface User {
  id: number;
  name: string;
  email: string;
}

interface UserCardProps {
  user: User;
}

const UserCard: React.FC<UserCardProps> = ({ user }) => {
  return (
    <div style={{ border: "1px solid black", margin: "10px", padding: "10px" }}>
      <h2>{user.name}</h2>
      <p>Email: {user.email}</p>
    </div>
  );
};

export default UserCard;
