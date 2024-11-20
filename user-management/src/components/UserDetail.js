import React from 'react';

const UserDetail = ({ user }) => {
  return (
    <div>
      <h2>User Details</h2>
      <p>Name: {user.name}</p>
      <p>Email: {user.email}</p>
      {/* Display other details as needed */}
    </div>
  );
};

export default UserDetail;