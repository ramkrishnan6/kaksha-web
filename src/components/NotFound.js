import React from "react";
import "../css/NotFound.css";

function NotFound() {
    return (
        <div id="notfound">
            <div className="notfound">
                <div className="notfound-404">
                    <h1>404</h1>
                </div>
                <h2 className="mt-5">Oops! This Page Could Not Be Found</h2>
                <p>Sorry but the page you are looking for does not exist.</p>
                <a href="/">Go To Homepage</a>
            </div>
        </div>
    );
}

export default NotFound;
