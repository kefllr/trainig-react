
const Profile = (options) =>{
    return(
        <div>
            <div>
                <img src={options.avatar} alt="" />
                <p>{options.name}</p>
                <p>{options.tag}</p>
                <p>{options.location}</p>
            </div>
            <ul>
                <li>
                    <span>followers</span>
                    <span>{options.stats.followers}</span>
                </li>
                <li>
                <span>Views</span>
                <span>{options.stats.views}</span>
                </li>
                <li>
                <span>Likes</span>
                <span>{options.stats.likes}</span>
                </li>
            </ul>
        </div>
    )

}
export default Profile