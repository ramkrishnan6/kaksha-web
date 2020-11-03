import axios from "axios";
import React, { useState } from "react";
import Header from "./Header";
import { API_URL } from "../constants/api";

function Dashboard() {
    const [firstName, setFirstName] = useState();
    const [lastName, setLastName] = useState();

    const updateName = (firstName, lastName) => {
        setFirstName(firstName);
        setLastName(lastName);
    };

    const requestHeader = {
        headers: {
            "auth-token": localStorage.getItem("auth-token"),
        },
    };

    axios
        .get(`${API_URL}/user/dashboard`, requestHeader)
        .then((res) =>
            updateName(res.data.data.first_name, res.data.data.last_name)
        )
        .catch((err) => console.log(err));

    return (
        <>
            <Header userName={firstName} />
            <h2>
                {firstName} {lastName}'s Dashboard
            </h2>
        </>
    );
}

export default Dashboard;
