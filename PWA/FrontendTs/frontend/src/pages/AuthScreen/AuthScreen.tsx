import React, { useEffect, useState } from "react";
import { NavigateFunction, useNavigate, useParams } from "react-router-dom";
import { Button, TextField } from "@mui/material";
import GoogleIcon from "@mui/icons-material/Google";
import AppleIcon from "@mui/icons-material/Apple";
import GitHubIcon from "@mui/icons-material/GitHub";
import TwitterIcon from "@mui/icons-material/Twitter";
import "./AuthScreen.scss";
import AvatarCustom from "../../components/Avatar/Avatar";
import { HexColorPicker } from "react-colorful";
import CSS from "csstype";
import { auth, db, provider } from "../../firebase/firebase";
import { addDoc, collection, doc, updateDoc } from "firebase/firestore";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signInWithRedirect, getRedirectResult, GoogleAuthProvider, signOut } from "firebase/auth";
import moment from "moment";


const addUserToDb = async (id: string, username: string, colour: string) => {
    try {
        const docRef = await addDoc(collection(db, "users"), {
          id: id,
          name: username,
          colour: colour,
        });
        console.log("Document written with ID: ", docRef.id);
      } catch (e) {
        console.error("Error adding document: ", e);
      }
}
function AsyncCreateUserAddtoDatabaseNavigate(email:string, password:string, username:string, color: string, navigate:NavigateFunction){
    var Uid = "";
    return new Promise(() =>{
        setTimeout((result)=>{
            Uid = auth.currentUser!.uid
            console.log(auth.currentUser)
            auth.currentUser ? addUserToDb(Uid, username, color): console.log("didn't add User to DB")
            auth.currentUser ? navigate("/userscreen") : console.log("didn't navigate")
        ;}, 1000);
    console.log("na TimeOut")
    createUser(email, password);
    })
}
function AsyncGoogleUserAddtoDatabaseNavigate(navigate:NavigateFunction){
    return new Promise(() =>{
        setTimeout((result)=>{
            console.log("navigating")
            auth.currentUser ? navigate("/userscreen") : console.log("didn't navigate")
        ;}, 1000);
        console.log("before if statement")
        console.log("creationdate: " + moment(new Date(auth.currentUser?.metadata.creationTime!)).format('L'))
        console.log("lastsignindate: " + moment(new Date(auth.currentUser?.metadata.lastSignInTime!)).format('L'))
        console.log("creation + 2: " + moment(new Date(auth.currentUser?.metadata.creationTime!)).add(5, 's').format('h:mm:ss'))
        console.log("lastsignin: " + moment(new Date(auth.currentUser?.metadata.lastSignInTime!)).format('h:mm:ss'))
        console.log(auth.currentUser)
        if(
            (
                (moment(new Date(auth.currentUser?.metadata.creationTime!)).format('L') == moment(new Date(auth.currentUser?.metadata.lastSignInTime!)).format('L')
                ) && (
                    moment(new Date(auth.currentUser?.metadata.creationTime!)).add(5, 's').format('h:mm:ss') >= moment(new Date(auth.currentUser?.metadata.lastSignInTime!)).format('h:mm:ss')
                )
            ) && auth.currentUser){
            console.log("First time login")
            const color: string = "#ffffff"
            const username = auth.currentUser!.displayName
            const Uid = auth.currentUser!.uid
            console.log(auth.currentUser)
            auth.currentUser ? addUserToDb(Uid, username!, color): console.log("didn't add User to DB")
        }
    })
}

function getGoogleResults(navigate:NavigateFunction){
    return new Promise(() =>{
        setTimeout((result) =>{
            AsyncGoogleUserAddtoDatabaseNavigate(navigate)
        ;}, 5000);
        redirectResults();
    })
}
const createUser = (email:string, password:string) => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        // ...
        console.log(user)
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
      });
}
const signinUser = (email:string, password:string) => {
    signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        // ...
        console.log(user)
    })
    .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
    });
}
const redirectGoogle = () => {
    signInWithRedirect(auth, provider)
}
const redirectResults = () => {
    getRedirectResult(auth)
    .then((result) => {
        // This gives you a Google Access Token. You can use it to access Google APIs.
        const credential = GoogleAuthProvider.credentialFromResult(result!);
        const token = credential!.accessToken;
        
        // The signed-in user info.
        const user = result!.user;
        console.log(user)
    }).catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        // const email = error.customData.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
        // ...
    });
}
const signOutFunction = () => {
    signOut(auth).then(() =>{
      // Sign-out successful.
      console.log("logout succesfull")
    }).catch((error) => {
        // An error happened.
    })
}

const AuthScreen = () => {
    const navigate = useNavigate()
    const [Uid, setUid] = useState<string>("");
    const [avatarShown, setAvatarShown] = useState<boolean>(false);
    const [color, setColor] = useState("#b32aa9");
    const [username, setUsername] = useState<string>("");
    const [loginEmail, setLoginEmail] = useState<string>("");
    const [loginPassword, setLoginPassword] = useState<string>("");
    const [registerEmail, setRegisterEmail] = useState<string>("");
    const [registerPassword, setRegisterPassword] = useState<string>("");
    const [repeatRegisterPassword, setRepeatRegisterPassword] = useState<string>("");
    const [startStyle, setStartStyle] = useState<CSS.Properties>({});
    const [loginStyle, setLoginStyle] = useState<CSS.Properties>({ display: "none" });
    const [firstRegisterStyle, setFirstRegisterStyle] = useState<CSS.Properties>({ display: "none" });
    const [secondRegisterStyle, setSecondRegisterStyle] = useState<CSS.Properties>({ display: "none" });
    function buttonPressed(value: string) {
        switch (value) {
            case "login":
                setStartStyle({ display: "none" });
                setLoginStyle({ display: "" });
                break;

            case "register":
                setStartStyle({ display: "none" });
                setFirstRegisterStyle({ display: "" });
                break;

            case "loginLogin":
                // createUser(loginEmail, loginPassword);
                // console.log(loginEmail)
                // console.log(loginPassword)
                signinUser(loginEmail, loginPassword);
                console.log(auth.currentUser)
                navigate("/userscreen")
                // console.log(auth.currentUser?.uid)
                // auth.currentUser ? navigate("/userscreen") : console.log("didnt login")
                // auth.currentUser ? navigate("/userscreen"+ auth.currentUser?.uid) : navigate(0)
                break;

            case "loginBack":
                setStartStyle({ display: "" });
                setLoginStyle({ display: "none" });
                break;

            case "registerNext":
                // createUser(registerEmail, registerPassword);
                // signinUser(registerEmail, registerPassword);
                // auth.currentUser ? navigate("/userscreen") : navigate(0)
                setSecondRegisterStyle({ display: "" });
                setFirstRegisterStyle({ display: "none" });
                setAvatarShown(true);
                break;

            case "registerBack":
                setStartStyle({ display: "" });
                setFirstRegisterStyle({ display: "none" });
                break;

            case "secondregisterBack":
                setFirstRegisterStyle({ display: "" });
                setSecondRegisterStyle({ display: "none" });
                setAvatarShown(false);
                break;

            case "secondregisterRegister":
                AsyncCreateUserAddtoDatabaseNavigate(registerEmail, registerPassword, username, color, navigate)
                break;

            case "google":
                redirectGoogle()
                break;

            case "apple":
                break;

            case "github":
                break;

            case "twitter":
                break;

            case "forgot":
                break;

            default:
                break;
        }
    }
    useEffect(() => {
        getGoogleResults(navigate);
        console.log("Logged in user:")
        console.log(auth.currentUser)
    }, []);//user keeps looping

    return (
        <div className="main-container">
            <div className="top-container">
                {!avatarShown ? (
                    <h1 className="title">CarShare</h1>
                ) : (
                    <AvatarCustom className="newAvatar" name={username} colour={color} size={200} fontSize={55} />
                )}

                <img className="iconBackgroundImage" alt="icons" src={"images/iconBackground.png"}></img>
            </div>
            <div className="bottom-container">
                <div className="start-container" style={startStyle}>
                    <Button className="Button" variant="outlined" onClick={() => buttonPressed("login")}>
                        Login
                    </Button>
                    <Button
                        className="Button"
                        variant="outlined"
                        color="error"
                        onClick={() => buttonPressed("register")}
                    >
                        Register
                    </Button>
                    <div style={{ width: "100vw", height: "30px" }}></div>
                    <div className="loginServices-container">
                        <div className="serviceButton" onClick={() => buttonPressed("google")}>
                            <GoogleIcon className="icon" />
                        </div>
                        <div className="serviceButton" onClick={() => buttonPressed("apple")}>
                            <AppleIcon className="icon" />
                        </div>
                        <div className="serviceButton" onClick={() => buttonPressed("github")}>
                            <GitHubIcon className="icon" />
                        </div>
                        <div className="serviceButton" onClick={() => buttonPressed("twitter")}>
                            <TwitterIcon className="icon" />
                        </div>
                    </div>
                    <p className="forgot" onClick={() => buttonPressed("forgot")}>
                        Forgot password?
                    </p>
                </div>

                <div className="login-container" style={loginStyle}>
                    <TextField id="outlined-basic" className="textfield" label="Email" variant="outlined" value={loginEmail}
                        onChange={(e) => {
                            setLoginEmail(e.target.value);
                        }}/>
                    <TextField
                        id="outlined-basic"
                        className="textfield"
                        label="Password"
                        type="password"
                        variant="outlined"
                        value={loginPassword}
                        onChange={(e) => {
                            setLoginPassword(e.target.value);
                        }}
                    />

                    <div style={{ width: "100%", height: "96px" }}></div>
                    <Button
                        className="Button"
                        variant="outlined"
                        style={{ border: "3px solid", fontFamily: "Inter-bold !important" }}
                        onClick={() => buttonPressed("loginLogin")}
                    >
                        Login
                    </Button>
                    <Button className="Button" variant="text" color="error" onClick={() => buttonPressed("loginBack")}>
                        Back
                    </Button>
                </div>

                <div className="first-register-container" style={firstRegisterStyle}>
                    <TextField id="outlined-basic" className="textfield" label="Email" variant="outlined" value={registerEmail}
                        onChange={(e) => {
                            setRegisterEmail(e.target.value);
                        }}/>
                    <TextField
                        id="outlined-basic"
                        className="textfield"
                        label="Password"
                        type="password"
                        variant="outlined"
                        value={registerPassword}
                        onChange={(e) => {
                            setRegisterPassword(e.target.value);
                        }}
                    />
                    <TextField
                        id="outlined-basic"
                        className="textfield"
                        label="Repeat Password"
                        type="password"
                        variant="outlined"
                        value={repeatRegisterPassword}
                        onChange={(e) => {
                            setRepeatRegisterPassword(e.target.value);
                        }}
                    />
                    <div style={{ width: "100%", height: "30px" }}></div>
                    <Button
                        className="Button"
                        variant="outlined"
                        style={{ border: "3px solid", fontFamily: "Inter-bold !important" }}
                        onClick={() => buttonPressed("registerNext")}
                    >
                        Next
                    </Button>
                    <Button
                        className="Button"
                        variant="text"
                        color="error"
                        onClick={() => buttonPressed("registerBack")}
                    >
                        Back
                    </Button>
                </div>

                <div className="second-register-container" style={secondRegisterStyle}>
                    <TextField
                        id="outlined-basic"
                        className="textfield"
                        label="Full name"
                        variant="outlined"
                        value={username}
                        onChange={(e) => {
                            setUsername(e.target.value);
                        }}
                    />
                    <HexColorPicker className="colorPicker" color={color} onChange={setColor} />
                    <div style={{ width: "100%", height: "20px" }}></div>
                    <Button
                        className="Button"
                        variant="outlined"
                        style={{ border: "3px solid", fontFamily: "Inter-bold !important" }}
                        onClick={() => buttonPressed("secondregisterRegister")}
                    >
                        Register
                    </Button>
                    <Button
                        className="Button"
                        variant="text"
                        color="error"
                        onClick={() => buttonPressed("secondregisterBack")}
                    >
                        Back
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default AuthScreen;
