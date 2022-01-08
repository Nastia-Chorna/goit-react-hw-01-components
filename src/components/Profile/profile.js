import PropTypes from 'prop-types';
import {
  ProfileCard,
  Image,
  Name,
  Tag,
  Location,
  Subscribes,
  SubList,
  SubName,
  SubNumber

} from "./profile.styled";

function Profile({username, tag, location, avatar, followers, views, likes}) {
  return (
    <ProfileCard>
  <div>
    <Image src={avatar} alt={Name} />
    <Name>{username}</Name>
    <Tag>{tag}</Tag>
    <Location>{location}</Location>
  </div>

  <Subscribes>
    <SubList>
      <SubName>Followers</SubName>
      <SubNumber>{followers}</SubNumber>
    </SubList>
    <SubList>
      <SubName>Views</SubName>
      <SubNumber>{views}</SubNumber>
    </SubList>
    <SubList>
      <SubName>Likes</SubName>
      <SubNumber>{likes}</SubNumber>
    </SubList>
  </Subscribes>
</ProfileCard>
  );
} 
Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  followers: PropTypes.number.isRequired,
  views: PropTypes.number.isRequired,
  likes: PropTypes.number.isRequired,
};

export default Profile;
