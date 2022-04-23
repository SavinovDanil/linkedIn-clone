import React from 'react';
import CreateIcon from '@mui/icons-material/Create';
import ImageIcon from '@mui/icons-material/Image';
import SubscriptionsIcon from '@mui/icons-material/Subscriptions';
import EventNoteIcon from '@mui/icons-material/EventNote';
import ViewDayIcon from '@mui/icons-material/ViewDay';
import './Feed.css';
import InputOptions from './InputOptions';
import Post from './Post';

function Feed() {
  return (
    <div className="feed">
      <div className="feed__inputContainer">
        <div className="feet__input">
          <CreateIcon />
          <form>
            <input type="text" />
            <button type="submit">Send</button>
          </form>
        </div>
        <div className="feed__inputOptions">
          <InputOptions Icon={ImageIcon} title="Photo" color="#70B5F9" />
          <InputOptions Icon={SubscriptionsIcon} title="Video" color="#E7A33E" />
          <InputOptions Icon={EventNoteIcon} title="Event" color="#C0CBCD" />
          <InputOptions Icon={ViewDayIcon} title="Wtite article" color="#7FC15E" />
        </div>
      </div>
      <Post name="Savinov Danil" description="This is a test" message="I love reactjs" />
    </div>
  );
}

export default Feed;
