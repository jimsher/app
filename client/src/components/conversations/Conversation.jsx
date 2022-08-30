import axios from "axios";
import { useEffect, useState } from "react";
import "./conversation.css"


export default function Conversation({conversation, currentUser}) {
    const [user, setUser] = useState(null);
    
    useEffect(()=>{
        const friendId = conversation.members.find(m=>m !== currentUser._id);
    
        const getUser = async ()=> {
            try{
            const res = await axios("/users?userId" + friendId);
            console.log(res);
            }catch(err){
                console.log(err);
            };
        };
        getUser()
    }, [currentUser, conversation]);
    
        return (
            <div className="conversation">
                <img className="conversationImg" src="person/15.jpg" alt="" />
                <span className="conversationName">jimi gvinjo</span>
            </div>
        );
    }