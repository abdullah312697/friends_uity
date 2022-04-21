import React, {useState, useEffect} from 'react';
import {voucherStyle as vs} from '../styled/Styled';
import {Link} from 'react-router-dom';
import {axiosInst} from './../altaxios';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

const ConfirmPament = () => {

    const [userData, setUserData] = useState([]);
    const [getUdata, setCondata] = useState({});

    useEffect(() => {
            const getLate = async () => {
               await axiosInst.get("auth/vfyUser").then(res => {
                    let gotohome = document.getElementById("goto_home");
                    if(res.data === ""){
                        gotohome.click();
                    }else{
                        if(res.data.isAdmin !== true || res.data.isEditor !== true){
                            window.location = "/home";
                        }
                    }
                }).catch(e => {
                    console.log(e);
                });
        
            };
    getLate();

    },[]);



    useEffect(() => {
            const getLate = async () => {
               await axiosInst.get("users/confirmPayment").then(res => {
                    setUserData(res.data);
                }).catch(e => {
                    console.log(e);
                });
                
            };
    getLate();

    }, [getUdata]);

    
    const confirmPay = async(e) => {
        const ConId = e.target.id;
        await axiosInst.put("users/updatePay/"+ConId).then(res => {
            setCondata(res.data);
        }).catch(e => {
            console.log(e);
        });

    };


    /* jshint ignore : start*/
    return(
        <vs.voucherMain>
        <vs.vfirstSec>
        <vs.voucherHeadr>
            <Link to="/home" className="ToConfirm"> <ArrowBackIcon/></Link>
            <vs.voucherHeaerTxt> Payment Request </vs.voucherHeaerTxt>
        </vs.voucherHeadr>
        </vs.vfirstSec>

        <vs.vsecondSec>
                {userData.map(d => (
                            <vs.vuserHist key={d._id}>
                            <vs.vuserHinner>
                                <vs.ShowConDiv><vs.UsrImg src={d.userProfile}/> <vs.UnameSp>{d.payerName}</vs.UnameSp></vs.ShowConDiv>
                                <vs.vsuDateinfo>Month: {d.payForMonth}</vs.vsuDateinfo>
                                <vs.vsuDate> Date: <vs.vsAtshow>  {new Date(d.createdAt).toLocaleDateString()} </vs.vsAtshow> at <vs.vsAtshow style={{color:"#2ae116"}}>{new Date(d.createdAt).toLocaleTimeString()}</vs.vsAtshow> </vs.vsuDate>
                                <vs.vsAmount> Amount: {d.amount} </vs.vsAmount>
                                <vs.vsOptions> Payment Option: <vs.vsAtshow style={{color:"#ffa500"}}> {d.payOption} </vs.vsAtshow> </vs.vsOptions>
                                <vs.ConfirmInnerbdr>
                                    <vs.ConfinrmBtn id={d._id} onClick={confirmPay}>Confirm</vs.ConfinrmBtn>
                                </vs.ConfirmInnerbdr>
                            </vs.vuserHinner>
                            </vs.vuserHist>    
                ))}
               
        <Link to="/login" style={{display:"none"}} id="goto_home">login</Link>

        </vs.vsecondSec>
    </vs.voucherMain>

    );
        /* jshint ignore : end*/

};

export default ConfirmPament;