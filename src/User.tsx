import React, { useEffect, useState } from "react";
import axios from "axios";
import UserCard from "./UserCard";

interface User {
  id: number;
  name: string;
  email: string;
}

const USer: React.FC = () => {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get("https://jsonplaceholder.typicode.com/users");
        setUsers(response.data);
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    };

    fetchUsers();
  }, []);

  return (
    <div>
      <h1>User List</h1>
      <div>
        {users.map((user) => (
          <UserCard key={user.id} user={user} />
        ))}
      </div>
    </div>
  );
};

export default USer;
