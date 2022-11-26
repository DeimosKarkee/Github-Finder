import { Link } from "react-router-dom";
import Card from "../UI/Card";

function UserItem({ user: { login, avatar_url } }) {
  return (
    <Card>
      <div className="useritem">
        <div className="user_image">
          <img src={avatar_url} alt="profile" />
        </div>
        <div className="user_id">
          <p>{login}</p>
          <Link to={`/users/${login}`}>Visit Profile</Link>
        </div>
      </div>
    </Card>
  );
}

export default UserItem;
