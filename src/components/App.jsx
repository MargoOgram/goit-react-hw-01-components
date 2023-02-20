import { Profile } from 'components/Profile/Profile';
import { Statistics } from 'components/Statistics/Statistics';
import { TransactionHistory } from 'components/TransactionHistory/TransactionHistory';


import  transactions from 'bd/transactions';
import data from 'bd/data';
import user from 'bd/user';

export const App = () => {
  return (
   <>
    <Profile
          username={user.username}
          tag={user.tag}
          location={user.location}
          avatar={user.avatar}
          stats={user.stats}
    />
      <Statistics stats={data} />
       <TransactionHistory transactions={transactions} />
    </>
    
    
  );
};