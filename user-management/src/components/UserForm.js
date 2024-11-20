import React, { useState } from 'react';
import { addUser, updateUser } from '../services/userService'; // Optional: Use userService

const UserForm = ({ user }) => {
  const [formData, setFormData] = useState({
    name: user ? user.name : '',
    email: user ? user.email : '',
    // Add other fields as needed
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (user) {
        await updateUser(formData); // Update existing user
      } else {
        await addUser(formData); // Add new user
      }
      // Handle success, e.g., clear form, update user list
    } catch (error) {
      // Handle error, e.g., display error message
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      {/* Input fields for name, email, etc. */}
      <button type="submit">{user ? 'Update User' : 'Add User'}</button>
    </form>
  );
};

export default UserForm;