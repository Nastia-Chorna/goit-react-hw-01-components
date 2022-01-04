import Profile from './components/profile';
import users from './users.json';

export default function App() {
    return <div >
        <Profile
  username={users.username}
  tag={users.tag}
  location={users.location}
  avatar={users.avatar}
  followers={users.stats.followers}
  views={users.stats.views}
  likes={users.stats.likes}
/>
    </div>
}
