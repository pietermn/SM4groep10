import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Button, TextField } from "@mui/material";
import GoogleIcon from "@mui/icons-material/Google";
import AppleIcon from "@mui/icons-material/Apple";
import GitHubIcon from "@mui/icons-material/GitHub";
import TwitterIcon from "@mui/icons-material/Twitter";
import "./AuthScreen.scss";
import AvatarCustom from "../../components/Avatar/Avatar";
import { HexColorPicker } from "react-colorful";
import CSS from "csstype";

const AuthScreen = () => {
    const [avatarShown, setAvatarShown] = useState<boolean>(false);
    const [color, setColor] = useState("#b32aa9");
    const [username, setUsername] = useState<string>("");
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
                break;

            case "loginBack":
                setStartStyle({ display: "" });
                setLoginStyle({ display: "none" });
                break;

            case "registerNext":
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
                break;

            case "google":
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
                    <TextField id="outlined-basic" className="textfield" label="Email" variant="outlined" />
                    <TextField
                        id="outlined-basic"
                        className="textfield"
                        label="Password"
                        type="password"
                        variant="outlined"
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
                    <TextField id="outlined-basic" className="textfield" label="Email" variant="outlined" />
                    <TextField
                        id="outlined-basic"
                        className="textfield"
                        label="Password"
                        type="password"
                        variant="outlined"
                    />
                    <TextField
                        id="outlined-basic"
                        className="textfield"
                        label="Repeat Password"
                        type="password"
                        variant="outlined"
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
