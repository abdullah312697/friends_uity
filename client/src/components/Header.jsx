import React, { useEffect, useState} from 'react';
import {HStyle as H} from '../styled/Styled';
import logo from '../images/logo1.png';
import {Link} from 'react-router-dom';
import MobileHeader from './MobileHeader';
import NotificationsNoneSharpIcon from '@mui/icons-material/NotificationsNoneSharp';
import {axiosInst} from './../altaxios';

const Header = () => {

    const setHeader = new Headers();
    setHeader.set({"content-type":"application/javascript"});
    const [userData,SetuserData] = useState({});

    const [userNotify, setNofity] = useState([]);
    

    useEffect(() => {
        axiosInst.get("users/confirmPayment").then(res => {
            setNofity(res.data);
        }).catch(e => {
            console.log(e);
        });
    
    }, []);

    useEffect(() => {

        axiosInst.get("auth/vfyUser").then(res => {
            SetuserData(res.data);
        }).catch(e => {
            console.log(e);
        });
    },[]);


    const logOutUser = async() => {
        await axiosInst.get("auth/logOut").then(res => {
            console.log(res.data);
        }).catch(e => {
            console.log(e);
        });

    };

    useEffect(() => {
        const path = window.location.pathname;
        const main = path.split('/')[1];
        const route = document.getElementById(main);
        if(route){
            route.style = "color:#e1e1e1;";
            route.lastChild.style = "opacity:1";    
        }
    
    }, []);

    /* jshint ignore: start */ 
    return(
        <H.Mainsection>
        <H.DesktopHeader className="desktopHeader">
            <H.Logo src={logo}></H.Logo>
            <H.Title>The Friends Unity Association</H.Title>
            <H.Nabbar>
                  <H.Nabbarlist>
                    <Link to="/home" className="navRoute" id="home">Home <H.borderbtm className="showborder"></H.borderbtm></Link>
                    <Link to="/about" className="navRoute" id="about">About <H.borderbtm className="showborder"></H.borderbtm></Link>
                    <Link to={userData.id ? "/profile/"+userData.id : "/profile"} className="navRoute" id="profile">Profile <H.borderbtm className="showborder"></H.borderbtm></Link>
                    <Link to={userData.id ? "/voucher/"+userData.id : "/voucher"} className="navRoute" id="voucher">Voucher <H.borderbtm className="showborder"></H.borderbtm></Link>
                    <Link to="/payment" className="navRoute" id="payment">Pay-Installment<H.borderbtm className="showborder"></H.borderbtm></Link>
                    {userData.isAdmin === true || userData.isEditor === true ?
                    <Link to="/confirm" className="notifyBtn" id="confirm"><H.showNnum>{userNotify.length === 0 ? "" : userNotify.length}</H.showNnum><NotificationsNoneSharpIcon style={{color:"#a9ff00"}} /></Link>
                        : ""
                }
                </H.Nabbarlist>
            </H.Nabbar>
            <Link className="loginBtn" onClick={logOutUser}  to="/login">LogOut</Link>
        </H.DesktopHeader>
            <H.MobileHeader className="MobileHeader">
                <MobileHeader/>
            </H.MobileHeader> 
    
        </H.Mainsection> 
    )
    /* jshint ignore: end */ 

};

export default Header;