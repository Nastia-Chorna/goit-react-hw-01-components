import PropTypes from 'prop-types';

function FriendListItem({ avatar, name, isOnline }) {
    return (
        <li>
            <span className={isOnline ? 'Online' : 'Offline'}>
                {isOnline}
            </span>
            <img src={avatar} alt={name} width="48" />
            <p>{name}</p>
        </li>
    ); 
}

FriendListItem.propTypes = {
    avatar: PropTypes.string,
    name: PropTypes.string,
    isOnline: PropTypes.bool,
};
export default FriendListItem;
