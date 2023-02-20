import { Profile } from 'components/Profile/Profile';
import user from 'bd/user';

export const App = () => {
  return (
   
    <Profile
          username={user.username}
          tag={user.tag}
          location={user.location}
          avatar={user.avatar}
          stats={user.stats}
        />
    
  );
};