import React, { useEffect, useState } from 'react';
import {ViewStyle as v} from '../styled/Styled';
import profile from '../images/person.png';
import {Link} from 'react-router-dom';
import UpdateIcon from '@mui/icons-material/Update';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import {axiosInst} from './../altaxios';


const User = () => {
const [userData, setUserData] = useState({});
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
            const path = window.location.pathname.split('/')[2];
            const url = "users/profile/" + path;
             await axiosInst.get(url).then(res => {
                setUserData(res.data);
            }).catch(e => {
                console.log(e);
            });    
        
        };
    getLate();


}, []);
/*jshint ignore : start*/
    return(
        Object.keys(userData).length === 0 ?
        
        <v.viewMain></v.viewMain>
        :

        userData !== undefined && userData !== null ?
        <v.viewMain>
            <v.profileDiv>
                <v.profile src={userData.profile ? userData.profile : profile}/>
                <v.username>{userData.name}</v.username>
            </v.profileDiv>
            <v.userInfo>
                <v.userTable className="userShowDesktop">
                    <v.tableBody>

                    <v.tableRow>
                        <v.tableData> <v.tableName>Father-Name :</v.tableName> <v.tableInfo>{userData.fathername}</v.tableInfo> </v.tableData>
                        <v.tableData> <v.tableName>Mother-Name :</v.tableName> <v.tableInfo>{userData.mothername}</v.tableInfo> </v.tableData>
                    </v.tableRow>

                    <v.tableRow>
                        <v.tableData> <v.tableName>Mobile-No :</v.tableName> <v.tableInfo>{userData.mobile}</v.tableInfo> </v.tableData>
                        <v.tableData> <v.tableName>NID-No :</v.tableName> <v.tableInfo>{userData.nidno}</v.tableInfo> </v.tableData>
                    </v.tableRow>
                    <v.tableRow>
                        <v.tableData> <v.tableName>Post-Office :</v.tableName> <v.tableInfo>{userData.postname}</v.tableInfo> </v.tableData>
                        <v.tableData> <v.tableName>District :</v.tableName> <v.tableInfo>{userData.district}</v.tableInfo> </v.tableData>
                    </v.tableRow>
                    <v.tableRow>
                        <v.tableData> <v.tableName>Union :</v.tableName> <v.tableInfo>{userData.unionname}</v.tableInfo> </v.tableData>
                        <v.tableData> <v.tableName>Village :</v.tableName> <v.tableInfo>{userData.villagename}</v.tableInfo> </v.tableData>
                    </v.tableRow>
                    <v.tableRow>
                        <v.tableData> <v.tableName>Nominee-Name :</v.tableName> <v.tableInfo>{userData.nomineename}</v.tableInfo> </v.tableData>
                        <v.tableData> <v.tableName>Nominee-Fother-Name :</v.tableName> <v.tableInfo>{userData.nomineeFathername}</v.tableInfo> </v.tableData>
                    </v.tableRow>
                    <v.tableRow>
                        <v.tableData> <v.tableName>Nominee-Mother-Name :</v.tableName> <v.tableInfo>{userData.nomineeMothername}</v.tableInfo> </v.tableData>
                        <v.tableData> <v.tableName>Nominee-Relation :</v.tableName> <v.tableInfo>{userData.relation}</v.tableInfo> </v.tableData>
                    </v.tableRow>
                </v.tableBody>
            </v.userTable>
            <v.userTable className="userShowMobile">
                    <v.tableBody>
                    <v.tableRow>
                        <v.tableData> <v.tableName>Father-Name :</v.tableName> <v.tableInfo>{userData.fathername}</v.tableInfo> </v.tableData>
                    </v.tableRow>
                    <v.tableRow>
                        <v.tableData> <v.tableName>Mother-Name :</v.tableName> <v.tableInfo>{userData.mothername}</v.tableInfo> </v.tableData>
                    </v.tableRow>
                    <v.tableRow>
                        <v.tableData> <v.tableName>Mobile-No :</v.tableName> <v.tableInfo>{userData.mobile}</v.tableInfo> </v.tableData>
                    </v.tableRow>
                    <v.tableRow>
                        <v.tableData> <v.tableName>NID-No :</v.tableName> <v.tableInfo>{userData.nidno}</v.tableInfo> </v.tableData>
                    </v.tableRow>
                    <v.tableRow>
                        <v.tableData> <v.tableName>Post-Office :</v.tableName> <v.tableInfo>{userData.postname}</v.tableInfo> </v.tableData>
                    </v.tableRow>
                    <v.tableRow>
                        <v.tableData> <v.tableName>District :</v.tableName> <v.tableInfo>{userData.district}</v.tableInfo> </v.tableData>
                    </v.tableRow>
                    <v.tableRow>
                        <v.tableData> <v.tableName>Union :</v.tableName> <v.tableInfo>{userData.unionname}</v.tableInfo> </v.tableData>
                    </v.tableRow>
                    <v.tableRow>
                        <v.tableData> <v.tableName>Village :</v.tableName> <v.tableInfo>{userData.villagename}</v.tableInfo> </v.tableData>
                    </v.tableRow>
                    <v.tableRow>
                        <v.tableData> <v.tableName>Nominee-Name :</v.tableName> <v.tableInfo>{userData.nomineename}</v.tableInfo> </v.tableData>
                    </v.tableRow>
                    <v.tableRow>
                        <v.tableData> <v.tableName>Nominee-Fother-Name :</v.tableName> <v.tableInfo>{userData.nomineeFathername}</v.tableInfo> </v.tableData>
                    </v.tableRow>
                    <v.tableRow>
                        <v.tableData> <v.tableName>Nominee-Mother-Name :</v.tableName> <v.tableInfo>{userData.nomineeMothername}</v.tableInfo> </v.tableData>
                    </v.tableRow>
                    <v.tableRow>
                        <v.tableData> <v.tableName>Nominee-Relation :</v.tableName> <v.tableInfo>{userData.relation}</v.tableInfo> </v.tableData>
                    </v.tableRow>

                </v.tableBody>
            </v.userTable>

            </v.userInfo>
            <v.btnParent>
                <Link to="/home" className="backHome"> <ArrowBackIcon/> Back </Link>
                <Link to={"/update/" + userData._id} className="goUpdate"> Update <UpdateIcon/></Link>
            </v.btnParent>
            <Link to="/login" style={{display:"none"}} id="goto_home">login</Link>
        </v.viewMain>

                : <v.fakeData>This user Data is Not Abailable!</v.fakeData>
    )

    /*jshint ignore : end*/

};

export default User;