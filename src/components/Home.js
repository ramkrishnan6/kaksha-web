import React from "react";
import Header from "./Header";

function Home() {
    return (
        <>
            <Header />
            <h1>Home Page</h1>
            <h4>
                <a href="/login">Login</a>
            </h4>
            <h4>
                <a href="/register">Register</a>
            </h4>
        </>
    );
}

export default Home;
