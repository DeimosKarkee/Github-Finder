import { useContext } from "react";
import { GithubContext } from "../../contex/githubcontext/GithubContex";
import UserItem from "./UserItem";

function UsersList() {
  const { users, loading } = useContext(GithubContext);
  console.log(users);
  if (loading) return <h3>Loading....</h3>;
  return (
    <div className="userslist">
      {users.map((user) => (
        <UserItem key={user.id} user={user} />
      ))}
    </div>
  );
}

export default UsersList;
