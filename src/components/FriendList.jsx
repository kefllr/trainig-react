import FriendItem from "./FriendItem";


const FriendList =({friends}) =>{
    return(
        <ul>
            {friends.map((friend) =>(
                <li key={friend.id}>
                    <FriendItem friend={friend}/>
                </li>
            ))}
        </ul>
    )
}
export default FriendList;