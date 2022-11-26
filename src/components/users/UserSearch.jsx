import { useState } from "react";
import { useContext } from "react";
import { GithubContext } from "../../contex/githubcontext/GithubContex";
import Button from "../UI/Button";

function UserSearch() {
  const [text, setText] = useState("");
  const { users, getUsers, clearUsers } = useContext(GithubContext);

  const submitHandler = (e) => {
    e.preventDefault();
    if (text.trim() === "") {
      alert("Please input something first");
    } else {
      getUsers(text);
      setText("");
    }
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="search">
        <input
          type="text"
          className="search-bar"
          placeholder="Search"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <Button className="gobutton">GO</Button>
        {users.length > 0 && (
          <div>
            <Button className="clearbutton" onClick={clearUsers}>
              CLEAR
            </Button>
          </div>
        )}
      </div>
    </form>
  );
}

export default UserSearch;
