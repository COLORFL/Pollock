import React, {useContext, useEffect, useState} from "react";
import {StateContext} from "../provider/StateProvider";

const SignIn = () => {
    return (
        <div>
            <form>
                <input id="email" type="text" placeholder= "Email Address"/>
                <input id="password" type="text" placeholder= "Password"/>
                <input type="submit" value="signin" />
            </form>
            <button type="reset" className="button">Reset Password</button>
            <button type="button" className="button">OAuth</button>
            <button type="button" className="button">Sign In</button>
        </div>
    )
}

export default SignIn;
