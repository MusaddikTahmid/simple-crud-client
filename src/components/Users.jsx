import { useLoaderData } from "react-router-dom";

const Users = () => {
  const users = useLoaderData();

  const handleDelete = (_id) => {
    console.log("seleted users", _id);
    fetch(`http://localhost:5000/users/${_id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.deletedCount > 0) {
          alert("user deleted successfully");
        }
      });
  };

  return (
    <>
      <h2>{users.length}</h2>
      <div>
        {users.map((user) => (
          <div key={user._id}>
            <p>User ID : {user._id}</p>
            <h3>Name : {user.name}</h3>
            <p>Email : {user.email}</p>
            <button onClick={() => handleDelete(user._id)}>X</button>
          </div>
        ))}
      </div>
    </>
  );
};

export default Users;
