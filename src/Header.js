import React from 'react'
import "./Header.css";
import SearchIcon from '@material-ui/icons/Search';
import HomeIcon from '@material-ui/icons/Home';
import FlagIcon from '@material-ui/icons/Flag';
import SupervisedUserCircleIcon from '@material-ui/icons/SupervisedUserCircle';
import SubscriptionsIcon from '@material-ui/icons/Subscriptions';
import StorefrontOutLinedIcon from '@material-ui/icons/StorefrontOutlined';
import { Avatar, IconButton } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import ForumIcon from '@material-ui/icons/Forum';
import NotificationsActiveIcon from '@material-ui/icons/NotificationsActive';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import {useStateValue} from "./StateProvider";



function Header() {
const [{ user }, dispatch] = useStateValue();
    return (
        <div className="header">
            <div className="header_left">
                <img src="https://upload.wikimedia.org/wikipedia/commons/4/44/Facebook_Logo.png" alt=""/>

                <div className="header_input">
                    <SearchIcon />
                    <input type="text" placeholder="Search Facebook" />
                </div>
            </div>
            <div className="header_center">
                <div className="header_option header_option--active">
                  <HomeIcon fontsize="large" />   
                </div>
                <div className="header_option">
                  <FlagIcon fontsize="large" />   
                </div>
                <div className="header_option">
                  <SubscriptionsIcon fontsize="large" />   
                </div>
                <div className="header_option">
                  <StorefrontOutLinedIcon fontsize="large" />   
                </div>
                <div className="header_option">
                  <SupervisedUserCircleIcon fontsize="large" />   
                </div>
            </div>

            <div className="header_right">
                <div className="header_info">
                    <Avatar src={user.photoURL}/>
                    <h4>{user.diplayName}</h4>
                </div> 
                <IconButton>
                    <AddIcon />
                </IconButton>
                <IconButton>
                    <ForumIcon />
                </IconButton>
                <IconButton>
                    <NotificationsActiveIcon />
                </IconButton>
                <IconButton>
                    <ExpandMoreIcon />
                </IconButton>
            </div>
        </div>
        
    )
}

export default Header
