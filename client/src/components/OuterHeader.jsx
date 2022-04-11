import React, { useEffect } from 'react';
import {HStyle as H} from '../styled/Styled';
import logo from '../images/logo1.png';
import {Link} from 'react-router-dom';
import {axiosInst} from './../altaxios';

const OuterHeader = () => {

    useEffect(() => {

        axiosInst.get("auth/vfyUser").then(res => {
            let gotohome = document.getElementById("goto_home");
            if(res.data !== ""){
                gotohome.click();
            }
        }).catch(e => {
            console.log(e);
        });
    },[]);


    useEffect(() => {
        const mIdfirst = document.getElementById("showRegPage");
        const mIdsecond = document.getElementById("showLogPage");
        const path = window.location.pathname;
        const Realpaht = path.split('/')[1];
        if(Realpaht === "login"){
            mIdsecond.style = "display:block !important;";
            mIdfirst.style = "display:none !important;";
        }else if(Realpaht === ""){
            mIdsecond.style = "display:none !important;";
            mIdfirst.style = "display:block !important;";
        }
    }, []);
/* jshint ignore:start */ 
    return(
        <H.Mainsection>
            <H.Logo src={logo} className="outerHeaderLogo"></H.Logo>
            <H.Title style={{fontSize: '38px'}} className="outerHeaderTitle">The Friends Unity Association</H.Title>
        <Link className="loginBtn" id="showRegPage" to="/login">Login</Link>
        <Link className="loginBtn" id="showLogPage" to="/">Ragister</Link>
        </H.Mainsection>
    )
/* jshint ignore:end */ 

};

export default OuterHeader;