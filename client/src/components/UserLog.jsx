import React, {useState} from 'react';
import {RagistationStyle as R} from '../styled/Styled';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import {Link} from 'react-router-dom';
import {axiosInst} from './../altaxios';

const UserLog = () => {

    const [shwomsg, setShowmsg] = useState("");
    const [shwomsgStyl, setShowmsgStyl] = useState({});
    const [userData,setUserData] = useState({
        email : "",
        password : ""
    });


    const getData = (e) => {
        const data = {...userData};
        data[e.target.name] = e.target.value;
        setUserData(data);
    };
    const userLigin = async (e) => {
        e.preventDefault();
        await axiosInst.post('auth/login', userData)
        .then((res) => {

            if(res.status !== 200){
                setShowmsg(res.data);
                setShowmsgStyl({ opacity : 1, color:"#ff0000"});
                setTimeout(() => {
                    setShowmsgStyl({opacity : 0});
                },3000);    
            }


            if(res.status === 200){
                setShowmsg("Login Successfull!");

                setShowmsgStyl({opacity : 1, color:"#37ff37e0"});
                setTimeout(() => {
                    setShowmsgStyl({opacity : 0});
                    window.location = "/home";
                },3000);
            }
        }).catch(err => {
            console.log(err);
        });
    };

    const ShowPassOne = () => {
        document.querySelector(".showPassOne").style = "display:none";
        document.querySelector(".hidePassOne").style = "display:block";
        document.getElementById("firstPass").type = "password";
    };
    const HidePassOne = () => {
        document.querySelector(".hidePassOne").style = "display:none";
        document.querySelector(".showPassOne").style = "display:block";
        document.getElementById("firstPass").type = "text";
    };

    /* jshint ignore:start */ 

    return(
    <R.RgMain>
    <R.Rgmainsecond>
       <R.RgHeader>
           <R.RgHeaderh2>
               User Login
           </R.RgHeaderh2>
       </R.RgHeader>
       <R.Rgformpart>
           <R.Rgform action="" onSubmit={userLigin} encType='multipart/form-data'>
            <R.formInerDiv>
            <R.RginnerPart id="loginInput" className="moveAble active">
                <R.Rginpartheader>
                    Enter your Email & Password
                </R.Rginpartheader>
                <R.Rginnerdiv>

                    <R.RgIlavel>
                        <R.RgLabelTxt>*Email</R.RgLabelTxt>
                        <R.Rgforminput type="email" onChange={getData} name="email" className="mblInputStyle" placeholder="Email Address"/>
                    </R.RgIlavel>

                    <R.FirstPassword>

                    <R.RgIlavel>
                        <R.RgLabelTxt>*Password</R.RgLabelTxt>
                        <R.Rgforminput type="password" onChange={getData} className="mblInputStyle" name="password" id="firstPass" placeholder="Enter your password"/>
                        <VisibilityIcon className="showPassOne" onClick={ShowPassOne}/>
                        <VisibilityOffIcon className="hidePassOne" onClick={HidePassOne}/>
                    </R.RgIlavel>

                    </R.FirstPassword>
                </R.Rginnerdiv>
            </R.RginnerPart>
                <R.msgShow className = "showuserMsg" style={shwomsgStyl} >{shwomsg}</R.msgShow>
                <R.RgformSubmit style={{marginTop : "30px"}} type="submit" name="login" value="Login"/>
                </R.formInerDiv>
           </R.Rgform>
       </R.Rgformpart>
       <Link to="/home" style={{display:"none"}} id="goto_home">home</Link>
       </R.Rgmainsecond>
    </R.RgMain>
    )
        /* jshint ignore:end */

};

export default UserLog;