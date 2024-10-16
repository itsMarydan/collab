import React, { useEffect, useState } from "react";
import UserList from "../UserList";
import { fetchUsers } from "../services/userService";

const Home: React.FC = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetchUsers().then((data) => setUsers(data.results));
  }, []);

  return (
    <div className="home-page">
      <h2>Passenger List</h2>
      <UserList users={users} />
    </div>
  );
};

export default Home;
