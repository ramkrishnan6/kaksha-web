import React, { useEffect, useState } from "react";
import io from "socket.io-client";

const Room = ({ match }) => {
    const [onlineUsers, setOnlineUsers] = useState([]);

    const updateOnlineUsers = (onlineUsers) => {
        setOnlineUsers(onlineUsers);
    };

    const roomId = match.params.id;

    useEffect(() => {
        const socket = io("http://localhost:8000", {
            query: {
                token: localStorage.getItem("auth-token"),
            },
        });

        socket.emit("join-room", roomId);
        socket.on("user-connected", (onlineUsers) => {
            // console.log("New user joined", newUserId);
            updateOnlineUsers(onlineUsers);
            console.log(onlineUsers);
        });

        socket.on("user-disconnected", (onlineUsers) => {
            // console.log("User left", oldUserId);
            updateOnlineUsers(onlineUsers);
            console.log(onlineUsers);
        });

        socket.on("end", () => {
            console.log("finish");
        });
    }, []);

    return (
        <div>
            <h1>Room {roomId}</h1>
            <ul>
                {onlineUsers.map((user) => {
                    return <li key={user}>{user}</li>;
                })}
            </ul>
        </div>
    );
};

export default Room;
