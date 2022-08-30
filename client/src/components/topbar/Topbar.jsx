import "./topbar.css";
import { Search, Person, Chat, Notifications } from '@mui/icons-material';
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../context/AutchContext";


export default function Topbar() {
    const {user} = useContext(AuthContext);
    const PF = process.env.REACT_APP_PUBLIC_FOLDER;
    return (
        <div className="topbarContainer">
        <div className="topbarLeft">
        <Link to="/" style={{textDecoration:"none"}}>
           <span className="logo">STUDBOOK</span>
        </Link>
        </div>
        <div className="topbarCenter">
            <div className="searchbar">
                <Search/>
                <input placeholder="Search for friend, post or video" className="searchInput" />
            </div>
        </div>
        <div className="topbarRight">
            <div className="topbarLinks">
                <span className="topbarLink">Homepage</span>            
                <span className="topbarLink">Timeline</span>
            </div>
            <div className="topbarIcons">
                <div className="topbarIconitem">
                <Link to="person" style={{textDecoration:"none"}}>
                     <Person/>
                     </Link>
                    <span className="topbarIconBadge">1</span>
                </div>
                <div className="topbarIconitem">
                <Link to="messenger" style={{textDecoration:"none"}}>
                    <Chat/>
                    </Link>
                    <span className="topbarIconBadge">12</span>
                </div>
                <div className="topbarIconitem">
                <Link to="Notifications" style={{textDecoration:"none"}}>
                    <Notifications/>
                    </Link>
                    <span className="topbarIconBadge">1</span>
                </div>
            </div>
            <Link to={`/profile/${user.username}`}>
            <img 
            src={ 
                user.profilePicture 
                ? PF + user.profilePicture 
                : PF+"person/noAvatar.jpg"} alt="" className="topbarImg"/>
            </Link>
           </div>

            
        </div>
            
    );
}