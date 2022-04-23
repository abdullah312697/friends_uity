import styled from 'styled-components';
export const HStyle = {

    Mainsection: styled.div `
        width:100%;
        Height:80px;
        display:flex;
        align-items:center;
        justify-content:space-between;
        background-color:#011627;
        color:#fff;
        border-bottom:1px solid #e3e3e385;
        box-sizing: border-box;
        position: relative;

        @media only screen and (max-width: 768px) {
            .desktopHeader{
                display:none;
            }
            .MobileHeader{
                display:flex;
            }
            .outerHeaderLogo{
                width: 40px;
                height: 40px;
            }
            .outerHeaderTitle{
                font-size: 15px !important;
                white-space: nowrap;
            }
            .loginBtn{
                margin-right: 10px !important;
                padding:4px 8px !important;
            }
        }
        .loginBtn{
            margin-right: 20px;
            -webkit-text-decoration: none;
            text-decoration: none;
            color: #fff;
            padding: 8px;
            font-size: 12px;
            font-weight: 600;
            transition:0.5s;
            border: 1px solid #ffa500;
            border-radius: 2px;
            &:hover{
                color:#ccc;
                border: 1px solid #ffa611
            }   
        }
    `,
    DesktopHeader: styled.div `
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;
    `,
    MobileHeader: styled.div `
        width: 100%;
        align-items: center;
        box-sizing: border-box;
        justify-content: space-between;
        display: none;
    `,


    Logo: styled.img `
    width: 80px;
    height: 79px;
    margin-left: 10px;
     `,


    Title: styled.h2 `
    font-size: 30px;
    color: #ffa500;    
    `,
    Nabbar: styled.ul `
        list-style-type: none;
        display:flex;
        align-items: center;
        justify-content:space-between;
    `,
    MobileHeadr: styled.div `
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    `,
    HeadSecOne: styled.div `
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;

        .mobleLogo{
            width: 40px;
            height: 40px;
            margin-left: 10px;
        }
        .mobleTitle{
            font-size: 17px;
            color: #ffa500;
        }
        .mobleLogBtn{
            padding: 5px;
            font-size: 10px;
        }
    `,
    HeadSecTwo: styled.div `
        position: absolute;
        background-color: #011627;
        width:0px;
        height: 263px;
        top: 0px;
        right: 0px;
        display: flex;
        align-items: baseline;
        justify-content: flex-start;
        z-index:999;
        transition: 1s all;
        opacity:0;
        border: 1px solid #746b3c;
        .mobileNav{
            padding: 10px !important;
            font-size: 25px;
            font-weight: bold;
        }
        .mobileNabber{
            width:100%;
        }
        .mobileNabList{
            width:100%;
            padding-top: 30px;
            flex-direction: column;
        }
    `,
    MenuIconShow: styled.div `
    position: relative;
    box-sizing: border-box;
    margin-right: 20px;
    overflow: hidden;

        #showMuneIcon{
            cursor:pointer;
        }
    `,
    Nabbarlist: styled.li `
    display: flex;
    position: relative;
    margin:10px;        
    .navRoute{
            text-decoration: none;
            color: #ff7600;
            transition:1s all;
            padding: 0px 19px;

            &:hover .showborder{
                opacity:1;
            }

        }
        .notifyBtn{
            text-decoration: none;
            color: #a9ff00;
            transition:1s all;
            padding: 0px 19px;
            &:hover{
                color:#a9ff00a8;
            }
        }
    
        .mobileNav{
            padding: 3px !important;
            font-size: 17px;
            font-weight: bold;
            color: #8f7f2d !important;
            border-bottom: 1px solid #8f7f2d;
            text-align: center;
            margin-bottom: 5px;
        }
        }
        .mobleLogBtn{
            text-align: center;
            margin-top: 20px;
            margin-right: 0px !important;
            color:#8f7f2d !important;
            border: 1px solid #8f7f2d !important;
        }
        #CloseMenu{
            top: -7px;
            position: absolute;
            right: -7px;
            color: #444;
            cursor: pointer;
            display:none;
        }

    `,
    borderbtm: styled.div `
        width: 100%;
        height: 2px;
        background-color: #e1e1e1;
        margin-top: 3px;
        opacity:0;
        transition:1s all;
     `,

    showNnum: styled.span `
    position: absolute;
    top: -20px;
    right: 28px;
    color: #a9ff00;

    @media only screen and (max-width:768px){
        top: 5px;
        right: 69px;    
    }
     `,
    UserSimg: styled.img `
    width: 30px;
    height: 30px;
    border-radius: 50%;
    cursor: pointer;
    border: 2px solid #00c42e;
    padding: 3px;
         `,

};

export const Bodystyle = {
    mainParent: styled.div `
    width: 100%;
    position: relative;
    padding: 20px;
    margin: 0px;
    box-sizing: border-box;
    overflow: hidden;
    `,
    MainSec: styled.div `
            display: flex;
            flex-direction: column;
            color: #fff;
            margin: 20px 30px;
            border: 1px solid #efefef80;
            box-sizing: border-box;
            position: relative;
            border-radius:2px;
            .mobileTitel{
                display:none;
            }
            .Allmonthname{
                @media only screen and (max-width:768px){
                    border:unset;
                    width:100%;
                }
            }
            @media only screen and (max-width:768px){
                margin: 0px;
                width:100%;

                .mobileTitel{
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    flex-direction: column;
                    padding-bottom: 15px;
                                    
                .mobileHTitle{
                font-size: 21px;
                text-align: center;
                margin: 15px 0px;

            }

            }
        `,
    MonthDesktop: styled.div `
            display: flex;
            align-items: center;
            justify-content: center;
            flex-direction: column;
            transition:1s all;
            @media only screen and (max-width:768px){
                display:none;
            }
        `,

    MonthMobile: styled.div `
            display:none;
            margin-right: 10px;
            width: 155px;
            border: 1px solid #8787876e;
            align-items: center;
            justify-content: space-between;
            padding: 5px;
            border-radius: 2px;
            color: #ffa611;
            cursor: pointer;

            .ArrowMonth{
                z-index: 1;
                font-size: 30px;
                border: 1px solid #3b4750;
                margin: 0px 7px;
                color: #ef9818;
            }
            @media only screen and (max-width:768px){
                display: flex;
            }
        `,

    shwoLiveMonth: styled.span `
        color: #e91c5e;
        `,

    MainFirst: styled.div `
        display: flex;
        align-items: center;
        justify-content: space-between;
        box-sizing: border-box;
        position: relative;
        color: #fff;
        width:100%;
        @media only screen and (max-width:768px){
            display:none;
        }
}
    `,

    MonthParent: styled.div `
    width:100%;
    box-sizing: border-box;
    `,
    inputForm: styled.form `
    display: flex;
    align-items: center;
    justify-content: center;
    `,
    YearInput: styled.input `
    border: none;
    border-radius: 5px;
    color: #ffa500;
    text-align: center;
    width: 120px;
    height: 100px;
    font-size: 40px;
    font-weight: 800;
    box-sizing: border-box;
    background-color:#011627;

        @media only screen and (max-width:768px){
            width: 75px;
            height: 50px;
            font-size: 25px;
        }
    `,
    AmountInput: styled.input `
    width: 220px;
    height: 20px;
    border-radius: 5px;
    padding: 5px;
    text-align: center;
    background-color: transparent;
    border: 1px solid #ccc;
    color: #fff;

        @media only screen and (max-width:768px){
            width:100%;
        }

    `,

    SubAmout: styled.input `
    position: absolute;
    left: 77px;
    bottom: -41px;
    padding: 4px;
    width: 70px;
    height: 30px;
    border-radius: 4px;
    background-color: transparent;
    border: 1px solid #ffa611;
    color: #fff;
    cursor: pointer;

    @media only screen and (max-width:768px){
        left: 44px;
        bottom: -41px;
        width: 60px;
        height: 26px;
    }

    `,
    incDecP: styled.div `
    display: flex;
    align-items: center;
    justify-content: center;
    margin-left: 28px;
    flex-direction: column;
    `,
    incDiv: styled.button `
    width: 30px;
    border: 1px solid #78838b;
    border-radius: 2px;
    text-align: center;
    cursor: pointer;
    font-size: 20px;
    padding: 2px;
    margin-bottom: 5px;
    font-weight: bold;
    color: #ff7600;
    background-color: transparent;
    transition:0.5s;

    &:hover{
        border:1px solid #dfe8ef;
    }

    &:disabled{
        color: #ff760087;
        border: 1px solid #78838b85;
        cursor: not-allowed;
    }
    `,
    decDiv: styled.button `
    width: 30px;
    border: 1px solid #78838b;
    border-radius: 2px;
    text-align: center;
    cursor: pointer;
    font-size: 20px;
    padding: 2px;
    margin-bottom: 5px;
    font-weight: bold;
    color: #ff7600;
    background-color: transparent;
    transition:0.5s;

    &:hover{
        border:1px solid #dfe8ef;
    }

    &:disabled{
        color: #ff760087;
        border: 1px solid #78838b85;
        cursor: not-allowed;
    }

    `,

    InnerFchild: styled.div `
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: #fff;
    margin-left: 15px;
    position: relative;
    `,
    mainSecond: styled.div `
            display: flex;
            flex-direction: column;
            border-left: 1px solid #78838b;
            align-items: center;
            box-sizing: border-box;

            @media only screen and (max-width: 768px) {
            width:100%;
            border:unset;
        }

    `,
    MonthName: styled.input `
    color: #ffa500;
    border: 1px solid #78838b;
    margin: 10px 0px;
    cursor: pointer;
    width: 200px;
    height: 40px;
    font-size: 18px;
    font-weight: 600;
    transition:0.5s all;
    border-left: unset;
    border-right: unset;
    background-color:#011627;
    text-align: center;


    &:last-child{
        margin-bottom:0px; 
        border-bottom:none;
    }
    &:first-child{
        margin-top:0px; 
        border-top:none;
    }


    &:hover{
                border-top: 1px solid #78838b52;
                border-bottom: 1px solid #78838b52;
                &:first-child{border-top:none}
                &:last-child{border-bottom:none}
         }
            

    `,
    Monthp: styled.div `
    font-size: 25px;
    color: #ff7600;
    padding: 10px;
    `,
    Mpheading: styled.h2 `
        color:#fff;
    `,
    Mnheading: styled.h2 `
    `,

    Allamount: styled.div `
    display: flex;
    align-items: center;
    justify-content: space-between;

    .hrefAmount{
        text-decoration: none;
        color: #00ff5b;
        border: 1px solid #00ff5b;
        font-size: 12px;
        padding: 4px 10px;
        border-radius: 3px;
        margin-left:25px;
    }

    `,
    AlluserATitle: styled.h2 `
    font-size: 25px;
    color: #e91c5e;
        `,


    Allmonthname: styled.div `
    display: flex;
    flex-direction: column;
    border-right: 1px solid #78838b;
    align-items: center;


    .activeMstyle{
        color: #fff;
    }

    @media only screen and(max-width:768px){
            border:unset;

        }

    `,
    RestltHead: styled.div `
    width:100%;
    display:none;
    align-items: center;
    justify-content: space-between;
    box-sizing: border-box;
    position: relative;
    margin: 20px 0px 5px;
    
    .mobile_innerMonth{
        display:none;
    }
        @media only screen and (max-width:768px){
            display:flex;
            .mobile_innerMonth{
                display:block;
            }

        }
    `,

    Alluseramout: styled.div `
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: initial;
    border: 1px solid #78838b;
    box-sizing: border-box;
    overflow: hidden;
    position: relative;
    border-top:unset;
    border-bottom:unset;

        @media only screen and (max-width:768px){
            width: 100%;
            border: unset;
        }
    `,
    AlluserDataShow: styled.div `
    display: flex;
    align-items: center;
    justify-content: space-between;
    border: 1px solid #78838b;
    padding: 8px;
    width:500px;
    height:auto;
    margin:10px 0px;
    height: 55px;
    border-left: unset;
    border-right: unset;
    transition:0.5s all;
    box-sizing: border-box;

    &:last-child{
        margin-bottom:0px;
    }
    &:hover{
                border-top: 1px solid #78838b52;
                border-bottom: 1px solid #78838b52;
            }

            @media only screen and (max-width:768px){
                height:52px;
                width:100%;
            }

    `,
    UserSimg: styled.img `
        width: 40px;
        height: 40px;
        border-radius: 50%;
        cursor: pointer;
        `,
    UserName: styled.span `
    color: #ffa500;
    font-size: 20px;
    font-weight: 600;    
    `,
    userPayment: styled.div `
    position: relative;
    width: 125px;
    display: block;
    margin: -29px -60px 0px 0px;
    
    `,
    userPade: styled.div `
    color: #00ff5b;
    border: 1px solid;
    padding: 5px;
    cursor: pointer;
    border-radius: 4px;
    position: absolute;
`,
    userUnPade: styled.div `
    border: 1px solid;
    padding: 5px;
    border-radius: 4px;
    color: #ccff00;
    cursor: pointer;
    position: absolute; 
    `,

    TotalMember: styled.div `margin-right: 80px;`,

    OurTtitle: styled.h2 `
    color: #e9e9e9e0;
    font-size: 25px;`,

    InnerSecond: styled.div `
            display: flex;
            box-sizing: border-box;
            position: relative;
            overflow: hidden;
            border-top:1px solid #78838b;
            justify-content: space-between;
            width:100%;
            @media only screen and (max-width:768px){
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;
                width: 100%;
                box-sizing: border-box;
            }
        `,
    userPerents: styled.div `
    width: 100%;
    height: auto;
    box-sizing: border-box;
    position: relative;

            &:last-child{
                margin-bottom:0px;
                border-bottom: none;
            }

        `,
    UserDetails: styled.div `
            display: flex;
            align-items: center;
            justify-content: space-between;
            border: 1px solid #78838b;
            padding: 8px;
            margin: 10px 0px;
            border-left: unset;
            border-right: unset;
            height: 55px;
            width: 350px;
            transition:0.5s all;
            box-sizing: border-box;

            &:last-child{
                margin-bottom:0px;
            }

            &:hover{
                border-top: 1px solid #78838b52;
                border-bottom: 1px solid #78838b52;
            }
            .view_btn{
                border: 1px solid #ffa500;
                color: #ffffffd1;
                width: 60px;
                height: 30px;
                text-align: center;
                line-height: 30px;
                border-radius: 2px;
                cursor: pointer;
                transition:0.5s all;
                background-color: #011627;
                text-decoration: none;
                &:hover{
                    border: 1px solid #ffa5009e;
                }

            }

            @media only screen and (max-width:768px){
                width:100%;
                height:52px;

                &:last-child{
                    border-bottom:0px;
                }
    
    
            }
        `,
    userImg: styled.img `
            width:40px;
            height:40px;
            border-radius:50%;
            cursor: pointer;
        `,
    userName: styled.span `
            font-size: 20px;
            color: #ffa500;
            font-weight: 600;
        `,
};




export const RagistationStyle = {

    RgMain: styled.div `
        position: relative;
        box-sizing: border-box;
        overflow: hidden;
        display: flex;
        align-items: center;
        justify-content: center;

        @media only screen and (max-width: 768px){
            width: 100%;
        }
    `,
    Rgmainsecond: styled.div `
        align-items: center;
        width: 800px;
        border-radius: 10px;
        box-sizing: border-box;
        position: relative;
        padding: 30px;
        @media only screen and (max-width: 768px){
            width: 100%;
        }
        
    `,
    formInerDiv: styled.div `
        display:flex;
        align-items:center;
        flex-direction: column;
        overflow: hidden;
        box-sizing: border-box;

        .moveAble{
            display:none;
        }
        .active{
            display:flex;
        }

        .showuserMsg{
            position:absolute;
            bottom: 104px;
        }
    `,
    msgShow: styled.span `
    display: block;
    border-radius: 5px;
    font-size: 17px;
    position: absolute;
    bottom: 102px;
    opacity:0;
    transition:all 0.5s;
    `,
    RgHeader: styled.div `
        display: flex;
        align-items: center;
        justify-content: center;
        margin-bottom: 30px;

        .backHome{
            text-decoration: none;
            color: #ffa500;
            position:absolute;
            left:12px;
            top:32px;
        }

    `,
    RgHeaderh2: styled.h2 `
        color: #fff;
    `,

    RgHeaderhse: styled.h2 `
            font-size: 30px;
            color: #efefef;
            @media only screen and (max-width:768px){
                font-size:24px;
            }
        `,
    Rgformpart: styled.div `
        border: 1px solid #ccc;
        border-radius: 10px;
        padding: 30px;
    `,
    Rgform: styled.form `
        .secTwo{ 
            justify-content: space-between !important;
        }
        .FinelRgBtn{ 
            justify-content: space-between !important;
        }

    `,
    RgIlavel: styled.div `
    width: 100%;
    height: auto;
    display: flex;
    align-items: flex-start;
    justify-content: center;
    flex-direction: column;
    box-sizing: border-box;
    overflow: hidden;
    `,
    RgLabelTxt: styled.span `
    color: #b5b5b59e;
    font-size: 13px;
    font-weight: normal;
    font-family: monospace;
    margin-bottom: 1px;
    `,
    Rgforminput: styled.input `
        border: 1px solid #ccc;
        color: #fff;
        width: 500px;
        height: 30px;
        padding: 5px 5px 5px 10px;
        margin-bottom: 20px;
        border-radius: 5px;   
        background-color: #011627; 
        `,

    Rgforminputfile: styled.input `
        opacity: 0;
        position: absolute;
        `,

    rglabel: styled.label `
                border: 1px solid #ccc;
                color: #ffa500;
                border-radius: 5px;
                width: 245px;
                padding: 5px 5px 5px 10px;
                height: 30px;
                display: flex;
                align-items: center;
                cursor: pointer;
                margin-bottom: 20px;
                position: relative;
                justify-content: center;
                .cameraIcon{
                    color: #ffa500;
                    margin-left: 20px;
                    cursor: pointer;
                }
    `,

    progress: styled.div `
    width: 117px;
    height: 11px;
    background-color: #ccc;
    border-radius: 10px;
    position: relative;
    bottom: 46px;
    right: -199px;
    display:none;

    @media only screen and (max-width: 768px){
        bottom: 3px;
        right: -6px;    
    }
}
    `,
    progressShow: styled.div `
    display: flex;
    border-radius: 10px;
    background-color: #23f533;
    width: 0%;
    height: 100%;
    color: #fff;
    text-align: center;
    align-items: center;
    justify-content: flex-end;
    font-size: 10px;
`,

    previewImg: styled.img `
        width:50px;
        height:50px;
        display:none;
        border-radius:3px;
        @media only screen and (max-width: 768px){
            margin-top:15px;    
        }    
    `,
    previewUpImg: styled.img `
        width:50px;
        height:50px;
        border-radius:3px;
        margin-bottom:35px;
    `,
    RgformSubmit: styled.input `
        width: 100px;
        height: 30px;
        border: 1px solid #ffa500;
        background-color: #011627;
        font-size: 16px;
        color: #b5b5b5;
        font-weight: 600;
        border-radius: 2px;
        cursor: pointer;
        transition:0.5s all;
        &:hover{
            border: 1px solid #ffb939;
            color: #e7e7e7;
            }

    @media only screen and (max-width: 768px){
        margin-left:20px;
    }
    `,
    RginnerPart: styled.div `
        display: flex;
        align-items: center;
        flex-direction: column;

        @media only screen and (max-width: 768px){
            width:100%
        }
    `,
    Rginpartheader: styled.h2 `
    margin-bottom: 20px;
    color: #ffa500e6;

    @media only screen and (max-width: 768px) {
            font-size:18px;
        }

    `,
    Rginnerdiv: styled.div `
        display: flex;
        align-items: center;
        flex-direction: column;
        @media only screen and (max-width: 768px) {
        width: 100%;

        .mblInputStyle{
            width: 100% !important;
            height: 39px !important;
            box-sizing: border-box;
            overflow: hidden;        
            }
    }

    `,

    FirstPassword: styled.div `
    position: relative;
    overflow: hidden;
    width: auto;
    height: auto;

@media only screen and (max-width: 768px) {
    overflow:unset;
    width:100%;

    .showPassOne,.hidePassOne{
        padding: 7px 12px !important;
    }
}
        .showPassOne{
            color: #fff;
            position: absolute;
            right: 0px;
            top: 16px;
            padding: 9px 13px;
            background-color: #cccccc21;
            cursor: pointer;
        }
        .hidePassOne{
            color: #fff;
            position: absolute;
            right: 0px;
            top: 16px;
            padding: 9px 13px;
            background-color: #cccccc21;
            cursor: pointer;
        }

    `,
    SecondPassword: styled.div `
    position: relative;
    overflow: hidden;
    width: auto;
    height: auto;

    @media only screen and (max-width: 768px) {
    overflow:unset;
    width:100%;

    .showPassTwo,.hidePassTwo{
        padding: 7px 12px !important;
    }
}

            .showPassTwo{
                color: #fff;
                position: absolute;
                right: 0px;
                top: 16px;
                padding: 9px 13px;
                background-color: #cccccc21;
                cursor: pointer;

            }
            .hidePassTwo{
                color: #fff;
                position: absolute;
                right: 0px;
                top: 16px;
                padding: 9px 13px;
                background-color: #cccccc21;
                cursor: pointer;
                }
    `,

    NextPrev: styled.div `
        display:flex;
        align-items: center;
        justify-content: flex-end;
        width: 100%;
        height: auto;
        position: relative;
        margin-top: 50px;

        #nextBupdate{
            display:none;
        }
    `,
    NextOne: styled.input `
    width: 100px;
    height: 30px;
    border:none;
    color: #fff;
    background-color:#008000e0;
    border-radius: 4px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 19px;
    cursor: pointer;
    transition:0.5s all;

    &:hover{
        background-color: #008000a8;
        color: #eeeeeec7;
    }

    `,
    PrevOne: styled.div `
    width: 100px;
    height: 30px;
    color: #fff;
    background-color: #ff0000c2;
    border-radius: 4px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 19px;
    cursor: pointer;
    transition:0.5s all;
    &:hover{
        background-color: #ff0000a6;
        color: #eeeeeec7;
    }

    `,

};



export const ViewStyle = {

    viewMain: styled.div `
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 5px;
        flex-direction: column;
        margin: 10px auto;
        padding: 25px;
        box-sizing: border-box;
        position: relative;    
    
    `,
    profileDiv: styled.div `
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        margin-bottom: 35px;
    `,
    profile: styled.img `
        width: 150px;
        height: 150px;
        margin-bottom: 20px;
        border-radius: 50%;   
        @media only screen and (max-width:768px){
            width: 100px;
            height: 100px;
        }
    `,
    username: styled.h2 `
        font-size: 25px;
        color: #ff8d00;
        @media only screen and (max-width:768px){
            font-size: 23px;
        }

    `,
    fakeData: styled.div `
    color: #f00;
    font-size: 30px;
    width: 400px;
    position: absolute;
    top: 50%;
    left: 37%;
    `,
    userInfo: styled.div `
    .userShowMobile{
        display:none;
    }
    @media only screen and (max-width:768px){
        .userShowDesktop{
            display:none;
        }
        .userShowMobile{
        display:block !important;
    }
 
    }
    `,
    userTable: styled.table `
        border-collapse: collapse;
        color:#fff;
    `,
    tableBody: styled.tbody `
    
    `,
    tableRow: styled.tr `
        margin:0;
        padding:0;

        &:nth-child(even){
            background-color:#d9691a14;
        }
        &:nth-child(odd){
            background-color:#1ad99214;
        }

    `,
    tableData: styled.td `
        border: 1px solid #44444473;
        padding: 0px;
        width: 380px;
        height: 45px;
        padding-left: 13px; 

    `,
    tableName: styled.span `
        margin-right:10px;
    `,
    tableInfo: styled.span `
        
    `,
    btnParent: styled.div `
        display: flex;
        align-items: center;
        justify-content: space-evenly;
        margin:20px 0px 0px;
        width:100%;
        .backHome{
            text-decoration: none;
            border: 2px solid #cb6f11;
            border-radius: 3px;
            color: #fff;
            padding: 0px;
            text-align: center;
            width: 85px;
            height: 30px;
            line-height: 30px;
            display: flex;
            align-items: center;
            justify-content: space-evenly;
        }
        .goUpdate{
            text-decoration: none;
            border: 2px solid #ff0000;
            border-radius: 3px;
            color: #fff;
            padding: 0px;
            text-align: center;
            height: 30px;
            line-height: 30px;
            width: 85px;
            display: flex;
            align-items: center;
            justify-content: space-evenly;
        }

    `
};

export const voucherStyle = {
    voucherMain: styled.div `
        width: 100%;
        height: auto;
        box-sizing: border-box;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        box-sizing: border-box;
        padding: 25px;
    `,
    DataShow: styled.div `
        color: #ff0052,
        fontSize: 28px,
        textAlign: center,
        display: block
    `,
    voucherHeadr: styled.div `
        margin: 50px 0px;
        display: flex;
        align-items: center;
        justify-content: center;
        
        .backHome{
            text-decoration: none;
            color: #ffa500;
            position:absolute;
            left:12px;
            top:55px;
        }
        .ToConfirm{
            text-decoration: none;
            color: #ffa500;
            position:absolute;
            left: -60px;
            top:55px;
        }
        .innerArrow{
            color: #ff7600;
            font-size: 30px;
            font-weight: bold;
            cursor: pointer;
            margin-top: 6px;
            margin-right: 15px;
                }
        @media only screen and (max-width: 768px) {
            margin: 30px 0px;

            .backHome{
                text-decoration: none;
                color: #ffa500;
                position:absolute;
                left:12px;
                top:32px;
            }

            .ToConfirm{
                text-decoration: none;
                color: #ffa500;
                position:absolute;
                left:12px;
                top:32px;
            }
    
    
        }

    `,
    voucherHeaerTxt: styled.h2 `
        color: #ff0047;
        font-size: 30px;
        @media only screen and (max-width: 768px) {
            font-size: 25px;
        }

    `,
    vsecondSec: styled.div `
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    flex-wrap: wrap;
    box-sizing: border-box;

    @media only screen and (max-width:768px) {
        width: 100%;
    }
    
    `,
    vfirstSec: styled.div `
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    box-sizing: border-box;
    position: relative;
    @media only screen and (max-width:768px) {
        width: 100%;
    }

    `,

    vYearDiv: styled.div `
        display: flex;
        align-items: center;
        justify-content: flex-start;
        border: 1px solid #767f86;
        padding: 20px;
        width: 400px;
        border-radius: 8px;
        margin-bottom:50px;
        box-sizing: border-box;
        position: relative;

        @media only screen and (max-width: 768px) {
            width: 100%;
            margin-bottom: 30px;
        }
    `,
    vAmountearDiv: styled.div `
    
    display: flex;
    align-items: center;
    justify-content: flex-start;
    border: 1px solid #767f86;
    padding: 20px;
    width: 400px;
    border-radius: 8px;
    margin-bottom:50px;
    box-sizing: border-box;
    position: relative;

    @media only screen and (max-width: 768px) {
        width: 100%;
        padding: 50px 30px;
        box-sizing: border-box;
        }

    `,
    msgShow: styled.span `
    display: block;
    border-radius: 5px;
    font-size: 17px;
    position: absolute;
    bottom: 99px;
    opacity:0;
    right: 111px;
    transition:all 0.5s;
    `,

    msgShowAmt: styled.span `
    display: block;
    border-radius: 5px;
    font-size: 17px;
    position: absolute;
    bottom: 99px;
    opacity:0;
    right: 111px;
    transition:all 0.5s;
    
    @media only screen and (max-width:768px){
        right: 58px;
    }
`,

    vYearTxt: styled.h2 `
    color: #fff;
    font-size: 24px;
    `,
    vAmountTxt: styled.h2 `
        color: #fff;
        font-size: 24px;
        @media only screen and (max-width: 768px) {
            font-size: 12px;
            white-space: nowrap;
            }    
    `,

    vuserHist: styled.div `
        width: 400px;
        color: #fff;
        border: 1px solid #cccccc94;
        box-sizing: border-box;
        display: flex;
        border-radius: 10px;
        align-items: center;
        justify-content: center;
        margin-bottom:50px;

        @media only screen and (max-width: 768px){
            width: 100%;
        }
    `,
    vuserHinner: styled.div `
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        box-sizing: border-box;
    `,
    vsuMname: styled.span `
        width: 100%;
        padding: 10px;
        font-size: 25px;
        text-align: center;
        color: #ff7600;
        font-weight: 600;
        box-sizing: border-box;
        border-bottom: 1px solid #767f86;
        margin-bottom: 10px;
    `,
    vsuDateinfo: styled.span `
    border-bottom: 1px solid #767f86;
    width: 100%;
    text-align: center;
    padding: 10px;
    box-sizing: border-box;
    font-size: 19px;
    color: #fff;

`,
    vsUCmpUncmp: styled.span `
    color: #2ae113;
`,

    vsuDate: styled.span `
        padding: 10px;
        border-bottom: 1px solid #767f86;
        font-size: 18px;
        color: #ffffff;
        box-sizing: border-box;
        width: 100%;
        text-align: center;
    `,
    vsAtshow: styled.span `
        margin-right: 5px;
        color: #ffe000;
    `,
    vsAmount: styled.span `
        width: 100%;
        text-align: center;
        border-bottom: 1px solid #767f86;
        padding: 10px;
        box-sizing: border-box;
        font-size: 19px;
        color: #ff5e00;
    `,
    vsOptions: styled.span `
        width: 100%;
        padding: 10px;
        text-align: center;
        box-sizing: border-box;
        color: #12dbac;

    `,

    UsrImg: styled.img `
        width:50px;
        height:50px;
        border-radius:50%;
    `,
    ShowConDiv: styled.div `
    display: flex;
    align-items: center;
    width: 100%;
    justify-content: space-evenly;
    border-bottom: 1px solid #767f86;
    box-sizing: border-box;
    padding: 5px;
    `,
    UnameSp: styled.span `
    font-size: 21px;
    font-weight: 600;
    color: #ffa514;
    `,
    ConfirmInnerbdr: styled.span `
    border-top: 1px solid #767f86;
    width: 100%;
    text-align: center;
    box-sizing:border-box;
    `,
    ConfinrmBtn: styled.button `
    width: 80px;
    height: 30px;
    border: 1px solid #1cff00;
    background-color: #011627;
    font-size: 16px;
    color: #1cff00;
    border-radius: 4px;
    cursor: pointer;
    padding: 5px;
    margin: 10px 0px;
    `,

};

export const userPayment = {
    PaymentMainDiv: styled.div `
    width: 750px;
    margin: 0 auto;
    padding: 30px;
    text-align: center;
    box-sizing: border-box;
        @media only screen and (max-width:768px){
            width:100%;
        }
        `,
    FirstInnPerent: styled.div `
        width: 100%;
        box-sizing: border-box;
        position: relative;
        display: flex;
        align-items: center;
        justify-content: center;

        .innerArrow{
            color: #ff7600;
            font-size: 30px;
            font-weight: bold;
            cursor: pointer;
            margin-top: 6px;
            margin-right: 15px;
                }
    `,
    PaymentInnerDiv: styled.div `
    border: 1px solid #ccc;
    border-radius: 10px;
    padding: 30px;
    margin-top: 50px;
    box-sizing: border-box;
    `,

    PaymentHeading: styled.h2 `
    font-size: 30px;
    color: #efefef;
    `,
    PaymentForm: styled.form `
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    width: 100%;

    `,
    PaymentInput: styled.input `
    border: 1px solid #ccc;
    color: #fff;
    width: 500px;
    height: 30px;
    padding: 5px 5px 5px 10px;
    margin-bottom: 20px;
    border-radius: 5px;
    background-color: #011627;


    &:last-child{
        margin-bottom:0px; 
    }
    @media only screen and (max-width:768px){
        width:100%;
    }

    `,
    PaymentSelect: styled.select `
    border: 1px solid #ccc;
    color: #fff;
    width: 517px;
    height: 42px;
    padding: 5px 5px 5px 10px;
    margin-bottom: 20px;
    border-radius: 5px;
    background-color: #011627;
    cursor: pointer;
    @media only screen and (max-width:768px){
        width:107%;
    }

    `,
    PaymentOptions: styled.option `
    
    `,
    PaySubInput: styled.input `
    width: 91px;
    height: 30px;
    border: 1px solid #ffa500;
    border-radius: 3px;
    font-size: 18px;
    font-weight: 500;
    background-color: #011627;
    color: #fff;
    cursor: pointer;
    `,
    MsgShow: styled.span `
    opacity:0;
    transition:all 0.5s;
    margin-bottom:10px;
    `,

};