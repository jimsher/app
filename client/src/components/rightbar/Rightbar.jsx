import "./rightbar.css";
import { Users } from "../../dummyData";
import Online from "../online/Online";
import { useEffect, useState } from "react";
import axios from "axios";


export default function Rightbar({user}) {
    const PF = process.env.REACT_APP_PUBLIC_FOLDER;
    const [friends, setFriends] = useState([]);

    useEffect(() => {
        const getFriends = async ()=>{
        try{
           const friendList = await axios.get("/users/friends/" + user._id);
           setFriends(friendList.data);
        } catch(err){
           
         }
        };
        getFriends();
    }, [user]);



    const HomeRightbar = () => {
        return (
            <>
            <div className="birthbayContainer">
                <img className="bithdayImg" src="assets/gift.png" alt=""/>
                <span className="birthdayText">
                    <b>Pola Foster</b> and <b>3 other friends</b> hav a birhday today
                </span>
            </div>
            <img className="rightbarAd" src="assets/ji.jpg" alt=""/>
            <h4 className="rightbarTitle">Online Friends</h4>
            <ul className="rightbarFriendList">
                {Users.map((u)=> (
                    <Online key={u.id} user={u}/>
                    ))}
            </ul>
            </>
        );
    };

    const ProfileRightbar = () =>{
        return (
            <>
            <h4 className="rightbarTitle">User information</h4>
            <div className="rightbarInfo">
                <div className="rightbarInfoItem">
                    <span className="rightbarInfoKey">City:</span>
                    <span className="rightbarInfoValue">{user.city}</span>
                </div>
                <div className="rightbarInfoItem">
                    <span className="rightbarInfoKey">From:</span>
                    <span className="rightbarInfoValue">{user.from}</span>
                </div>
                <div className="rightbarInfoItem">
                    <span className="rightbarInfoKey">Relationship:</span>
                    <span className="rightbarInfoValue">{user.relationship ===1 
                    ? "Single" 
                    : user.relationship ===1 
                    ? "Married" 
                    : "_"}
                    </span>
                </div>
            </div>
            <h4 className="rightbarTitle">your friends</h4>
            <div className="rightbarFollowings">
            {friends.map((friend) => (   
                <div className="rightbarFollowing">
                <img 
                src= {friend.profilePicture 
                    ? PF+ friend.profilePicture
                    : PF+ "person/noAvatar.jpg"
                }
                    alt="" 
                    className="rightbarFollowingImg"/>
                    <span className="rightbarFollowingName">{friend.username}</span>
                </div>
                ))}
            </div>
            </>
        )
    }
   return (
    <div className="rightbar">
        <div className="rightbarWrapper">
            {user ? <ProfileRightbar/> : <HomeRightbar/>}
        </div>
    </div>
   );

}