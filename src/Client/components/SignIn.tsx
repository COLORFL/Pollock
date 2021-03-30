import React, {useContext, useEffect, useState} from "react";
import {StateContext} from "../provider/StateProvider";

const FileTree = () => {
    return (
        <form>
            <input id="email" type="text" placeholder= "Email Address"/>
            <input id="password" type="text" placeholder= "Password"/>
            <input type="submit" value="signup" />
        </form>
    )
}