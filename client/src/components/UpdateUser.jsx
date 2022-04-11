import React, {useEffect, useState} from 'react';
import {RagistationStyle as R} from '../styled/Styled';
import AddAPhotoOutlinedIcon from '@mui/icons-material/AddAPhotoOutlined';
import { Link } from 'react-router-dom';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import app from './../Firebase';
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import {axiosInst} from './../altaxios';

const UpdateUser = () => {

    let path = window.location.pathname.split('/')[2];
    const [shwomsg, setShowmsg] = useState("");
    const [shwomsgStyl, setShowmsgStyl] = useState({});
    const [userData, setUserData] = useState({});


    useEffect(() => {
        axiosInst.get("auth/vfyUser").then(res => {
            let gotohome = document.getElementById("goto_home");
            if(res.data === ""){
                gotohome.click();
            }
        }).catch(e => {
            console.log(e);
        });
    },[]);



    const newData = (e) => {
        const data = {...userData};
        data[e.target.name] = e.target.value;
        setUserData(data);
    };


    const updateUsrData = (e) => {
        const url = "users/update/" + path;
        e.preventDefault();
        const gotHome = document.querySelector(".backHome");
        axiosInst.put(url,userData).then(res => {
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
                    gotHome.click();
                },3000);    
            }
            }).catch(e => {
            console.log(e);
        });
    };

    useEffect(() => {
        const url = "users/profile/" + path;
         axiosInst.get(url).then(res => {
            setUserData(res.data);
        }).catch(e => {
            console.log(e);
        });    
    
    }, [path]);
    


    const [progress,setProgress] = useState({});
//uploadfile

    const fileName = (e) => {
const file = e.target.files[0];
const filename =  file.name;
const extrenTion = filename.substring(filename.lastIndexOf('.') + 1);
if(extrenTion === "jpg" || extrenTion === "png" || extrenTion === "jpeg"){

const uploadImg = userData.imgName;
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
            setUserData({...userData, profile : downloadURL});
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
       <Link to={"/profile/"+userData._id} className="backHome"> <ArrowBackIcon/></Link>
           <R.RgHeaderh2>
               Update Information
           </R.RgHeaderh2>
       </R.RgHeader>
       <R.Rgformpart>
           <R.Rgform action="" onSubmit={updateUsrData} encType='multipart/form-data'>
            <R.formInerDiv>
            <R.RginnerPart>
                <R.Rginnerdiv>
                    <R.RgIlavel>
                        <R.RgLabelTxt>*Name</R.RgLabelTxt>
                        <R.Rgforminput type="text" name="name" onChange={newData} className="mblInputStyle"  defaultValue={userData.name} />
                    </R.RgIlavel>
                    <R.RgIlavel>
                        <R.RgLabelTxt>*Father Name</R.RgLabelTxt>
                        <R.Rgforminput type="text" name="fathername" onChange={newData} className="mblInputStyle"  defaultValue={userData.fathername} />
                    </R.RgIlavel>
                    <R.RgIlavel>
                        <R.RgLabelTxt>*Mother Name</R.RgLabelTxt>
                        <R.Rgforminput type="text" name="mothername" onChange={newData}  className="mblInputStyle" defaultValue={userData.mothername} />
                    </R.RgIlavel>
                    <R.RgIlavel>
                        <R.RgLabelTxt>*Village</R.RgLabelTxt>
                        <R.Rgforminput type="text" name="villagename" onChange={newData} className="mblInputStyle" defaultValue={userData.villagename}/>
                    </R.RgIlavel>
                    <R.RgIlavel>
                        <R.RgLabelTxt>*Union</R.RgLabelTxt>
                        <R.Rgforminput type="text" name="unionname" onChange={newData}  className="mblInputStyle"  defaultValue={userData.unionname} />
                    </R.RgIlavel>
                    <R.RgIlavel>
                        <R.RgLabelTxt>*Post Office</R.RgLabelTxt>
                        <R.Rgforminput type="text" name="postname" onChange={newData} className="mblInputStyle"  defaultValue={userData.postname} />
                    </R.RgIlavel>
                    <R.RgIlavel>
                        <R.RgLabelTxt>*District</R.RgLabelTxt>
                        <R.Rgforminput type="text" name="district" onChange={newData} className="mblInputStyle" defaultValue={userData.district} />
                    </R.RgIlavel>
                    <R.RgIlavel>
                        <R.RgLabelTxt>*Mobile-NO</R.RgLabelTxt>
                        <R.Rgforminput type="number" name="mobile" onChange={newData} className="mblInputStyle" defaultValue={userData.mobile} />
                    </R.RgIlavel>
                    <R.RgIlavel>
                        <R.RgLabelTxt>*NID-NO</R.RgLabelTxt>
                        <R.Rgforminput type="number" name="nidno" onChange={newData} className="mblInputStyle" defaultValue={userData.nidno} />
                    </R.RgIlavel>
                    <R.RgIlavel>
                        <R.RgLabelTxt>*Nominee Name</R.RgLabelTxt>
                        <R.Rgforminput type="text" name="nomineename" onChange={newData} className="mblInputStyle" defaultValue={userData.nomineename} />
                    </R.RgIlavel>
                    <R.RgIlavel>
                        <R.RgLabelTxt>*Nominee Fathername</R.RgLabelTxt>
                        <R.Rgforminput type="text" name="nomineeFathername" onChange={newData}  className="mblInputStyle"  defaultValue={userData.nomineeFathername} />
                    </R.RgIlavel>
                    <R.RgIlavel>
                        <R.RgLabelTxt>*Nominee Mothername</R.RgLabelTxt>
                        <R.Rgforminput type="text" name="nomineeMothername" onChange={newData}  className="mblInputStyle"  defaultValue={userData.nomineeMothername} />
                    </R.RgIlavel>
                    <R.RgIlavel>
                        <R.RgLabelTxt>*Nominee Relation</R.RgLabelTxt>
                        <R.Rgforminput type="text" name="relation" onChange={newData} className="mblInputStyle" defaultValue={userData.relation} />
                    </R.RgIlavel>

                    <R.rglabel>
                        <R.Rgforminputfile type="file" name="profile" onChange={fileName}/>
                            Change Profile
                        <AddAPhotoOutlinedIcon className="cameraIcon"/>
                    </R.rglabel>
                    <R.progress style={{display: progress.display}}>
                        <R.progressShow style={progress}>{progress.width}</R.progressShow>
                    </R.progress>

                    <R.previewUpImg src={userData.profile} id="previewimg" alt="previewImg..."></R.previewUpImg>

                    <R.RgformSubmit type="submit" name="update" value="Update"/>

                        </R.Rginnerdiv>
                    </R.RginnerPart>
                    <R.msgShow style={shwomsgStyl}>{shwomsg}</R.msgShow>
                </R.formInerDiv>
           </R.Rgform>
           <Link to="/login" style={{display:"none"}} id="goto_home">login</Link>
       </R.Rgformpart>

       </R.Rgmainsecond>
    </R.RgMain>
    )
        /* jshint ignore:end */ 

};

export default UpdateUser;