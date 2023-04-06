import React from "react";
import picture from "./errorPicture.png"
import "./ErrorPage.css"

const ErrorPage = () => {

    return (
        <div className="errorPage">
            <h2>The requested URL was not found.</h2>
            <img src={picture} />
        </div>
    );
};

export default ErrorPage