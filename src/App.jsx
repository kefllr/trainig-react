
import './App.css'
import FriendList from './components/FriendList'
import Profile from './components/Profile'
import userData from './userData.json'
import friends from './friends.json'
import TransactionHistory from './components/TransactionHistory'
import transaction from './transactions.json'

function App() {
  return (
    <>
    <Profile name={userData.username}
             tag={userData.tag}
             location={userData.location}
             avatar={userData.avatar}
             stats={userData.stats} />
    <FriendList friends={friends}/>
    <TransactionHistory items={transaction}/>
    </>
  )
}

export default App
