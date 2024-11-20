import React, { useState, useEffect } from 'react';
import UserForm from './UserForm';
import UserDetail from './UserDetail';
import { getUsers, deleteUser } from '../services/userService';

const UserList = () => {
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUsers = async () => {
      setIsLoading(true);
      setError(null);
      try {
        const fetchedUsers = await getUsers();
        setUsers(fetchedUsers);
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchUsers();
  }, []);

  const handleAddUser = () => {
    setSelectedUser(null);
  };

  const handleEditUser = (user) => {
    setSelectedUser(user);
  };

  const handleDeleteUser = async (id) => {
    try {
      await deleteUser(id);
      setUsers(users.filter(user => user.id !== id));
    } catch (error) {
      console.error('Error deleting user:', error);
    }
  };

  return (
    <div>
      <h2>User List</h2>
      <button onClick={handleAddUser}>Add User</button>
      {isLoading ? (
        <p>Loading users...</p>
      ) : error ? (
        <p>Error fetching users: {error.message}</p>
      ) : (
        <ul>
          {users.map(user => (
            <li key={user.id}>
              {user.name}
              <button onClick={() => handleEditUser(user)}>Edit</button>
              <button onClick={() => handleDeleteUser(user.id)}>Delete</button>
            </li>
          ))}
        </ul>
      )}
      {selectedUser && <UserDetail user={selectedUser} />}
      <UserForm user={selectedUser} />
    </div>
  );
};

export default UserList;