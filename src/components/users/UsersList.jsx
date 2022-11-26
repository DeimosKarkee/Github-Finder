import { useContext } from "react";
import { GithubContext } from "../../contex/githubcontext/GithubContex";

function UsersList() {
  const { users, loading } = useContext(GithubContext);
  console.log(users);
  if (loading) return <h3>Loading....</h3>;
  return <>{users.map((user) => user.login)}</>;
}

export default UsersList;
