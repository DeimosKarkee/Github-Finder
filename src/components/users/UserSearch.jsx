import { useState } from "react";
import { useContext } from "react";
import { GithubContext } from "../../contex/githubcontext/GithubContex";

function UserSearch() {
  const [text, setText] = useState("");
  const { users, getUsers } = useContext(GithubContext);

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
        <button className="button gobutton">GO</button>
        {users.length > 0 && (
          <div>
            <button className="button clearbutton">CLEAR</button>
          </div>
        )}
      </div>
    </form>
  );
}

export default UserSearch;
