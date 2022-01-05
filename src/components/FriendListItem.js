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
            <Status className={isOnline ? 'Online' : 'Offline'}>
                {isOnline}
            </Status>
            <Pic src={avatar} alt={name} width="48" />
            <FriendName>{name}</FriendName>
        </AllFriendsItems>
    ); 
}

FriendListItem.propTypes = {
    avatar: PropTypes.string,
    name: PropTypes.string,
    isOnline: PropTypes.bool,
};
export default FriendListItem;
