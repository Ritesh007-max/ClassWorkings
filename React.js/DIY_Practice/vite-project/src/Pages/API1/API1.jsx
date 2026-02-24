import { useGetUsersQuery } from './usersApi';
import { useState } from 'react';

const UsersList = () => {
    const [userId, setUserId] = useState('');
    const { data: users, error, isLoading } = useGetUsersQuery(userId || undefined);

    if (isLoading) return <p>Loading...</p>;
    if (error) return <p>Error loading users!</p>;

    function handleId(e) {
        setUserId(e.target.value);
    }

    return (
        <>
            <p>Enter Id</p>
            <input type="number" onChange={handleId} />
            <ul>
                {users?.map(user => <li key={user.id}>{user.name}</li>)}
            </ul>
        </>
    );
};

export default UsersList;
