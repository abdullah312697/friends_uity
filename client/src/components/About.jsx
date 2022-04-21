import React, {useEffect} from 'react';
import {voucherStyle as vs} from '../styled/Styled';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import {Link} from 'react-router-dom';
import {axiosInst} from './../altaxios';

const About = () => {

    useEffect(() => {
        const getLate = async() => {
            await axiosInst.get("auth/vfyUser").then(res => {
                let gotohome = document.getElementById("goto_home");
                if(res.data === ""){
                    gotohome.click();
                }
            }).catch(e => {
                console.log(e);
            });
    
        };
        getLate();

    },[]);

/* jshint ignore : start*/
    return(  
        <vs.voucherMain>
            <vs.vfirstSec>
            <vs.voucherHeadr>
            <Link to="/home"> <ArrowBackIcon className="innerArrow"/></Link>
                <vs.voucherHeaerTxt style={{color:"#1cff00"}}> Aboute Page </vs.voucherHeaerTxt>
            </vs.voucherHeadr>
            <vs.vAmountearDiv>
                <vs.vAmountTxt>Coming Soon...</vs.vAmountTxt>
            </vs.vAmountearDiv>
            </vs.vfirstSec>
            <Link to="/login" style={{display:"none"}} id="goto_home">login</Link>

        </vs.voucherMain>
    )
    /* jshint ignore : end*/

};

export default About;