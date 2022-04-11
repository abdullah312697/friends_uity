import React, {useState,useEffect} from 'react';
import {axiosInst} from './../altaxios';
import {userPayment as UP} from '../styled/Styled';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import {Link} from 'react-router-dom';

const Payments = () =>{

    const [userData, setUserData] = useState({});
    const mName = new Date().getFullYear();
    const [shwomsg, setShowmsg] = useState("");
    const [shwomsgStyl, setShowmsgStyl] = useState({});

    useEffect(() => {
        axiosInst.get("auth/vfyUser").then(res => {
            if(res.data === ""){
                window.location = "/login";
            }else{
                setUserData(res.data);
            }
        }).catch(e => {
            console.log(e);
        });
    },[]);

const [payData, SetPayData] = useState({
    payerName : "",
    payerId : "",
    payForYear : "",
    payOption : "",
    amount : "",
    payForMonth : "",
    monthNumbr: "",
    userProfile : ""
});
useEffect(()=>{
    switch(payData.payForMonth){
        case "January":
            payData.monthNumbr = 1;
            break;
        case "February":
            payData.monthNumbr = 2;
            break;
        case "March":
            payData.monthNumbr = 3;
            break;
        case "April":
            payData.monthNumbr = 4;
            break;
        case "May":
            payData.monthNumbr = 5;
            break;
        case "June":
            payData.monthNumbr = 6;
            break;
        case "July":
            payData.monthNumbr = 7;
            break;
        case "August":
            payData.monthNumbr = 8;
            break;
        case "September":
            payData.monthNumbr = 9;
            break;
        case "October":
            payData.monthNumbr = 10;
            break;
        case "November":
            payData.monthNumbr = 11;
            break;
        case "December":
            payData.monthNumbr = 12;
            break;
      
        default: payData.monthNumbr = "";
    }
},[payData]);

const getPData = (e) => {   
    const data = {...payData, payerId : userData.id, payForYear : mName, userProfile : userData.profile};
    data[e.target.name] = e.target.value;
    SetPayData(data);
};

const sendData = (e) => {
    e.preventDefault();
    axiosInst.post("auth/addPayment",payData).then(res => {
        if(res.status !== 200){
        setShowmsg(res.data);
        setShowmsgStyl({opacity : 1, color:"#ff0000"});
        setTimeout(() => {
            setShowmsgStyl({opacity : 0});
        },3000);    
    }
        if(res.status === 200){
            setShowmsg(res.data);
            setShowmsgStyl({opacity : 1, color:"#37ff37e0"});
            setTimeout(() => {
                setShowmsgStyl({opacity : 0});
            },3000);    
        }
    }).catch(e => {
        console.log(e);
    });

};



/*jshint ignore:start */
    return(
        <UP.PaymentMainDiv>
        <UP.FirstInnPerent>
            <Link to="/home"> <ArrowBackIcon className="innerArrow"/></Link>
            <UP.PaymentHeading>Make your payment</UP.PaymentHeading>
        </UP.FirstInnPerent>
            <UP.PaymentInnerDiv>
            <UP.PaymentForm onSubmit={sendData}>
                <UP.PaymentInput type="text" name="payerName" onChange={getPData}  placeholder="Enter your name"/>
                <UP.PaymentSelect name="payOption" onChange={getPData}>
                    <UP.PaymentOptions defaultValue="">Select Payment Method</UP.PaymentOptions>
                    <UP.PaymentOptions defaultValue="Bank">Bank</UP.PaymentOptions>
                    <UP.PaymentOptions defaultValue="Bkesh">BKash</UP.PaymentOptions>
                    <UP.PaymentOptions defaultValue="Cash">Cash</UP.PaymentOptions>
                </UP.PaymentSelect>
                <UP.PaymentInput type="number" name="amount"  onChange={getPData} placeholder="Amount"/>
                <UP.PaymentSelect name="payForMonth" onChange={getPData}>
                    <UP.PaymentOptions defaultValue="">Select Month</UP.PaymentOptions>
                    <UP.PaymentOptions defaultValue="January">January</UP.PaymentOptions>
                    <UP.PaymentOptions defaultValue="February">February</UP.PaymentOptions>
                    <UP.PaymentOptions defaultValue="March">March</UP.PaymentOptions>
                    <UP.PaymentOptions defaultValue="April">April</UP.PaymentOptions>
                    <UP.PaymentOptions defaultValue="May">May</UP.PaymentOptions>
                    <UP.PaymentOptions defaultValue="June">June</UP.PaymentOptions>
                    <UP.PaymentOptions defaultValue="July">July</UP.PaymentOptions>
                    <UP.PaymentOptions defaultValue="August">August</UP.PaymentOptions>
                    <UP.PaymentOptions defaultValue="September">September</UP.PaymentOptions>
                    <UP.PaymentOptions defaultValue="October">October</UP.PaymentOptions>
                    <UP.PaymentOptions defaultValue="November">November</UP.PaymentOptions>
                    <UP.PaymentOptions defaultValue="December">December</UP.PaymentOptions>
                </UP.PaymentSelect>
                <UP.MsgShow style={shwomsgStyl}>{shwomsg}</UP.MsgShow>
                <UP.PaySubInput type="submit" name="submit" value="Sent"/>
            </UP.PaymentForm>
            </UP.PaymentInnerDiv>
        </UP.PaymentMainDiv>
    );
/*jshint ignore:end */

};

export default Payments;
