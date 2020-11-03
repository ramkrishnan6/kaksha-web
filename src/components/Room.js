import React, { useEffect, useState } from "react";
import io from "socket.io-client";
import axios from "axios";
import TeacherControls from "./TeacherControls";
import ClassEndModal from "./ClassEndModal";
import { useHistory } from "react-router-dom";

const Room = ({ match }) => {
    const [onlineStudents, setOnlineStudents] = useState([]);
    const [onlineTeachers, setOnlineTeachers] = useState([]);
    const [isClassActive, setIsClassActive] = useState(false);
    const [isTeacher, setIsTeacher] = useState(false);
    const [isClassEnd, setIsClassEnd] = useState(false);
    const [modalShow, setModalShow] = useState(false);
    const history = useHistory();

    const updateOnlineUsers = (onlineStudents, onlineTeachers) => {
        setOnlineStudents(onlineStudents);
        setOnlineTeachers(onlineTeachers);
    };

    const updateClassStatus = (status) => {
        setIsClassActive(status);
    };

    const updateIsTeacher = (value) => {
        setIsTeacher(value);
    };

    const updateClassEnd = (value) => {
        setIsClassEnd(value);
    };

    const roomId = match.params.id;

    const requestHeader = {
        headers: {
            "auth-token": localStorage.getItem("auth-token"),
        },
    };

    const fetchClassStatus = async () => {
        const classStatus = await fetch(
            `http://127.0.0.1:8000/class/${roomId}`,
            {
                mode: "cors",
                headers: {
                    "Content-Type": "application/json",
                    "auth-token": localStorage.getItem("auth-token"),
                },
            }
        );

        const status = await classStatus.json();
        updateClassStatus(status.data.is_active);
    };

    const fetchUser = async () => {
        const userDetails = await fetch(
            `http://127.0.0.1:8000/user/dashboard`,
            {
                mode: "cors",
                headers: {
                    "Content-Type": "application/json",
                    "auth-token": localStorage.getItem("auth-token"),
                },
            }
        );
        const user = await userDetails.json();
        const value = user.data.role === "teacher" ? true : false;
        updateIsTeacher(value);
    };

    useEffect(() => {
        fetchUser();
        fetchClassStatus();

        if (isClassActive) {
            startConnection();
        }
    }, [isClassActive, isClassEnd]);

    const startConnection = () => {
        const socket = io("http://127.0.0.1:8000", {
            query: {
                token: localStorage.getItem("auth-token"),
            },
        });

        socket.emit("join-room", roomId);
        socket.on("user-connected", (onlineStudents, onlineTeachers) => {
            // console.log("New user joined", newUserId);
            updateOnlineUsers(onlineStudents, onlineTeachers);
        });

        socket.on("user-disconnected", (onlineStudents, onlineTeachers) => {
            // console.log("User left", oldUserId);
            updateOnlineUsers(onlineStudents, onlineTeachers);
        });

        if (isClassEnd) {
            socket.emit("class-end", roomId);
            updateClassStatus(false);
            updateClassEnd(false);
        }

        socket.on("leave-room", (onlineStudents, onlineTeachers) => {
            updateOnlineUsers(onlineStudents, onlineTeachers);

            socket.disconnect();
            setModalShow(true);
        });
    };

    const startClass = () => {
        axios
            .post(
                "class",
                {
                    number: roomId,
                    is_active: true,
                },
                requestHeader
            )
            .then((res) => {
                updateClassStatus(true);
            })
            .catch((err) => {
                console.log(err);
            });
    };

    const endClass = async () => {
        await fetch(`http://127.0.0.1:8000/class/${roomId}`, {
            mode: "cors",
            method: "PUT",
            body: JSON.stringify({ is_active: false }),
            headers: {
                "Content-Type": "application/json",
                "auth-token": localStorage.getItem("auth-token"),
            },
        });
        updateClassEnd(true);
    };

    return (
        <div>
            <h1>Classroom {roomId}</h1>

            <ClassEndModal
                show={modalShow}
                onHide={() => {
                    setModalShow(false);
                    history.push("/dashboard");
                }}
            />

            {isTeacher ? (
                <TeacherControls
                    isClassActive={isClassActive}
                    startClass={startClass}
                    endClass={endClass}
                />
            ) : (
                ""
            )}
            <h1>Teachers</h1>
            <ul>
                {onlineTeachers.map((user) => {
                    return <li key={user}>{user}</li>;
                })}
            </ul>
            <h1>Students</h1>
            <ul>
                {onlineStudents.map((user) => {
                    return <li key={user}>{user}</li>;
                })}
            </ul>
        </div>
    );
};

export default Room;
