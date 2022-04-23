import React, {useState, useEffect} from 'react';
import {voucherStyle as vs, Bodystyle as B} from '../styled/Styled';
import {Link} from 'react-router-dom';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import {axiosInst} from './../altaxios';

const Voucher = () => {

        const getYear = new Date().getFullYear();

        const [showYear, setShowYear] = useState(getYear);
        const [userData, setUserData] = useState([]);

        useEffect(() => {
                const getLate = async () => {
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
    
    
    


        useEffect(() => {
                const getLate = async () => {
                    let path = window.location.pathname.split('/')[2];

                   await axiosInst.post("users/getPhistory/" + path, {year: showYear} ).then(res => {
                       if(res.status === 200){
                            setUserData(res.data);
                       }
                    }).catch(e => {
                        console.log(e);
                    });
        
                };
    getLate();

        
        }, [showYear]);

    const IncDesktop = () => {
        if(showYear < 2099){
            setShowYear(parseInt(showYear) + 1);
        }    

    };
    const DecDesktop = () => {
        if(showYear > 2022){
            setShowYear(parseInt(showYear) - 1);
        }    

    };
/* jshint ignore : start*/
    return(  
        <vs.voucherMain>
            <vs.vfirstSec>
            <vs.voucherHeadr>
                <Link to="/home" className="backHome"> <ArrowBackIcon/></Link>
                <vs.voucherHeaerTxt> Your Payments History </vs.voucherHeaerTxt>
            </vs.voucherHeadr>
            <vs.vYearDiv>
                <vs.vYearTxt>Select Year</vs.vYearTxt>

                <B.InnerFchild>
                    <B.inputForm action="">
                        <B.YearInput type="text" id="yearvalueDesktop" value={showYear} disabled/>
                        <B.incDecP>
                            {showYear >= getYear  ? 
                            <B.incDiv className="arrowUp" onClick={IncDesktop} disabled type="button">+</B.incDiv>
                            :
                            <B.incDiv className="arrowUp" onClick={IncDesktop} type="button">+</B.incDiv>
                            }
                            {showYear <= 2022  ? 
                            <B.decDiv className="arrowDown" onClick={DecDesktop} disabled type="button">-</B.decDiv>
                            :
                            <B.decDiv className="arrowDown" onClick={DecDesktop} type="button">-</B.decDiv>
                            }

                        </B.incDecP>

                    </B.inputForm>
                </B.InnerFchild>

            </vs.vYearDiv>
            </vs.vfirstSec>

            <vs.vsecondSec>
            {userData.length === 0 ? 
            
            <vs.DataShow> Data not available! </vs.DataShow> 
            : 

                    userData.map(d => (
                                <vs.vuserHist key={d._id}>
                                <vs.vuserHinner>
                                    <vs.vsuMname> {d.payForMonth} </vs.vsuMname>
                                    <vs.vsuDateinfo> Payment :  {d.paymentSuccess === false ? <vs.vsUCmpUncmp style={{color:"#ff0052"}}> Pending </vs.vsUCmpUncmp> : <vs.vsUCmpUncmp> Complete </vs.vsUCmpUncmp>}  </vs.vsuDateinfo>
                                    <vs.vsuDate> Date : <vs.vsAtshow>  {new Date(d.createdAt).toLocaleDateString()} </vs.vsAtshow> at <vs.vsAtshow>{new Date(d.createdAt).toLocaleTimeString()}</vs.vsAtshow> </vs.vsuDate>
                                    <vs.vsAmount> Amount : {d.amount} </vs.vsAmount>
                                    <vs.vsOptions> Payment Option : <vs.vsAtshow style={{color:"#ffa500"}}> {d.payOption} </vs.vsAtshow> </vs.vsOptions>
                                </vs.vuserHinner>
                                </vs.vuserHist>    
                    ))}
            <Link to="/login" style={{display:"none"}} id="goto_home">login</Link>

            </vs.vsecondSec>
        </vs.voucherMain>
    )
    /* jshint ignore : end*/

};

export default Voucher;