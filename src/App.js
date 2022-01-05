import Profile from './components/profile';
import users from './users.json';
import Stats from './components/stats';
import data from './data.json';
import FriendList from './components/FriendList';
import friends from './friends.json';
import TransactionHistory from './components/TransactionHistory';
import transactions from './transactions.json';
import { Container } from './App.styled';


function App() {
    return (
<Container>
        <Profile
  username={users.username}
  tag={users.tag}
  location={users.location}
  avatar={users.avatar}
  followers={users.stats.followers}
  views={users.stats.views}
  likes={users.stats.likes}
/>
 
        <Stats
         title="Upload stats" stats={data} 
        stats={data} 

/>
        <FriendList
           friends={friends}
/>          
        <TransactionHistory items={transactions} /> 
 </Container>
    );
}
export default App;
