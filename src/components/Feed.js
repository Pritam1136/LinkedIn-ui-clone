/* eslint-disable no-unused-vars */
import React from "react";
import "./Feed.css";
import { Create } from "@mui/icons-material";
import InputOption from "../inputOptions/InputOption";

function Feed() {
  return (
    <div className="feed">
      <div className="feed_inputContainer">
        <div className="feed_input">
          <Create />
          <form>
            <input type="text" />
            <button type="submit">Send</button>
          </form>
        </div>
        <div className="feed_inputOPtions">
          {/* <InputOption Icon={} title="Photo" color="violet" /> */}
        </div>
      </div>
    </div>
  );
}

export default Feed;
