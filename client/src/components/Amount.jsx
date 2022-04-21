import React, {useState, useEffect} from 'react';
import {voucherStyle as vs, Bodystyle as B} from '../styled/Styled';
import {Link} from 'react-router-dom';
import {axiosInst} from './../altaxios';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

const Amount = () => {
    const [showAmout, SetShowamout] = useState({
        amount:"",
    });

    const [shwomsg, setShowmsg] = useState("");
    const [shwomsgStyl, setShowmsgStyl] = useState({});

    const getAmout = (e) => {
        SetShowamout({...showAmout , "amount" : parseInt(e.target.value)});
    };

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
            await axiosInst.get("users/getAmout").then(res => {
                SetShowamout(res.data);
            }).catch(e => {
                console.log(e);
            });        
        };
    getLate();

}, []);

    const SetAmount = async(e) => {
        e.preventDefault();
        await axiosInst.put("users/updateAmout/" + showAmout.amount ).then(res => {
            if(res.status === 200){
                SetShowamout(res.data);
                setShowmsg("Update Successfull!");
                setShowmsgStyl({opacity : 1, color:"#37ff37e0"});
                setTimeout(() => {
                    setShowmsgStyl({opacity : 0});
                },3000);    
            }
    
        }).catch(e => {
            console.log(e);
        });

    };


/* jshint ignore : start*/
    return(  
        <vs.voucherMain>
            <vs.vfirstSec>
            <vs.voucherHeadr>
            <Link to="/home" className="backHome"> <ArrowBackIcon/></Link>
                <vs.voucherHeaerTxt style={{color:"#a9ff00"}}> Update Amount </vs.voucherHeaerTxt>
            </vs.voucherHeadr>
            <vs.vAmountearDiv style={{width:"auto",padding:"50px"}}>
            <vs.msgShowAmt style={shwomsgStyl}>{shwomsg}</vs.msgShowAmt>

                <vs.vAmountTxt>Enter Amount</vs.vAmountTxt>

                <B.InnerFchild>
                    <B.inputForm action="" onSubmit={SetAmount}>
                        <B.AmountInput type="number" onChange={getAmout} id="yearvalueDesktop" defaultValue={showAmout.amount}/>
                        <B.SubAmout type="submit"/>
                    </B.inputForm> 
                </B.InnerFchild>

            </vs.vAmountearDiv>
            </vs.vfirstSec>
            <Link to="/login" style={{display:"none"}} id="goto_home">login</Link>

        </vs.voucherMain>
    )
    /* jshint ignore : end*/

};

export default Amount;