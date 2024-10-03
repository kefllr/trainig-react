const FriendItem = ({friend}) =>{
    return(
        <>
        <img src={friend.avatar} alt="" />
        <p>{friend.name}</p>
        <p>{friend.isOnline ? 'online' : 'offline'}</p>
        </>
    )
}
export default FriendItem;