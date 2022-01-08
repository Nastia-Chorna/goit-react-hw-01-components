import PropTypes from 'prop-types';
import {
    AllFriendsItems,
    Status,
    Pic,
    FriendName

} from './friend.styled';

function FriendListItem({ avatar, name, isOnline }) {
    return (
        <AllFriendsItems>
            <Status isOnline={isOnline}></Status>
            <Pic src={avatar} alt={name} width="48" />
            <FriendName>{name}</FriendName>
        </AllFriendsItems>
    ); 
}

FriendListItem.propTypes = {
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
};
export default FriendListItem;
