import React, { useState } from 'react';
import {RagistationStyle as R} from '../styled/Styled';
import AddAPhotoOutlinedIcon from '@mui/icons-material/AddAPhotoOutlined';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import app from './../Firebase';
import {Link} from 'react-router-dom';
import {axiosInst} from './../altaxios';
import axios from 'axios';
axios.defaults.withCredentials = true;

const Ragistation = () => {
    var Item = 0;
    const [ImgUrl, setImgUrl] = useState({});
    const [showImg, setShowImg] = useState({});

    const [fdata, setFdata] = useState({
            email : "",
            password : "",
            re_password : ""
            });

         
    const [fdataOne, setFdataOne] = useState({
        name : "",
        mobile : "",
        nidno : "",
        fathername : "",
        mothername : "",
        villagename : "",
        unionname : "",
        postname : "",
        district : "",
        profile:"",
        imgName : ""
    });

    const [finalRg, setFinealRg] = useState({
        nomineename : "",
        nomineeFathername : "",
        nomineeMothername : "",
        relation : "",
        registerd: true
    });
    const [shwomsg, setShowmsg] = useState("");
    const [shwomsgStyl, setShowmsgStyl] = useState({});

    const getFdata = (e) => {
      const data = {...fdata};
      data[e.target.name] = e.target.value;
      setFdata(data);
    };

    const getFdataOne = (e) => {
        const data = {...fdataOne};
        data[e.target.name] = e.target.value;
        setFdataOne(data);
      };

      const FinalRgsDt = (e) => {
          const data = {...finalRg};
          data[e.target.name] = e.target.value;
          setFinealRg(data);
      };

        const [upLog, SetUplog] = useState({});
        const [upLogUpdate, SetupLogUpdate] = useState({});

    const newRegister = async(e) => {
        
        let Move0 = document.getElementById('loginInput');
        let Move1 = document.getElementById('addressInput');
        e.preventDefault(); 

        await axiosInst.post('auth/rgone',fdata)
        .then(function (response) {

            if(response.status !== 200){
                setShowmsg(response.data);
                setShowmsgStyl({opacity : 1, color:"#ff0000"});
                setTimeout(() => {
                    setShowmsgStyl({opacity : 0});
                },3000);    
            }

           if(response.status === 200){

            if(localStorage !== undefined){
                const imgName = new Date().getTime() * 1000;
                localStorage.setItem("imageName",imgName);
            }
            if(Item < 2){
                Item += 1;
            }
                SetUplog({display : "none"});
                SetupLogUpdate({display : "block"});
    
    
                Move0.classList.remove('active');     
                Move1.classList.add('active');        

           }
          })
          .catch(function (error) {
            console.log(error);
          });
    };

const upLogInfo = async(e) => {

    let Move0 = document.getElementById('loginInput');
    let Move1 = document.getElementById('addressInput');

    e.preventDefault(); 

    await axiosInst.put('auth/rgone',fdata)
    .then(function (response) {
        
        if(response.status !== 200){
            setShowmsg(response.data);
            setShowmsgStyl({opacity : 1, color:"#ff0000"});
            setTimeout(() => {
                setShowmsgStyl({opacity : 0});
            },3000);    
        }

       if(response.status === 200){
        if(Item < 2){
            Item += 1;
        }

        Move0.classList.remove('active');     
        Move1.classList.add('active');    
       }
      })
      .catch(function (error) {
        console.log(error);
      });
};

const newRagisterOne = async(e) => {

    e.preventDefault();
    let Move1 = document.getElementById('addressInput');
    let Move2 = document.getElementById('nomineeInput');
    await axiosInst.put('auth/rgtwo',fdataOne).then(res => {
        if(res.status !== 200){
            setShowmsg(res.data);
            setShowmsgStyl({opacity : 1, color:"#ff0000"});
            setTimeout(() => {
                setShowmsgStyl({opacity : 0});
            },3000);    
        }

    if(res.status === 200){
        if(Item < 2){
            Item += 1;
        }
        if(Item === 2){
                Move1.classList.remove('active');
                Move2.classList.add('active');       
            }
    }

    }).catch(error => {
        console.log(error);
    });

};

const finalRagistation = async(e) => {

    e.preventDefault();
    await axiosInst.put('auth/rgthree',finalRg).then(res => {

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
                window.location.href = "/login";
            },3000);    
        }
        }).catch(error => {
            console.log(error);
        });
    
};

    const [passTypeOne, setPassTypeOne] = useState("password");
    const [passTypeTwo, setPassTypeTwo] = useState("password");
    const [HidePO, setHidePO] = useState({});
    const [ShowPO, setShowPO] = useState({});

    const ShowPassOne = () => {
        setPassTypeOne("password");
        setHidePO({display: "block"});
        setShowPO({display: "none"});

    };
    const HidePassOne = () => {
        setHidePO({display: "none"});
        setShowPO({display: "block"});
        setPassTypeOne("text");

    };
    const [HidePT, setHidePT] = useState({});
    const [ShowPT, setShowPT] = useState({});

    const ShowPassTwo = () => {
        setHidePT({display: "block"});
        setShowPT({display: "none"});
        setPassTypeTwo("password");
    };
    
    const HidePassTwo = () => {
        setHidePT({display: "none"});
        setShowPT({display: "block"});
        setPassTypeTwo("text");
    };

    
    const prevOption = () => {
        let Move0 = document.getElementById('loginInput');
        let Move1 = document.getElementById('addressInput');
        let Move2 = document.getElementById('nomineeInput');

        if(Item > 0){
            Item -= 1;
        }

        if(Item === 1){
            Move2.classList.remove('active');     
            Move1.classList.add('active');    
        }else if(Item === 0){
            Move1.classList.remove('active');     
            Move0.classList.add('active');    
        }
    };

const [progress,setProgress] = useState({});

    const fileName = (e) => {
        const file = e.target.files[0];



//uploadfile
const filename =  file.name;
const extrenTion = filename.substring(filename.lastIndexOf('.') + 1);
if(extrenTion === "jpg" || extrenTion === "png" || extrenTion === "jpeg"){
    let imgName;
if(localStorage !== undefined){
    imgName = localStorage.getItem("imageName");
}

const uploadImg = imgName + ".png";
    const putImg = getStorage(app);
    const getImgRef = ref(putImg, 'Images/' + uploadImg);
    const uploadTask = uploadBytesResumable(getImgRef, file);
    uploadTask.on("state_changed", (snapshot) => {
        const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        setProgress({width : Math.floor(progress) + "%", display : "block"});
        }, 
        (error) => {
            console.log(error);
        }, 
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then(async(downloadURL) => {
            setFdataOne({...fdataOne, profile : downloadURL, imgName : uploadImg});
            setImgUrl(downloadURL);
            setShowImg({display : 'block'});
          });
    });

}else{
    setShowmsg("Please Select a file jpg, jpeg or png");
    setShowmsgStyl({opacity : 1, color:"#ff0000"});
    setTimeout(() => {
        setShowmsgStyl({opacity : 0});
    },3000);    
}
    
    
    

    };
        //uploadfile

    /* jshint ignore:start */ 

    return(
    <R.RgMain>
    <R.Rgmainsecond>
       <R.RgHeader>
           <R.RgHeaderhse>
               Online Registration
           </R.RgHeaderhse>
       </R.RgHeader>
       <R.Rgformpart>
            <R.formInerDiv>
            <R.RginnerPart id="loginInput" className="moveAble active">
            <R.Rgform action="" id="formone" onSubmit = {newRegister} method="post">

                <R.Rginpartheader className="RginnerHeader">
                    Enter your Email & Password
                </R.Rginpartheader>
                <R.Rginnerdiv>

                    <R.RgIlavel>
                        <R.RgLabelTxt>*Email</R.RgLabelTxt>
                        <R.Rgforminput type="email" name="email" onChange={getFdata} id="forShowbtnone"className="mblInputStyle" placeholder="Email Address"/>
                    </R.RgIlavel>

                    <R.FirstPassword>
                    <R.RgIlavel>
                        <R.RgLabelTxt>*Password</R.RgLabelTxt>
                        <R.Rgforminput type={passTypeOne} onChange={getFdata} className="mblInputStyle" name="password"  id="firstPass" placeholder="Enter your password"/>
                        <VisibilityIcon className="showPassOne" style={ShowPO} onClick={ShowPassOne}/>
                        <VisibilityOffIcon className="hidePassOne" style={HidePO} onClick={HidePassOne}/>
                    </R.RgIlavel>
                    </R.FirstPassword>
                    <R.SecondPassword>
                    <R.RgIlavel>
                        <R.RgLabelTxt>*Again Password</R.RgLabelTxt>
                        <R.Rgforminput type={passTypeTwo} onChange={getFdata} className="mblInputStyle" name="re_password"   id="SecondPass" placeholder="password again"/>
                        <VisibilityIcon className="showPassTwo" style={ShowPT} onClick={ShowPassTwo}/>
                        <VisibilityOffIcon className="hidePassTwo" style={HidePT} onClick={HidePassTwo}/>
                    </R.RgIlavel>
                    </R.SecondPassword>
                </R.Rginnerdiv>
                    <R.NextPrev>
                        <R.NextOne id="nextBtn" style={upLog} type="submit" value="Next"/>
                        <R.NextOne id="nextBupdate" onClick={upLogInfo} style={upLogUpdate} type="button" value="Next"/>
                    </R.NextPrev>
                </R.Rgform>
            </R.RginnerPart>
            <R.RginnerPart id="addressInput" className="moveAble">
            <R.Rgform action="" onSubmit={newRagisterOne} encType='multipart/form-data' method="post">
                    <R.Rginpartheader>
                        Fillup your Address
                    </R.Rginpartheader>
                <R.Rginnerdiv>
                    <R.RgIlavel>
                        <R.RgLabelTxt>*Full Name</R.RgLabelTxt>
                        <R.Rgforminput type="text" name="name" onChange={getFdataOne}  className="mblInputStyle" placeholder="Enter your FullName"/>
                    </R.RgIlavel>
                    <R.RgIlavel>
                        <R.RgLabelTxt>*Father Name</R.RgLabelTxt>
                        <R.Rgforminput type="text" name="fathername" onChange={getFdataOne}  className="mblInputStyle" placeholder="Father Name"/>
                    </R.RgIlavel>
                    <R.RgIlavel>
                        <R.RgLabelTxt>*Mother Name</R.RgLabelTxt>
                        <R.Rgforminput type="text" name="mothername" onChange={getFdataOne}  className="mblInputStyle" placeholder="Mother Name"/>
                    </R.RgIlavel>
                    <R.RgIlavel>
                        <R.RgLabelTxt>*Mobile-NO</R.RgLabelTxt>
                        <R.Rgforminput type="number" name="mobile" onChange={getFdataOne}  className="mblInputStyle" placeholder="Mobile Number"/>
                    </R.RgIlavel>
                    <R.RgIlavel>
                        <R.RgLabelTxt>*NID-NO</R.RgLabelTxt>
                        <R.Rgforminput type="number" name="nidno" onChange={getFdataOne}  className="mblInputStyle" placeholder=" NID Number "/>
                    </R.RgIlavel>
                    <R.RgIlavel>
                        <R.RgLabelTxt>*Village</R.RgLabelTxt>
                        <R.Rgforminput type="text" name="villagename" onChange={getFdataOne}  className="mblInputStyle" placeholder="Village"/>
                    </R.RgIlavel>
                    <R.RgIlavel>
                        <R.RgLabelTxt>*Union</R.RgLabelTxt>
                        <R.Rgforminput type="text" name="unionname" onChange={getFdataOne}  className="mblInputStyle" placeholder="Union"/>
                    </R.RgIlavel>
                    <R.RgIlavel>
                        <R.RgLabelTxt>*Post Office</R.RgLabelTxt>
                        <R.Rgforminput type="text" name="postname" onChange={getFdataOne}  className="mblInputStyle" placeholder="Post Office"/>
                    </R.RgIlavel>
                    <R.RgIlavel>
                        <R.RgLabelTxt>*District</R.RgLabelTxt>
                        <R.Rgforminput type="text" name="district" onChange={getFdataOne}  className="mblInputStyle" placeholder="District"/>
                    </R.RgIlavel>            
                    <R.rglabel>
                        <R.Rgforminputfile type="file" name="profile" onChange={fileName}/>
                        Choise a Photo
                        <AddAPhotoOutlinedIcon className="cameraIcon"/>
                    </R.rglabel>
                    <R.progress style={{display: progress.display}}>
                        <R.progressShow style={progress}>{progress.width}</R.progressShow>
                    </R.progress>
                        <R.previewImg src={ImgUrl} id="previewimg" style={showImg} alt="previewImg..."></R.previewImg>
                </R.Rginnerdiv>
                    <R.NextPrev className="secTwo">
                        <R.PrevOne id="prevBtn" onClick={prevOption}>Prev</R.PrevOne>
                        <R.NextOne id="LastOne" type="submit" value="Next"/>
                    </R.NextPrev>
                </R.Rgform>
            </R.RginnerPart>
            <R.RginnerPart id="nomineeInput" className="moveAble">
            <R.Rgform action="" onSubmit={finalRagistation} method="post">
                <R.Rginpartheader>
                    Nominee Details
                </R.Rginpartheader>
                <R.Rginnerdiv>
                    <R.RgIlavel>
                        <R.RgLabelTxt>*Nominee Name</R.RgLabelTxt>
                        <R.Rgforminput type="text" name="nomineename" onChange={FinalRgsDt} className="mblInputStyle" placeholder="Nominee Name"/>
                    </R.RgIlavel>            
                    <R.RgIlavel>
                        <R.RgLabelTxt>*Nominee Father Name</R.RgLabelTxt>
                        <R.Rgforminput type="text" name="nomineeFathername" onChange={FinalRgsDt} className="mblInputStyle" placeholder="Nominee Father Name"/>
                    </R.RgIlavel>            
                    <R.RgIlavel>
                        <R.RgLabelTxt>*Nominee Mother Name</R.RgLabelTxt>
                        <R.Rgforminput type="text" name="nomineeMothername" onChange={FinalRgsDt} className="mblInputStyle" placeholder="Nominee Mother Name"/>
                    </R.RgIlavel>            
                    <R.RgIlavel>
                        <R.RgLabelTxt>*Nominee Relation</R.RgLabelTxt>
                        <R.Rgforminput type="text" name="relation" onChange={FinalRgsDt} className="mblInputStyle" placeholder="Nominee Relation"/>
                    </R.RgIlavel>            
                </R.Rginnerdiv>
                    <R.NextPrev className="FinelRgBtn">
                        <R.PrevOne id="prevBtn" onClick={prevOption}>Prev</R.PrevOne>
                        <R.RgformSubmit type="submit" id="Fregister" name="register" value="Register"/>
                    </R.NextPrev>
                </R.Rgform>
            </R.RginnerPart>
                <R.msgShow style={shwomsgStyl}>{shwomsg}</R.msgShow>
                </R.formInerDiv>
                <Link to="/home" style={{display:"none"}} id="goto_home">home</Link>
       </R.Rgformpart>
       </R.Rgmainsecond>
    </R.RgMain>
    )
        /* jshint ignore:end */

};

export default Ragistation;