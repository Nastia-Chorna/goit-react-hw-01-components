import styled from '@emotion/styled'

export const AllFriends = styled.ul`
padding-top: 30px;
margin: 0 auto;
background-color: #ffffff;
width: 760px;
`;
export const AllFriendsItems = styled.li`
width: 600px;
display: flex;
margin: 0 auto;
 align-items: center;
 margin-top: 5px;
padding: 10px;
background-color: #ffffff;
box-shadow: 0 2.8px 2.2px rgba(0, 0, 0, 0),
    0 6.7px 5.3px rgba(0, 0, 0, 0.048), 0 12.5px 10px rgba(0, 0, 0, 0.06),
    0 22.3px 17.9px rgba(0, 0, 0, 0.072), 0 41.8px 33.4px rgba(0, 0, 0, 0.086),
    0 100px 80px rgba(0, 0, 0, 0);
}
`;
export const Status = styled.span`
  width: 20px;
  height: 20px;
  background-color: ${({ isOnline }) => {
    return isOnline ? 'green' : 'red';
  }};
  border-radius: 50%;
`;

export const Pic = styled.img`
  margin: 0 10px;
`;

export const FriendName = styled.p`
  font-weight: 700;
  font-size: 20px;
  line-height: 1.15;
`;
