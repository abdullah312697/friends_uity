import React, { useEffect, useState } from 'react';
import {HStyle as H} from '../styled/Styled';
import logo from '../images/logo1.png';
import {Link} from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import NotificationsNoneSharpIcon from '@mui/icons-material/NotificationsNoneSharp';
import {axiosInst} from './../altaxios';

const MobileHeader = () => {
    const [userData,SetuserData] = useState({});
    const [userNotify, setNofity] = useState([]);

    useEffect(() => {
    const getLate = async () => {
        await axiosInst.get("auth/vfyUser").then(res => {
            SetuserData(res.data);
        }).catch(e => {
            console.log(e);
        });
    };
    getLate();

    },[]);
    

    useEffect(() => {
            const getLate = async () => {
                await axiosInst.get("users/confirmPayment").then(res => {
                    setNofity(res.data);
                }).catch(e => {
                    console.log(e);
                });
            };
    getLate();

    }, []);

    const logOutUser = async() => {
        await axiosInst.get("auth/logOut").then(res => {
            console.log(res.data);
        }).catch(e => {
            console.log(e);
        });

    };

    useEffect(() => {
        const path = window.location.pathname;
        const main = path.split('/')[1]+"Mob";
        const route = document.getElementById(main);
        if(route){
            route.style = "color:#e1e1e1 !important";
        }
    
    }, []);

    const showMenu = () => {
        const shwoId = document.getElementById("showMenue");
        const cmunu = document.getElementById("CloseMenu");
        shwoId.style = "opacity:1;width: 200px";
        cmunu.style = "display:block";
    };
    const CloseMenu = () => {
        const shwoId = document.getElementById("showMenue");
        const cmunu = document.getElementById("CloseMenu");

        shwoId.style = "width: 0px; opacity:0";
        cmunu.style = "display:none";
    };
    /* jshint ignore:start*/
    return(
        <H.MobileHeadr>
            <H.HeadSecOne>
                <Link to="/home">
                    <H.Logo src={logo} className="mobleLogo"></H.Logo>
                </Link>
                <H.Title className="mobleTitle">The Friends Unity Association</H.Title>
                {userData.isAdmin === true || userData.isEditor === true ?
                    <Link to="/confirm" className="notifyBtn" id="confirm" style={{position:"relative"}}><H.showNnum>{userNotify.length === 0 ? "" : userNotify.length}</H.showNnum><NotificationsNoneSharpIcon style={{color:"#a9ff00"}} /></Link>
                        : ""
                }
                <H.MenuIconShow>
                    <MenuIcon onClick={showMenu} id="showMuneIcon"/>
                </H.MenuIconShow>
            </H.HeadSecOne>
            <H.HeadSecTwo id="showMenue">
            <H.Nabbar className="mobileNabber">
                <H.Nabbarlist className="mobileNabList">
                    <Link to="/home" className="navRoute mobileNav" id="homeMob">Home </Link>
                    <Link to="/about" className="navRoute mobileNav" id="aboutMob">About </Link>
                    <Link to={userData.id ? "/profile/"+userData.id : "/profile"} className="navRoute mobileNav" id="profileMob">Profile <H.borderbtm className="showborder"></H.borderbtm></Link>
                    <Link to={userData.id ? "/voucher/"+userData.id : "/voucher"} className="navRoute mobileNav" id="voucherMob">Voucher <H.borderbtm className="showborder"></H.borderbtm></Link>
                    <Link to="/payment" className="navRoute mobileNav" id="paymentMob">Pay-Installment</Link>
                    <Link className="loginBtn mobleLogBtn" onClick={logOutUser} to="/login">LogOut</Link>
                    <CloseIcon id="CloseMenu" onClick={CloseMenu} />
                </H.Nabbarlist>
            </H.Nabbar>
            </H.HeadSecTwo>
        </H.MobileHeadr>
    )
    /* jshint ignore:end*/

};

export default MobileHeader;