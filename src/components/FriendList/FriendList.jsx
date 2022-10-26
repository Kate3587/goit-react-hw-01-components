import PropTypes from 'prop-types';
import FriendListItem from './FriendListItem/FriendListItem';
import { FriendsTab } from './FriendList.styled';

export default function FriendList({ friends }) {
    return (
        <FriendsTab>
            {
                friends.map(({id, name, avatar, isOnline})=> (
                    <FriendListItem
                        key={id}
                        name={name}
                        avatar={avatar}
                        isOnline ={isOnline}
                    />
                ))}
        </FriendsTab>
    );
};

FriendList.propTypes = {
    friends: PropTypes.arrayOf(PropTypes.exact({
        avatar:PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        isOnline: PropTypes.bool.isRequired,
        id: PropTypes.number.isRequired,
    }))
}


