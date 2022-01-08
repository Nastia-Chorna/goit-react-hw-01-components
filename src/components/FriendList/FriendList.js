import PropTypes from 'prop-types';
import FriendListItem from './FriendListItem';
import {
  AllFriends,

} from './friend.styled';

function FriendList({ friends }) {
  return (
    <AllFriends>
    
      {friends.map(friend => (
        <FriendListItem
          key={friend.id}
          avatar={friend.avatar}
          name={friend.name}
          isOnline={friend.isOnline}
        />
      ))}
      
    </AllFriends>
  );
}

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      avatar: PropTypes.object.isRequired,
      name: PropTypes.number.isRequired,
      isOnline: PropTypes.bool.isRequired,
    })
  ),
};

export default FriendList;