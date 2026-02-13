import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchUser } from "./userSlice";

function Users() {
  const dispatch = useDispatch();
  const { users, loading, error } = useSelector((state) => state.user);

  useEffect(() => {
    dispatch(fetchUser());
  }, [dispatch]);

  if (loading) return <h2>Loading users...</h2>;
  if (error) return <h2>Error: {error}</h2>;

  return (
    <div className="users-container">
      {users && users.map((u) => (
        <div key={u.id} className="card">
          <h2>
            {u.name?.firstname} {u.name?.lastname}
          </h2>
          <p>
            <strong>Username:</strong> {u.username}
          </p>
          <p>
            <strong>Email:</strong> {u.email}
          </p>
          <p>
            <strong>Phone:</strong> {u.phone}
          </p>

          <h4>Address</h4>
          <p>
            {u.address?.number}, {u.address?.street}
          </p>
          <p>
            {u.address?.city}, {u.address?.zipcode}
          </p>

          <p>
            <strong>Lat:</strong> {u.address?.geolocation?.lat} |
            <strong> Long:</strong> {u.address?.geolocation?.long}
          </p>
        </div>
      ))}
    </div>
  );
}

export default Users;
