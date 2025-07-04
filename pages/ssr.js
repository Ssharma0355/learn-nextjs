import axios from "axios";
import React from "react";

const SSR = ({ users = [] }) => {
  // Client-side only logging (won't affect SSR)
  React.useEffect(() => {
    console.log("Users loaded:", users.length);
  }, [users]);

  return (
    <>
    <div>Sample</div>
      <p>SSR fetch</p>
      {users.length === 0 ? (
        <p>No users found</p>
      ) : (
        <ul>
          {users.map((user) => (
            <li key={user.id}>{user.name}</li>
          ))}
        </ul>
      )}
    </>
  );
};

export default SSR;

export async function getServerSideProps() {
  try {
    const { data } = await axios.get(
      "https://jsonplaceholder.typicode.com/users"
    );
    return {
      props: {
        users: Array.isArray(data) ? data : [], // Ensure we always return an array
      },
    };
  } catch (error) {
    console.error("Error fetching users:", error);
    return {
      props: {
        users: [],
      },
    };
  }
}
