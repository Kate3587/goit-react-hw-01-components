import PropTypes from 'prop-types';
import { Wrapper, Description, ProfileImg, ProfileName, ProfileQuantity, ProfileTag, ProfileLocation, ProfileLabel, Stats, StatsItem} from './Profile.styled';

export default function Profile({ username, tag, location, avatar, stats }) {
  return (
    <Wrapper>
      <Description>
        <ProfileImg
          src={avatar}
          alt="User avatar"
        />
        <ProfileName>{username}</ProfileName>
        <ProfileTag>@{tag}</ProfileTag>
        <ProfileLocation>{location}</ProfileLocation>
      </Description>

      <Stats>
        <StatsItem>
          <ProfileLabel>Followers</ProfileLabel>
          <ProfileQuantity>{stats.followers}</ProfileQuantity>
        </StatsItem>
        <StatsItem>
          <ProfileLabel>Views</ProfileLabel>
          <ProfileQuantity>{stats.views}</ProfileQuantity>
        </StatsItem>
        <StatsItem>
          <ProfileLabel>Likes</ProfileLabel>
          <ProfileQuantity>{stats.likes}</ProfileQuantity>
        </StatsItem>
      </Stats>
    </Wrapper>
  )
}

Profile.propTypes = {
    username: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    stats: PropTypes.shape({
        followers: PropTypes.number.isRequired,
        views: PropTypes.number.isRequired,
        likes: PropTypes.number.isRequired,
    })
    
};