import React, { useEffect, useState} from 'react';
import {HStyle as H} from '../styled/Styled';
import logo from '../images/logo1.png';
import {Link} from 'react-router-dom';
import MobileHeader from './MobileHeader';
import NotificationsNoneSharpIcon from '@mui/icons-material/NotificationsNoneSharp';
import {axiosInst} from './../altaxios';

const Header = () => {

    const [userData,SetuserData] = useState({});
    const [userNotify, setNofity] = useState([]);
    

    useEffect(() => {
        let isMounted = true;

        const setLoad = async() => {
            await axiosInst.get("users/confirmPayment").then(res => {
                if(isMounted){
                    setNofity(res.data);
                }
            }).catch(e => {
                console.log(e);
            });    
        };
        setLoad();
        return () => {
            isMounted = false;
            };

    }, []);
    useEffect(() => {
        let isMounted = true;
        const sendLate = async() => {
            await axiosInst.get("auth/vfyUser").then(res => {
                if(isMounted){
                    SetuserData(res.data);
                }
            }).catch(e => {
                console.log(e);
            });
    
        };
        sendLate();

        return () => {
            isMounted = false;
            };

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
                    <Link to={userData.id ? "/voucher/"+userData.id : "/voucher"} className="navRoute" id="voucher">Voucher <H.borderbtm className="showborder"></H.borderbtm></Link>
                    <Link to="/payment" className="navRoute" id="payment">Pay-Installment<H.borderbtm className="showborder"></H.borderbtm></Link>
                    {userData.isAdmin === true || userData.isEditor === true ?
                    <Link to="/confirm" className="notifyBtn" id="confirm"><H.showNnum>{userNotify.length === 0 ? "" : userNotify.length}</H.showNnum><NotificationsNoneSharpIcon style={{color:"#a9ff00"}} /></Link>
                        : ""
                }
                </H.Nabbarlist>
            </H.Nabbar>
            {userData.profile ?
                <Link to={userData.id ? "/profile/"+userData.id : "/profile"} onClick={() => {window.reload()}}>
                <H.UserSimg src={userData.profile ? userData.profile : ""}/>
                </Link>            
            : ""}

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