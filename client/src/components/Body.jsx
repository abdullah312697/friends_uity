import React, {useEffect, useRef, useState} from 'react';
import {Bodystyle as B }   from '../styled/Styled';
import user from '../images/person.png';
import {Link} from 'react-router-dom';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import {axiosInst} from './../altaxios';

const Body = () => {
    const Cyear = new Date().getFullYear();
    const [showMonth,setShowMonth] = useState("");
    const [showYear,setShowYear] = useState(Cyear);
    var AI = useRef();
    var classLists = useRef(null);
    const [payData, SetPayData] = useState([]);
    const [userData, SetUserData] = useState([]);
    const [authUser,setAuthUser] = useState({});
    const [showAmout, SetShowamout] = useState({});

useEffect(() =>{
    let isMounted = true;
        const getLate = async () => {
            await axiosInst.get("users/findRguser").then(res => {
                res.data.map(async (d) => {
                    await axiosInst.delete("users/delete/"+d._id).then(res => {
                        if(isMounted){
                            console.log(res.data);
                        }
                    }).catch(e => {
                        console.log(e);
                    });
                    return false;
                });
            }).catch(e => {
                console.log(e);
            });
        
        };
    getLate();

        return () => {
            isMounted = false;
            };


},[userData]);

    useEffect(() => {
        let isMounted = true;

            const getLate = async () => {
                await axiosInst.get("auth/vfyUser").then(res => {
                    let gotohome = document.getElementById("goto_home");
                    if(isMounted){
                        if(res.data === ""){
                            gotohome.click();
                        }else{
                            setAuthUser(res.data);
                        }    
                    }
                }).catch(e => {
                    console.log(e);
                });
        
            };
    getLate();
    return () => {
        isMounted = false;
        };

    },[]);

useEffect(() => {
    let isMounted = true;
        const getLate = async () => {
            await axiosInst.get("users/getAmout").then(res => {
                if(isMounted){
                    SetShowamout(res.data);
                }
            }).catch(e => {
                console.log(e);
            });
        
        };
    getLate();
    return () => {
        isMounted = false;
        };

}, []);


useEffect(() => {
    let isMounted = true;
        const getLate = async () => {
            await axiosInst.get("users/gtAlluData").then(res => {
                if(isMounted){
                    SetUserData(res.data);
                }
            }).catch(e => {
                console.log(e);
            });
        
        };
    getLate();
    return () => {
        isMounted = false;
        };


},[]);
    
 useEffect(() => {

    let isMounted = true;

    const lateLoad = async() => {
        const dataSend = {
            year : showYear,
            month :showMonth
        };
    
        await axiosInst.post("users/phistory", dataSend).then(res => {
            if(isMounted){
                SetPayData(res.data);
            }
        }).catch(e => {
            console.log(e);
        });

    };

    lateLoad();

    return () => {
        isMounted = false;
        };


 },[showMonth, showYear]);


    useEffect(() => {
        const month = ["January","February","March","April","May",
        "June","July","August","September","October","November","December"];
        const Mname = new Date();
        const Result = month[Mname.getMonth()];
        setShowMonth(Result);
        const activeMonth = document.getElementById(Result);
        if(activeMonth){
            classLists.current = activeMonth;
            classLists.current.classList.add("activeMstyle");    
        }
        if(Result === "January"){
            AI.current = 1;
        }else if(Result === "February"){
            AI.current = 2;
        }else if(Result === "March"){
            AI.current = 3;
        }else if(Result === "April"){
            AI.current = 4;
        }else if(Result === "May"){
            AI.current = 5;
        }else if(Result === "June"){
            AI.current = 6;
        }else if(Result === "July"){
            AI.current = 7;
        }else if(Result === "August"){
            AI.current = 8;
        }else if(Result === "September"){
            AI.current = 9;
        }else if(Result === "October"){
            AI.current = 10;
        }else if(Result === "November"){
            AI.current = 11;
        }else if(Result === "December"){
            AI.current = 12;
        }
    },[]);
    
    const IncDesktop = () => {
      if(parseInt(showYear) < 2099){
            setShowYear(parseInt(showYear) + 1);
        }    

    };
    const DecDesktop = () => {
        if(parseInt(showYear) > 2022){
            setShowYear(parseInt(showYear) - 1);
        }    
    };

    const IncMobile = () => {
        if(parseInt(showYear) < 2099){
            setShowYear(parseInt(showYear) + 1);
        }    
    };
    const DecMobile = () => {
        if(parseInt(showYear) > 2022){
            setShowYear(parseInt(showYear) - 1);
        }    
    };

    const MonthChange = (e) => {
        const remClass = document.querySelectorAll('.activeMonth');
        remClass.forEach(e => {
            e.classList.remove("activeMstyle");
        });

        setShowMonth(e.target.value);
        e.target.classList.add("activeMstyle");
    };


    const IncMonths = () => {
        if(AI.current < 12){
            AI.current += 1;
        }
        if(AI.current === 1){
            setShowMonth("January");          
        }else if(AI.current === 2){
            setShowMonth("February");
        }else if(AI.current === 3){
            setShowMonth("March");
        }else if(AI.current === 4){
            setShowMonth("April");
        }else if(AI.current === 5){
            setShowMonth("May");
        }else if(AI.current === 6){
            setShowMonth("June");
        }else if(AI.current === 7){
            setShowMonth("July");
        }else if(AI.current === 8){
            setShowMonth("August");
        }else if(AI.current === 9){
            setShowMonth("September");
        }else if(AI.current === 10){
            setShowMonth("October");
        }else if(AI.current === 11){
            setShowMonth("November");
        }else if(AI.current === 12){
            setShowMonth("December");
        }


    };
    const DecMonths = () => {
        if(AI.current > 1){
            AI.current -= 1;
        }
        if(AI.current === 1){
            setShowMonth("January");
        }else if(AI.current === 2){
            setShowMonth("February");
        }else if(AI.current === 3){
            setShowMonth("March");
        }else if(AI.current === 4){
            setShowMonth("April");
        }else if(AI.current === 5){
            setShowMonth("May");
        }else if(AI.current === 6){
            setShowMonth("June");
        }else if(AI.current === 7){
            setShowMonth("July");
        }else if(AI.current === 8){
            setShowMonth("August");
        }else if(AI.current === 9){
            setShowMonth("September");
        }else if(AI.current === 10){
            setShowMonth("October");
        }else if(AI.current === 11){
            setShowMonth("November");
        }else if(AI.current === 12){
            setShowMonth("December");
        }


    };
    /* jshint ignore:start */ 
    return(
        <B.mainParent>
        <B.MainSec>

            <B.MainFirst>
                <B.InnerFchild>
                    <B.inputForm action="">
                        <B.YearInput type="text" id="yearvalueDesktop" name ="year" value={showYear} disabled/>
                        <B.incDecP>
                            {showYear >= Cyear  ? 
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
                <B.Allamount>
                        <B.AlluserATitle>
                        Our Total Amount {showAmout.amount} Taka
                        </B.AlluserATitle>
                        {
                        authUser.isAdmin === true || authUser.isEditor === true ?
                            <Link to="/updateAmount" className="hrefAmount">Update</Link>  : ""
                }
                        

                </B.Allamount>
                <B.TotalMember>
                    <B.OurTtitle>Total Members {userData.length}</B.OurTtitle>
                </B.TotalMember>
            </B.MainFirst>

                <B.Allamount className="mobileTitel">
                        <B.AlluserATitle className="mobileHTitle">
                            Total Amount {showAmout.amount} Taka
                        </B.AlluserATitle>
                        <Link to="/updateAmount" className="hrefAmount">Update</Link>

                </B.Allamount>

        <B.InnerSecond>

        <B.Allmonthname className="Allmonthname">


                <B.MonthParent>
                    <B.RestltHead>
                        <B.InnerFchild className="mobile_innerMonth">
                            <B.inputForm action="">
                                <B.YearInput type="text" id="yearvalueMobile" value={showYear} disabled/>
                                <B.incDecP>
                                    {showYear >= Cyear  ? 
                                    <B.incDiv className="arrowUp" onClick={IncMobile} disabled type="button">+</B.incDiv>
                                    :
                                    <B.incDiv className="arrowUp" onClick={IncMobile} type="button">+</B.incDiv>
                                    }
                                    {showYear <= Cyear  ? 
                                    <B.decDiv className="arrowDown" onClick={DecMobile} disabled type="button">-</B.decDiv>
                                    :
                                    <B.decDiv className="arrowDown" onClick={DecMobile} type="button">-</B.decDiv>
                                    }
                                </B.incDecP>

                            </B.inputForm>
                        </B.InnerFchild>
                        <B.MonthMobile>
                            <ChevronLeftIcon className="ArrowMonth" onClick={DecMonths}/>
                                <B.shwoLiveMonth id="showLiveMonth" name="month">{showMonth}</B.shwoLiveMonth>
                            <ChevronRightIcon className="ArrowMonth" onClick={IncMonths}/>
                        </B.MonthMobile>
                    </B.RestltHead>


                    <B.MonthDesktop id="showMblMonth">
                        <B.MonthName defaultValue="January" readOnly  id="January"  className="activeMonth" onClick={MonthChange}/>
                        <B.MonthName defaultValue="February" readOnly  id="February"  className="activeMonth" onClick={MonthChange}/>
                        <B.MonthName defaultValue="March"   readOnly  id="March"   className="activeMonth" onClick={MonthChange}/>
                        <B.MonthName defaultValue="April"   readOnly  id="April"  className="activeMonth" onClick={MonthChange}/>
                        <B.MonthName defaultValue="May"     readOnly  id="May"  className="activeMonth" onClick={MonthChange}/>
                        <B.MonthName defaultValue="June"    readOnly  id="June"  className="activeMonth" onClick={MonthChange}/>
                        <B.MonthName defaultValue="July"    readOnly  id="July"  className="activeMonth" onClick={MonthChange}/>
                        <B.MonthName defaultValue="August"   readOnly id="August"  className="activeMonth" onClick={MonthChange}/>
                        <B.MonthName defaultValue="September" readOnly id="September" className="activeMonth"  onClick={MonthChange}/>
                        <B.MonthName defaultValue="October"  readOnly id="October"  className="activeMonth" onClick={MonthChange}/>
                        <B.MonthName defaultValue="November" readOnly id="November"  className="activeMonth" onClick={MonthChange}/>
                        <B.MonthName defaultValue="December" readOnly id="December"  className="activeMonth" onClick={MonthChange}/>
                    </B.MonthDesktop>
                </B.MonthParent>


            </B.Allmonthname>

            <B.Alluseramout>    

                <B.Monthp>
                    <B.Mpheading id="Mnameshow">{showMonth}</B.Mpheading>
                </B.Monthp> 
                {payData.length === 0 && <B.AlluserDataShow style={{color:"#ff0052", fontSize:"28px",textAlign:"center",display:"block" }}> Data not available! </B.AlluserDataShow> }

                { payData.map(d => 
                                    <B.AlluserDataShow key={d._id}>
                                    <B.UserSimg src={d.userProfile ? d.userProfile : user}/>
                                    <B.UserName>{d.payerName}</B.UserName>
                                        <B.userPayment>
                                        
                                        { d.paymentSuccess === false ? <B.userUnPade>Pending</B.userUnPade> : <B.userPade>Pade</B.userPade>}
                                        </B.userPayment>
                                </B.AlluserDataShow>                    
                    )}
            </B.Alluseramout>

            <B.mainSecond>
                <B.Monthp>
                    <B.Mnheading>Users {userData.length}</B.Mnheading>
                </B.Monthp>
                <B.userPerents>
                { 
                    userData.map(d =>
                        d.registerd === false ? "" : 
                        <B.UserDetails key={d._id}>
                        <B.userImg src={d.profile ? d.profile : user}/>
                        <B.userName>
                            {d.name}
                        </B.userName> 
                        <Link to={"/profile/"+d._id} className="view_btn">View</Link>
                    </B.UserDetails>
    
                    )
                }
                </B.userPerents>
                <Link to="/login" style={{display:"none"}} id="goto_home">login</Link>

            </B.mainSecond>


        </B.InnerSecond>


        </B.MainSec>
        </B.mainParent>
    )
        /* jshint ignore:end */ 

};

export default Body;