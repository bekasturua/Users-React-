import UserFinder from './components/UserFinder';
import UsersContext from './store/users-context';

const DUMMY_USERS = [
  { id: 'u1', name: 'Beka' },
  { id: 'u2', name: 'Anna' },
  { id: 'u3', name: 'Nini' },
  { id: 'u4', name: 'Ilia' },
  { id: 'u5', name: 'David' },
  { id: 'u6', name: 'George' },
];

function App() {
  const usersContext = {
    users: DUMMY_USERS
  }

  return (
    <UsersContext.Provider value={usersContext}>
      <UserFinder />
    </UsersContext.Provider>
  );
}

export default App;
