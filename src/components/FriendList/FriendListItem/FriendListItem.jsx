import PropTypes from 'prop-types';
import {FriendItem, Status, FriendAvatar, FriendName} from '../FriendListItem/FriendListItem.styled'


export default function FriendListItem({name, avatar, isOnline}) {
    return (
            <FriendItem>
            <Status style={{backgroundColor: isOnline ? 'green' : 'red' }}>{isOnline}</Status>
                <FriendAvatar src={avatar} alt="User avatar" width="48" />
                <FriendName>{name}</FriendName>
            </FriendItem>
        );
};

FriendListItem.propTypes = {
    name: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
}
